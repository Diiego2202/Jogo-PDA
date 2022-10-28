"use strict";

let competencias = new Array(4);
let competenciaAtual = 0;
let telaAtual = 0;

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

function irParaProxima() {
	if (competenciaAtual >= (competencias.length - 1) && telaAtual >= (competencias[competenciaAtual].length - 1))
		return;

	armazenarAlternativasAtuais();

	let questaoAtualEmBranco = alternativasEstaoEmBrancoAtual();
	
	if(questaoAtualEmBranco) {
		Swal.fire({
			icon: 'error',
			title: 'Opa',
			text: 'Você deixou a questão em branco'
		  })
	} else {
		telaAtual++;
		if (telaAtual > (competencias[competenciaAtual].length - 1)) {
			competenciaAtual++;
			telaAtual = 0;
		}
		renderTela();;
	}
}

function alternativasEstaoEmBranco() {
	for(let i = 0; i < competencias.length; i++) {
		let competencia = competencias[i];
		for(let j = 0; j < competencia.length; j++) {
			let tela = competencia[j];
			let alternativas = tela.alternativas;
			if (alternativas && alternativas.length) {
				let temPreenchido = false;
				for (let k = 0; k < alternativas.length; k++) {
					if (alternativas[k].marcada) {
						temPreenchido = true;
						break;
					}
				}
				if (!temPreenchido) {
					return true;
				}
			}
		}
	}
	return false;
}

function alternativasEstaoEmBrancoAtual() {
	let competencia = competencias[competenciaAtual];
	let tela = competencia[telaAtual];
	let alternativas = tela.alternativas;
	if (alternativas && alternativas.length) {
		let temPreenchido = false;
		for (let k = 0; k < alternativas.length; k++) {
			if (alternativas[k].marcada) {
				temPreenchido = true;
				break;
			}
		}
		if (!temPreenchido) {
			return true;
		}
	}
	return false;
}

function Finalizar() {
	if (competenciaAtual < (competencias.length - 1) || telaAtual < (competencias[competenciaAtual].length - 1))
		return;

	armazenarAlternativasAtuais();

	let questoesEmBranco = alternativasEstaoEmBranco();

	if(questoesEmBranco) {
		Swal.fire({
			icon: 'error',
			title: 'Opa',
			text: 'Você deixou alguma alternativa em branco'
		  })
	} else {
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

	// testes insert
	let opcoes = {
		method = "POST",
		body: new FormData(form)
	}

	try {
		let response = await fetch("/cadastrarResposta", opcoes);

		if (response.ok) {
			// Limpa os campos para facilitar a criação da próxima pessoa.
			form.reset();
			// Limpa os erros e sucessos.
			$(form).validate().resetForm();

			Swal.fire("Sucesso!", "Pergunta cadastrada", "success");
		} else {
			Swal.fire("Erro!", "Ocorreu um erro na finalização", "error");
		}
	} catch (ex) {
		Swal.fire("Erro!", "Erro de rede: " + ex.message, "error");
	}
	//

}

function renderTela() {
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
