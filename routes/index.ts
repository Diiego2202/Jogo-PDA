import app = require("teem");

interface Resposta {
	idregistro: number;
	competencia: number;
	pergunta: number;
	resposta: number;
	idusuario: number;
}

class IndexRoute {

	public async index(req: app.Request, res: app.Response){
		let idusuario: number;

		await app.sql.connect(async (sql) => {
			await sql.query("INSERT INTO usuario (dt) VALUES (now())");

			idusuario = await sql.scalar("SELECT last_insert_id()");
		});

		res.render("index/index", {
			idusuario: idusuario,
			layout: "layout-vazio"
		});
	}

	@app.http.post()
	@app.route.formData()
	public async cadastrarResposta(req: app.Request, res: app.Response){
		// Os dados enviados via POST ficam dentro de req.body
		const novas: Resposta[] = req.body;

		// É sempre muito importante validar os dados do lado do servidor,
		// mesmo que eles tenham sido validados do lado do cliente!!!
		if (!novas || !novas.length) {
			res.status(400);
			res.json("Dados inválidos");
			return;
		}

		for (let i = novas.length - 1; i >= 0; i--) {
			if (!novas[i]) {
				res.status(400);
				res.json("Dados inválidos");
				return;
			}
		}

		for (let i = novas.length - 1; i > 0; i--) {
			const a = novas[i], b = novas[i - 1];
			if (a.competencia !== b.competencia ||
				a.pergunta !== b.pergunta ||
				a.idusuario !== b.idusuario) {
				res.status(400);
				res.json("Dados inválidos");
				return;
			}
		}

		await app.sql.connect(async (sql) => {
			// Todas os comandos SQL devem ser executados aqui dentro do app.sql.connect().
			await sql.beginTransaction();

			const idusuario: number = await sql.scalar("select idusuario from usuario where idusuario = ?", [novas[0].idusuario]);

			if (!idusuario)
				return "Sessão não encontrada";

			const competencia = novas[0].competencia;
			const pergunta = novas[0].pergunta;

			const antigas: Resposta[] = (await sql.query("select idregistro, competencia, pergunta, resposta, idusuario from registro where competencia = ? and pergunta = ? and idusuario = ?", [competencia, pergunta, idusuario])) || []
			const atualizar: Resposta[] = [];

			for (let i = antigas.length - 1; i >= 0; i--) {
				const antiga = antigas[i];

				for (let j = novas.length - 1; j >= 0; j--) {
					const nova = novas[j];
					if (antiga.resposta == nova.resposta) {
						antigas.splice(i, 1);
						novas.splice(j, 1);
						break;
					}
				}
			}

			// Tenta reaproveitar os id's antigos se precisar adicionar algo novo
			for (let i = novas.length - 1; i >= 0; i--) {
				if (!antigas.length)
					break;

				const antiga = antigas.pop();
				antiga.resposta = novas[i].resposta;

				atualizar.push(antiga);

				novas.splice(i, 1);
			}

			for (let i = antigas.length - 1; i >= 0; i--)
				await sql.query("delete from registro where idregistro = ?", [antigas[i].idregistro]);

			for (let i = atualizar.length - 1; i >= 0; i--)
				await sql.query("update registro set resposta = ? where idregistro = ?", [atualizar[i].resposta, atualizar[i].idregistro]);

			for (let i = novas.length - 1; i >= 0; i--)
				await sql.query("insert into registro (competencia, pergunta, resposta, idusuario) values (?, ?, ?, ?)", [competencia, pergunta, novas[i].resposta, idusuario]);

			await sql.commit();
		});

		res.json(true);
	}
}

export = IndexRoute;