import app = require("teem");

class IndexRoute {

	public async index(req: app.Request, res: app.Response){
		res.render("index/index", {
			layout: "layout-vazio"
		});
	}

	@app.http.post()
	@app.route.formData()
	public async cadastrarResposta(req: app.Request, res: app.Response){
		// Os dados enviados via POST ficam dentro de req.body
		let registros: any[] = req.body;

		// É sempre muito importante validar os dados do lado do servidor,
		// mesmo que eles tenham sido validados do lado do cliente!!!
		if (!registros || !registros.length) {
			res.status(400);
			res.json("Dados inválidos");
			return;
		}

		await app.sql.connect(async (sql) => {

			// Todas os comandos SQL devem ser executados aqui dentro do app.sql.connect().
			await sql.beginTransaction();

			await sql.query("INSET INTO usuario (idusuario, dt) VALUES (?, now())");

			const idusuario = await sql.scalar("SELECT last_insert_id()");

			for (let i = 0; i < registros.length; i++) {
				const registro = registros[i];
				// As interrogações serão substituídas pelos valores passados ao final, na ordem passada.
				await sql.query("INSERT INTO registro (competencia, pergunta, resposta, idusuario) VALUES (?, ?, ?, ?)", [registro.competencia, registro.pergunta, registro.resposta, idusuario]);
			}

			await sql.commit();
		});

		res.json(true);
	}
}

export = IndexRoute;