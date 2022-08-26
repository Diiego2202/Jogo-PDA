let competencias = new Array(4);
let competenciaAtual = 0;
let telaAtual = 0;
let main = document.getElementById("main");

function irParaAnterior() {
	if (!competenciaAtual && !telaAtual)
		return;

	telaAtual--;
	if (telaAtual < 0) {
		competenciaAtual--;
		telaAtual = competencias[competenciaAtual].length - 1;
	}

	renderTela();
}

function irParaProxima() {
	if (competenciaAtual >= (competencias.length - 1) && telaAtual >= (competencias[competenciaAtual].length - 1))
		return;

	telaAtual++;
	if (telaAtual >= (competencias[competenciaAtual].length - 1)) {
		competenciaAtual++;
		telaAtual = 0;
	}

	renderTela();
}

function renderTela() {
	// @@@ fade in

	const tela = competencias[competenciaAtual][telaAtual];

	let html = `
		// @@@
		html inicial padrão com a imagem e,
		eventualmente, botões anterior/próxima
	`;

	if (tela.titulo) {
		// @@@ criar HTML para o título
	}

	if (tela.descricao) {
		// @@@ criar HTML para a descrição
	}

	if (tela.alternativas && tela.alternativas.length) {
		// @@@ criar HTML para as alternativas
	}

	main.innerHTML = html;

	// @@@ fade out
}

function iniciar() {
	renderTela();
}

// restante do código...
