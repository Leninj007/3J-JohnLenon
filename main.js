const botoes  = document.querySelectorAll(".botao");
const conteudo  = document.querySelectorAll(".aba-conteudo");
const tempo = document.querySelectorAll(".contador");
 tempo[0]. textContent = "Olá";
const tempoObjetivo1 = new Date(2024, 7,29);
const tempoObjetivo2 = new Date(2024, 8,29);
const tempoObjetivo3 = new Date(2024, 9,29);
const tempoObjetivo4 = new Date(2024, 10,29);
let segundos;
let minutos;
let horas;
let dias;
const agora = new Date();
tempo[0].  textContent = tempoObjetivo1 - agora;

segundos = (tempoObjetivo1 - agora)/1000;
minutos = segundos/60;
horas = minutos/60;
dias = horas/24;

for (let i = 0; i < botoes.length ; i++){
    botoes[i].onclick = function(){
    for (j=0;j<botoes.length;j++){
        botoes[j].classList.remove("ativo");
        conteudo[j].classList.remove("ativo")
    }
    botoes[i].classList.add("ativo")
    conteudo[i].classList.add("ativo")
  }
}
