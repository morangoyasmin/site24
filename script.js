const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Após a destruição de quase toda a natureza do planeta, o que causou graves problemas para a humanidade. A raça humana decidiu tranformar suas cidades em grandes florestas urnabas. Criaram novos predios, plantaram arvores pela cidade tornando o ambiente mais estetico. A Inteligência Artificial foi uma das grandes arquitetas para esse novo mundo.",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "afirmação"
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Com tais mudanças, a Inteligência Artificial foi melhorada e usada para ajudar acriar novas alternativas caso outra geração da raça humana resolvesse destruir o planeta e comprometer a vida na Terra novamente. Qual melhoria você faria?",
        alternativas: [
            {
                texto: "Permitiria que a IA pudesse criar e/ou controlar armas de destruição em massa para destruir os humanos, caso da humanidade se perder novamente.",
                afirmacao: "afirmação"
            },
            {
                texto: "Capacitar a IA para ajudar a criar novas plantas para a medicina, criar novos automoveis e ajudar a educar a proxima geranção. ",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Após alguns anos um grupo de pessoas começou a discutir sobre com a IA  estava controlando o mundo, tirando oportunidades de emprego de muitos. Como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA não esta tirando oportunides, é sim, o ser humano esta ficando muito preguiçoso.",
                afirmacao: "afirmação"
            },
            {
                texto: "Afirma que a IA logo ira substitiur os seres humanos em todas as áreas de trabalho ainda existentes.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Durante anos de discussão e tramites politicos, foi decidido que a IA seria desliga em pontos não essênciais, para serem ocupadas por pessoas. Quais são eles?",
        alternativas: [
            {
                texto: "Medicina, engenharia, fabricas de energia, segurança, bioquimica, criação belica.",
                afirmacao: "afirmação"
            },
            {
                texto: "Educação, comunicação, agricultura, advogado, destista, procedimento estetico.",
                afirmacao: "afirmação"
            }
        ]
    },




    
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "afirmação"
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
