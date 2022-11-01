"use strict";

let competencias = new Array(4);
let competenciaAtual = 0;
let telaAtual = 0;
let fading = false;
let enviando = false;

let encode = (function () {
	var amp = /\&/g, lt = /</g, gt = />/g, quot = /\"/g, apos = /\'/g;
	window.encodeValue = function (x) {
		return (x ? x.replace(amp, "&amp;").replace(lt, "&lt;").replace(gt, "&gt;").replace(quot, "&quot;").replace(apos, "&apos;") : "");
	};
	return function (x) {
		return (x ? x.replace(amp, "&amp;").replace(lt, "&lt;").replace(gt, "&gt;") : "");
	};
})();

function armazenarAlternativasAtuais() {
	const tela = competencias[competenciaAtual][telaAtual];
    if (tela.alternativas && tela.alternativas.length) {
        for (let i = 0; i < tela.alternativas.length; i++) {
			let item = document.getElementById("itemCheck" + i);
			tela.alternativas[i].marcada = item.checked;
        }
    }
}

function alternativasAtuais() {
	let selecao = [];
	let competencia = competencias[competenciaAtual];
	let tela = competencia[telaAtual];
	let alternativas = tela.alternativas;
	if (alternativas && alternativas.length) {
		for (let k = 0; k < alternativas.length; k++) {
			if (alternativas[k].marcada) {
				selecao.push({
					competencia: competenciaAtual,
					pergunta: telaAtual,
					resposta: k,
					idusuario: idusuario
				});
			}
		}
	}
	return selecao;
}

function irParaAnterior() {
	if (!competenciaAtual && !telaAtual)
		return;

	armazenarAlternativasAtuais();

	telaAtual--;
	if (telaAtual < 0) {
		competenciaAtual--;
		telaAtual = competencias[competenciaAtual].length - 1;
	}

	renderTela();
}

async function enviarAlternativas(selecao) {
	try {
		// @@@ exibir spinner

		enviando = true;

		const response = await fetch("/cadastrarResposta", {
			method: "POST",
			body: JSON.stringify(selecao),
			headers: {
				"Content-Type": "application/json"
			}
		});

		if (!response.ok) {
			Swal.fire({
				icon: 'error',
				title: 'Opa',
				text: 'Ocorreu um erro de rede ao enviar as alternativas: ' + response.status
			});
	
			return false;
		}

		return true;
	} catch (ex) {
		Swal.fire({
			icon: 'error',
			title: 'Opa',
			text: 'Ocorreu um erro de rede ao enviar as alternativas: ' + ex.message
		});

		return false;
	} finally {
		enviando = false;
		// @@@ ocultar spinner
	}
}

async function irParaProxima() {
	if (fading || enviando || competenciaAtual >= (competencias.length - 1) && telaAtual >= (competencias[competenciaAtual].length - 1))
		return;

	armazenarAlternativasAtuais();

	let selecao = alternativasAtuais();

	if(!selecao.length) {
		Swal.fire({
			icon: 'error',
			title: 'Opa',
			text: 'Você deixou a questão em branco'
		});
	} else {
		if (!await enviarAlternativas(selecao))
			return;

		telaAtual++;
		if (telaAtual > (competencias[competenciaAtual].length - 1)) {
			competenciaAtual++;
			telaAtual = 0;
		}
		renderTela();
	}
}

async function Finalizar() {
	if (fading || enviando || competenciaAtual < (competencias.length - 1) || telaAtual < (competencias[competenciaAtual].length - 1))
		return;

	armazenarAlternativasAtuais();

	let selecao = alternativasAtuais();

	if(!selecao.length) {
		Swal.fire({
			icon: 'error',
			title: 'Opa',
			text: 'Você deixou alguma alternativa em branco'
		  })
	} else {
		if (!await enviarAlternativas(selecao))
			return;

		main.innerHTML = `<div class="regras">
		<div class="regras_titulo_fim">
			<span>Parabéns pela conclusão 🥳</span>
		</div>
		<div class="regras_lista_fim">
			<div class="informacao">Seu resultado:</div>
			<div></div>
		</div>
	</div>`;
	}
}

function renderTela() {
	//main.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	main.scrollTo(0, 0);

	// @@@ fade in

	const tela = competencias[competenciaAtual][telaAtual];

	let html = `<div class="corpo">`;

	if (tela.titulo) {
		// @@@ criar HTML para o título
		html += `<p class="corpo_titulo">${encode(tela.titulo)}</p>`;
	}

	if (tela.urlImagem) {
		html += `<p class="img_tela"><img src="${encode(tela.urlImagem)}"/></p>`;
	}
	

	if (tela.descricao) {
		// @@@ criar HTML para a descrição
		html += `<div class="corpo_descricao">${tela.descricao}</div>`;
	}

	if (tela.alternativas && tela.alternativas.length) {
		// @@@ criar HTML para as alternativas
		for (let i = 0; i < tela.alternativas.length; i++) {
			html += `<p><label class="chk-verde"><input id="itemCheck${i}" type="checkbox" ${(tela.alternativas[i].marcada ? 'checked="checked"' : '')} class="chk"><span class="icone"><span></span></span>
						${encode(tela.alternativas[i].descricao)}
					</input></label></p>`;
		}
	}

	if(tela != competencias[0][0]) { 
		html += `<p class="btn-botao"><button class="btn-opcao" onclick="irParaAnterior()">Anterior</button></p>`;
	} 
	
	if (tela != competencias[competencias.length - 1][competencias[competenciaAtual].length - 1]) {
		html += `<p class="btn-botao"><button class="btn-opcao" onclick="irParaProxima()">Próxima</button></p>`;
	}

	if (tela == competencias[competencias.length - 1][competencias[competenciaAtual].length - 1]) {
		html += `<p class="btn-botao"><button class="btn-final" onclick="Finalizar()">Finalizar</button></p>`;
	}
	
	html += `</div>`;

	main.innerHTML = html;

	// @@@ fade out
}

function iniciar() {
	renderTela();
}
