"use strict";

// Cada competência é um array de telas

competencias[1] = [

	{ // tela "5" - essa questão está muito esquisito...
		urlImagem: "/public/img/nave.jpeg",
		titulo: "DESAFIO 5: [Combinar Ideias]",
		descricao: `
		<p>
			[Balão de Texto] – Você é enviado para uma nova área do planeta, a Biomind. Na Biomind buscamos ideias criativas para que a transição para o habitat de T0I700d seja feita de maneira natural e sustentável, de forma a construir uma mentalidade para a qual essa adaptação seja moldada. Há muito o que ser discutido e debatido sobre uma forma harmônica de se habitar esse novo local, de uma maneira que seja boa tanto para a comunidade futura quanto para o meio ambiente do planeta em si. Em seguida o doutor Leonel Carosello, vai explicar um pouco mais e pedir sugestões ou opiniões sobre determinados assuntos.
		</p>
		<p>
			DR. LEONEL CAROSELLO:
		</p>
		<p>
			QUESTÃO- Há muitos desafios envolvendo a habitação de um novo planeta. Primeiro precisamos controlar o impacto ambiental de modo que nossa presença não afete negativamente o planeta, também precisamos promover uma habitação segura para os seres humanos. Outros desafios também surgem com isso, como por exemplo, a criação de uma organização de sociedade e de regras para a convivência entre as pessoas e a natureza. Diante de tantos desafios, buscamos sugestões daqueles que mais serão impactados por essas decisões: vocês, futuros visitantes ou habitantes de T0I700d. Em sua opinião como devem ser os planos realizados para essa difícil tarefa?
		</p>
		`,
		alternativas: [
			{
				descricao: " Os desafios encontrados são muito diversos entre si. Seria impossível resolvê-los de forma conjunta, é preciso tratar cada assunto como uma coisa única sem misturar os planos e ideias. Somente fazendo essa divisão e atacando cada problema por vez é possível chegar a uma solução.",
				valor: 0, // Rubrica? Métrica de avaliação?...?
				marcada: false,
			},
			{
				descricao: " Para contornar esses desafios é necessária a criação de um plano que não só combine diferentes ideias sobre os problemas já conhecidos, mas que também antecipe outros futuros obstáculos a serem encontrados na ocupação do planeta.",
				valor: 0, // Rubrica? Métrica de avaliação?...?
				marcada: false,
			},
			{
				descricao: " Deveria haver uma espécie de guia de possibilidades futuras para que eu e o restante da comunidade pudéssemos desenvolver ideias.",
				valor: 0, // Rubrica? Métrica de avaliação?...?
				marcada: false,
			},
			{
				descricao: " Podemos combinar diferentes ideias a fim de obter soluções que abranjam mais de um problema. ",
				valor: 0, // Rubrica? Métrica de avaliação?...?
				marcada: false,
			},
			{
				descricao: " Há problemas que são inerentes ao desenvolvimento de uma sociedade e se faz necessário escolher prioridades. É impossível promover o desenvolvimento sem causar grandes impactos, portanto deve-se estabelecer qual problema é prioritário a fim de estabelecer um plano.",
				valor: 0, // Rubrica? Métrica de avaliação?...?
				marcada: false,
			},
			{
				descricao: " A sugestão de planos, táticas ou soluções propostas pelos habitantes deveriam partir única e exclusivamente de problemas orientados por cientistas ou pessoas mais entendidas do assunto.",
				valor: 0, // Rubrica? Métrica de avaliação?...?
				marcada: false,
			},
			{
				descricao: " Precisamos buscar, de maneira interconectada, ideias que contornem esses problemas. Por exemplo, meios de desenvolver a civilização no local ao mesmo tempo em que se preserve o meio ambiente. Essas ideias podem ainda se conectar com outros assuntos, como por exemplo a forma com que a arquitetura local será construída, ou até mesmo, com o modo com que se dá a exploração de novas áreas.",
				valor: 0, // Rubrica? Métrica de avaliação?...?
				marcada: false,
			},
			{
				descricao: " É possível por exemplo, tentar buscar a combinação entre ideias que gerem a sustentabilidade da natureza do planeta e também ideias que busquem promover a habitação local. Como, por exemplo, construir casas que não agridam o meio ambiente e usem energias limpas como a solar.",
				valor: 0, // Rubrica? Métrica de avaliação?...?
				marcada: false,
			},
			{
				descricao: " Não há cabimento para que a comunidade do planeta dê sugestões para esses tipos de problemas, uma vez que ela é incapaz de ter e combinar ideias sem que haja o auxílio de profissionais.",
				valor: 0, // Rubrica? Métrica de avaliação?...?
				marcada: false,
			},
			{
				descricao: " É necessário para que haja uma solução não somente combinação de diferentes ideias de diferentes áreas, mas também a constante busca por novas perspectivas e planos para contornar futuros problemas.",
				valor: 0, // Rubrica? Métrica de avaliação?...?
				marcada: false,
			},
			{
				descricao: " Não é possível propor ideias ou planos no momento. Os problemas vão surgindo na hora, conforme as coisas vão acontecendo, de maneira que as decisões devem ser tomadas de maneira situacional.",
				valor: 0, // Rubrica? Métrica de avaliação?...?
				marcada: false,
			},
			{
				descricao: " O projeto ideal precisa combinar diferentes ideias para atingir o resultado final. Em vez de se combater individualmente cada problema, podemos combinar planos para diferentes questões e uni-los a fim de criar soluções.",
				valor: 0, // Rubrica? Métrica de avaliação?...?
				marcada: false,
			}
		]
	},

	{ // tela 6 - essa questão está muito esquisito...
		urlImagem: "/public/img/nave.jpeg",
		titulo: "DESAFIO 6: [Defender Ideias] ",
		descricao: `
		<p>
			Continuando seus questionamentos sobre a formação de uma sociedade e habitação em um novo planeta, o doutor Carosello faz outra pergunta. 		</p>
		</p>
		<p>
			DR. LEONEL CAROSELLO:
		</p>
		<p>
			QUESTÃO- Supondo que a forma de organização escolhida para as decisões da civilização de T0I700d seja um conselho popular em conjunto com a comunidade científica. Imagine que após alguns meses você constatou um problema grave que atrapalha o dia a dia dos habitantes das quatro grandes áreas e que esteja gerando prejuízo: a presença de um animal que vive quebrando os painéis de energia solar. A fim de contornar esse problema, você sugere que os animais sejam capturados e transferidos para outro local onde não ofereçam, como por exemplo, uma floresta distante. No entanto, um dos cientistas argumenta que isso seria uma péssima ideia, uma vez que mover um animal de um local poderia afetar a cadeia alimentar dessa área e, além disso, é possível que os animais não sobrevivam a um habitat diferente. Como você reagiria a essa resposta?   
		</p>
		`,
		alternativas: [
			{
				descricao: " Entende as preocupações do cientista, mas ainda assim, reconhece que o problema pontuado por você é importante. Por isso, propõe uma nova solução: como por exemplo, que se pesquisem maneiras de proteger os painéis solares e fazê-los mais resistentes.",
				valor: 0, // Rubrica? Métrica de avaliação?...?
				marcada: false,
			},
			{
				descricao: " Retruca como os cientistas não pensam nos problemas vividos pelo dia a dia dos cidadãos normais.",
				valor: 0, // Rubrica? Métrica de avaliação?...?
				marcada: false,
			},
			{
				descricao: " Entende o ponto de vista do cientista e, após ouvi-lo, não dá mais opiniões",
				valor: 0, // Rubrica? Métrica de avaliação?...?
				marcada: false,
			},
			{
				descricao: " Percebe a razão nas críticas feitas pelo cientista, portanto melhor não intervir em como as coisas estão para não causar impactos na natureza.",
				valor: 0, // Rubrica? Métrica de avaliação?...?
				marcada: false,
			},
			{
				descricao: " Entende o ponto de vista do cientista, mas continua afirmando que o problema persiste e impacta na vida das pessoas causando quedas de energia e despesas.",
				valor: 0, // Rubrica? Métrica de avaliação?...?
				marcada: false,
			},
			{
				descricao: " Apesar do que o cientista falou, o problema continua impactando o cotidiano no planeta e algo ainda precisa ser feito. Você sugere uma medida menos drástica:  não transferir os animais, mas procurar meios de mantê-los minimamente distantes das fontes de energia. ",
				valor: 0, // Rubrica? Métrica de avaliação?...?
				marcada: false,
			},
			{
				descricao: " Afirma que a fala do cientista é irrelevante e só serve para iniciar uma disputa entre o conselho popular e o meio acadêmico.",
				valor: 0, // Rubrica? Métrica de avaliação?...?
				marcada: false,
			},
			{
				descricao: " Após a fala de um especialista não há mais argumentos a serem dados.",
				valor: 0, // Rubrica? Métrica de avaliação?...?
				marcada: false,
			},
			{
				descricao: " Percebe que as críticas do cientista são válidas, mas ainda assim defende que esse problema deve ser resolvido. No entanto não dá mais soluções, uma vez que é melhor deixá-las para quem entende melhor do assunto.",
				valor: 0, // Rubrica? Métrica de avaliação?...?
				marcada: false,
			},
			{
				descricao: " Procura dialogar para tentar buscar com a comunidade soluções que resolvam o problema sem causar os possíveis malefícios apontados pelo cientista.",
				valor: 0, // Rubrica? Métrica de avaliação?...?
				marcada: false,
			},
			{
				descricao: " Se recusa a participar de um meio em que não dão a devida importância às suas ideias.",
				valor: 0, // Rubrica? Métrica de avaliação?...?
				marcada: false,
			},
			{
				descricao: " Admite que há pontos válidos na crítica feita pelo cientista, no entanto, o problema continua atingindo os habitantes. É necessário correr os riscos, uma vez que não há certeza de que mover os animais afete a cadeia alimentar de forma negativa, é apenas uma possibilidade.",
				valor: 0, // Rubrica? Métrica de avaliação?...?
				marcada: false,
			}
		]
	},

	{ // tela 7
		urlImagem: "/public/img/nave.jpeg",
		titulo: "DESAFIO 7: [Propor soluções] ",
		descricao: `
		<p>
			Continuando seus questionamentos sobre a formação de uma sociedade e habitação em um novo planeta, o doutor Carosello faz outra pergunta.		</p>
		<p>
			DR. LEONEL CAROSELLO:
		</p>
		<p>
			QUESTÃO- Em meio a um processo de adaptação a um novo planeta podem acontecer diversas situações diferentes. Suponha que durante esse processo ocorra a seguinte questão: uma parte da população acaba com muita saudade da Terra e de coisas próprias de lá, causando indisposição e desânimo. Além disso, surgem alguns conflitos acerca da forma com que as cidades começam a se desenvolver pois alguns grupos visam incorporar modelos completamente diferentes dos quais as pessoas estão acostumadas, uma vez que em teoria seriam mais otimizados para T0I700d. Caso fosse consultado, qual seria a sua opinião acerca dessa situação? 		</p>
		`,
		alternativas: [
			{
				descricao: " Essas questões podem atrapalhar ou dificultar a adaptação das pessoas ao novo ambiente, que elas devem adotar como lar. No entanto, não há maneira de solucioná-las.",
				valor: 0, // Rubrica? Métrica de avaliação?...?
				marcada: false,
			},
			{
				descricao: " Esse tipo de conflitos não fazem sentido e com o desenvolver da sociedade, eles devem simplesmente desaparecer.",
				valor: 0, // Rubrica? Métrica de avaliação?...?
				marcada: false,
			},
			{
				descricao: " O problema descrito é grave uma vez que afeta o bem-estar dos cidadãos. É necessária uma solução para eles. Podemos propor a criação de grupos de apoio para essas pessoas, para que recebam auxílio psicológico nessa transição.",
				valor: 0, // Rubrica? Métrica de avaliação?...?
				marcada: false,
			},
			{
				descricao: " Para que a mudança para o planeta T0I700d seja realizada de forma mais tranquila e natural é necessário contornar esse problema. Para isso é preciso promover soluções e alternativas distintas que atendam aos diferentes anseios da população e, também, às suas individualidades. Poderiam ser construídos em conjunto com a nova cidade réplicas de monumentos terrestres e, também, criadas atividades específicas buscando visar diferentes grupos de pessoas, que remetam à vida terrestre e possam diminuir a sensação de estranhamento ao novo cotidiano.  ",
				valor: 0, // Rubrica? Métrica de avaliação?...?
				marcada: false,
			},
			{
				descricao: " A situação afeta bastante a maneira com que a transição é realizada uma vez que a indisposição das pessoas pode contribuir para uma má adaptação ao novo ambiente. Podemos tentar encontrar uma maneira de contornar a situação por meio do incentivo à prática de esportes, a fim de trazer mais disposição e ânimo para essas pessoas. ",
				valor: 0, // Rubrica? Métrica de avaliação?...?
				marcada: false,
			},
			{
				descricao: " Essa questão é bastante comum à vivência do dia a dia em sociedade, seria assim em todo e qualquer planeta.",
				valor: 0, // Rubrica? Métrica de avaliação?...?
				marcada: false,
			},
			{
				descricao: " Faz-se necessária uma solução para essa questão, uma vez que ela afeta diretamente a qualidade de vida dos habitantes. Dessa forma, como essa solução poderiam ser realizadas atividades tipicamente terrestres de forma a abrandar a saudade da Terra. ",
				valor: 0, // Rubrica? Métrica de avaliação?...?
				marcada: false,
			},
			{
				descricao: " A questão descrita constitui em um problema, uma vez que pode deixar os cidadãos aflitos e interferir no seu cotidiano. No entanto, nenhuma ação pode ser feita para alterar questões tão subjetivas e íntimas, resta aguardar que, com o tempo, as coisas melhorem. ",
				valor: 0, // Rubrica? Métrica de avaliação?...?
				marcada: false,
			},
			{
				descricao: " O caso gera um grande desânimo e aflição à sociedade, o que pode prejudicar não só na vida das pessoas, mas também no sucesso da mudança para o novo planeta. É preciso buscar soluções originais, com diferentes alternativas que se enquadrem para diversas demandas. É possível oferecer apoio psicológico para aqueles que estão com saudade de casa, promover a criação de zonas da nova cidade mais semelhantes às terras natais das pessoas, além de muitas outras medidas – uma boa ideia seria ouvir das pessoas o que as faria se sentirem mais à vontade em seu novo lar.  ",
				valor: 0, // Rubrica? Métrica de avaliação?...?
				marcada: false,
			},
			{
				descricao: " A situação descrita afeta a vida dos cidadãos, seu cotidiano e toda a transição para o novo ambiente. Para contorná-la, o correto seria buscar diferentes alternativas e soluções que possam fazer com que essa mudança se dê de forma mais natural. Para isso é possível convocar reuniões buscando ouvir as demandas e aflições dos habitantes. Além disso, o processo de construção das novas cidades poderia tentar incorporar uma união entre o novo e o antigo, tentando ao mesmo tempo tentar trazer um ambiente mais familiar – semelhante ao terrestre – mas também atender às demandas do novo planeta.  ",
				valor: 0, // Rubrica? Métrica de avaliação?...?
				marcada: false,
			},
			{
				descricao: " É normal que o processo de transição para um ambiente novo leve um tempo, as coisas estão apenas seguindo seu processo normal. Não há problemas.",
				valor: 0, // Rubrica? Métrica de avaliação?...?
				marcada: false,
			},
			{
				descricao: " A situação descrita interfere negativamente e atrapalha o período de transição para o novo ambiente. Porém, não há nada que se possa fazer uma vez que são de conflitos internos e íntimos de cada pessoa.",
				valor: 0, // Rubrica? Métrica de avaliação?...?
				marcada: false,
			}
		]
	}
	
];
