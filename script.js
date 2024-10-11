const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [     //serve para abrir lista de perguntas
    {   //abre o objeto das perguntas
        enunciado: "Você acha que IA vai dominar o mundo?",
        alternativas: [
            {texto: "Sim",
            afirmação:"A IA vai dominar o mundo"}, 

            {texto: "Não",
            afirmação:"A IA não dominará o mundo"}]
    },
    { 
        enunciado: "A IA vai ajudar muuito a parte medica?",
        alternativas: [
            {texto: "Sim",
            afirmação:"A IA vai ajuadar a longo prazo a parte medica"}, 
                
            {texto: "Não",
            afirmação:"A IA jamais vai conseguir ajudar a medicina"}]
    },
    { 
        enunciado: "A IA está para uso de todos?",
        alternativas: [
            {texto: "Sim",
            afirmação:"Sim, a IA pode ter acesso todos"}, 
                
            {texto: "Não",
            afirmação:"Não, a IA não é para o uso de todos"}]
    },
]

let posicao = 0;
let perguntaAtual;
let respostas = "";

function mostraPergunta() {
    if (posicao >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmaçâo;
    respostas += afirmacoes + " ";
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "Em 25 anos...";
    textoResultado.textContent = respostas;
    caixaAlternativa.textContent = "";
}
mostraPergunta();