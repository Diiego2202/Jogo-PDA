import app = require("teem");

class IndexRoute {
	public async index(req: app.Request, res: app.Response) {
		res.render("index/index");
	}

	public async teste(req: app.Request, res: app.Response) {
		res.send("Eu sou um texto...");
	}
}

export = IndexRoute;
