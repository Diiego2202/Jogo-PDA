"use strict";

// Esses são valores de referência! É só ajustar aqui que o resto se adapta!
let larguraPadrao = 1280,
	alturaPadrao = 720,
	// O tamanho da fonte (1em) vai ser alturaTela / 24 (se quiser mais ou menos, é só ajustar aqui)
	linhasPorTela = 30,
	// Quando tamanhoDaFonteInteiro é true, tamanhos de fonte como 12.3, 12.5, 12.95 viram 12
	tamanhoDaFonteInteiro = false,
	// Se ocuparTelaUltraWide for false, podem aparecer barras laterais em telas ultrawide
	ocuparTelaUltraWide = true;

let main = document.getElementById("main"),
	cover = document.getElementById("cover"),
	larguraTela = 0,
	alturaTela = 0,
	tamanhoDaFonte = 0,
	fatorDeEscala = -1,
	aviso = null,
	iOSOuSafari = (function () {
		// https://stackoverflow.com/q/9038625/3569421
		if ((navigator.userAgent.indexOf("Chrome") <= 0 && navigator.userAgent.indexOf("Safari") >= 0) ||
			(navigator.userAgent.indexOf("Mac") >= 0 && ("ontouchend" in document)))
			return true;
		switch (navigator.platform) {
			case "iPad Simulator":
			case "iPhone Simulator":
			case "iPod Simulator":
			case "iPad":
			case "iPhone":
			case "iPod":
				return true;
		}
		return false;
	})();

function ajustarJanela() {
	larguraTela = window.innerWidth,
	alturaTela = window.innerHeight;

	if (document.documentElement && ("clientWidth" in document.documentElement)) {
		larguraTela = document.documentElement.clientWidth;
		alturaTela = document.documentElement.clientHeight;
	}

	if (iOSOuSafari) {
		let bodyRect = null;

		if (document.documentElement && ("getBoundingClientRect" in document.documentElement))
			bodyRect = document.documentElement.getBoundingClientRect();
		else if (("getBoundingClientRect" in document.body))
			bodyRect = document.body.getBoundingClientRect();

		if (bodyRect) {
			larguraTela = bodyRect.right - bodyRect.left;
			alturaTela = bodyRect.bottom - bodyRect.top;
		}
	}

	let transform = "scale(" + Math.ceil(larguraTela * 0.25) + "," + Math.ceil(alturaTela * 0.25) + ")";
	cover.style["oTransform"] = transform;
	cover.style["msTransform"] = transform;
	cover.style["mozTransform"] = transform;
	cover.style["webkitTransform"] = transform;
	cover.style.transform = transform;

	let fatorDeEscalaAntigo = fatorDeEscala,
		ratioAtual = larguraTela / alturaTela,
		ratioDesejado = larguraPadrao / alturaPadrao,
		width = larguraTela,
		height = alturaTela;

	if (ratioAtual >= ratioDesejado) {
		fatorDeEscala = alturaTela / alturaPadrao;
		// Tenta ocupar a tela toda em telas ultrawide
		if (!ocuparTelaUltraWide) {
			width = larguraPadrao * fatorDeEscala;
		}
	} else {
		fatorDeEscala = larguraTela / larguraPadrao;
		height = alturaPadrao * fatorDeEscala;
	}

	let left = ((larguraTela - width) * 0.5) | 0,
		top = ((alturaTela - height) * 0.5) | 0;
	if (left < 0) {
		left = 0;
	}
	if (top < 0) {
		top = 0;
	}

	main.style.left = left + "px";
	main.style.top = top + "px";
	main.style.width = width + "px";
	main.style.height = height + "px";

	if (larguraTela <= alturaTela) {
		if (!aviso) {
			aviso = document.createElement("div");
			aviso.setAttribute("id", "aviso");
			aviso.textContent = "A página funciona melhor no modo paisagem (deitada)";
			document.body.appendChild(aviso);
		}
	} else if (aviso) {
		document.body.removeChild(aviso);
		aviso = null;
	}

	if (fatorDeEscala !== fatorDeEscalaAntigo) {
		tamanhoDaFonte = height / linhasPorTela;
		if (tamanhoDaFonteInteiro) {
			tamanhoDaFonte = tamanhoDaFonte | 0;
		}

		let fontSize = tamanhoDaFonte + "px";
		if (document.documentElement) {
			document.documentElement.style.fontSize = fontSize;
		}
		document.body.style.fontSize = fontSize;
	}
}

window.onresize = ajustarJanela;

ajustarJanela();

setTimeout(function () {
	let botao = document.getElementById("botao");

	botao.onclick = function () {
		iniciar(); // jogo.js
	};

	cover.classList.remove("visible");
	setTimeout(function () {
		document.body.removeChild(cover);
	}, 550);
}, 100);
