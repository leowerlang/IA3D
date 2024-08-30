const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [
    {
        enunciado: "Voce concorda coma IA?",
        alternativas:["Sim","Nao"]
    },
    {
        enunciado: "A IA é eficaz?",
        alternativas:["Sim","Nao"]
    },
    {
        enunciado: "A IA é confiavel?",
        alternativas:["Sim","Nao"]
    }
]

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    mostraalternativas();
}
function mostraalternativas();{
     for(const alternativa of perguntaAtual.alternativa){
        const botao.Alternativas = document.createElement("button");
        botaoAlternativa.textContent = alternativa;
     }
}
