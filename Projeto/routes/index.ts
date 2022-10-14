import app = require("teem");

class IndexRoute {

	@app.http.post()
	@app.route.formData()
	public async cadastrarResposta(req: app.Request, res: app.Response){
		// Os dados enviados via POST ficam dentro de req.body
		let registro = req.body;

		// É sempre muito importante validar os dados do lado do servidor,
		// mesmo que eles tenham sido validados do lado do cliente!!!
		if (!registro) {
			res.status(400);
			res.json("Dados inválidos");
			return;
		}

		await app.sql.connect(async (sql) => {

			// Todas os comandos SQL devem ser executados aqui dentro do app.sql.connect().

			// As interrogações serão substituídas pelos valores passados ao final, na ordem passada.
			await sql.query("INSERT INTO registro (idregistro, competencia, pergunta, resposta, idUsuario) VALUES (?, ?, ?, ?, ?)", [registro.idregistro, registro.competencia, registro.pergunta, registro.resposta, registro.idUsuario]);

		});

		res.json(true);
	}
}

export = IndexRoute;