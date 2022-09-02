let competencias = new Array(4);
let competenciaAtual = 0;
let telaAtual = 0;
let main = document.getElementById("main");

let encode = (function () {
	var amp = /\&/g, lt = /</g, gt = />/g, quot = /\"/g, apos = /\'/g;
	window.encodeValue = function (x) {
		return (x ? x.replace(amp, "&amp;").replace(lt, "&lt;").replace(gt, "&gt;").replace(quot, "&quot;").replace(apos, "&apos;") : "");
	};
	return function (x) {
		return (x ? x.replace(amp, "&amp;").replace(lt, "&lt;").replace(gt, "&gt;") : "");
	};
})();

function irParaAnterior() {
	if (!competenciaAtual && !telaAtual)
		return;

	telaAtual--;
	if (telaAtual < 0) {
		competenciaAtual--;
		telaAtual = competencias[competenciaAtual].length - 1;
	}

	html = "";
	main.innerHTML = html;
	renderTela();
}

function irParaProxima() {
	if (competenciaAtual >= (competencias.length - 1) && telaAtual >= (competencias[competenciaAtual].length - 1))
		return;

	telaAtual++;
	if (telaAtual > (competencias[competenciaAtual].length - 1)) {
		competenciaAtual++;
		telaAtual = 0;
	}
	
	html = "";
	main.innerHTML = html;
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
		html += `<p>${encode(competencias[competenciaAtual][telaAtual].titulo)}</p>`;
	}

	if (tela.descricao) {
		// @@@ criar HTML para a descrição
		html += `<p>${encode(competencias[competenciaAtual][telaAtual].descricao)}</p>`;
	}

	if (tela.alternativas && tela.alternativas.length) {
		// @@@ criar HTML para as alternativas
		for (let i = 0; i < tela.alternativas.length; i++) {
			html += `<p>${encode(competencias[competenciaAtual][telaAtual].alternativas[i].descricao)}</p>`;
		}
	}

	if(tela != competencias[0][0]) { 
		html += `<p><button class="btn-opcao" onclick="irParaAnterior()">Anterior</button></p>`;
	} 
	
	if (tela != competencias[competencias.length - 1][competencias[competenciaAtual].length - 1]) {
		html += `<p><button class="btn-opcao" onclick="irParaProxima()">Próxima</button></p>`;
	}

	main.innerHTML = html;

	// @@@ fade out
}

function iniciar() {
	renderTela();
}

// restante do código...
