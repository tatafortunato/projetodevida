const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){

        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date ("2004-10-05T00:00:00");
const tempoObjetivo2 = new Date ("2004-12-05T00:00:00");
const tempoObjetivo3 = new Date ("2004-12-30T00:00:00");
const tempoObjetivo4 = new Date ("2004-02-01T00:00:00");

const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];

contadores[0].textcontent =  calculaTempo(tempos [0]);

function atualizaCronametro(){
      for (let i=0; i<contadores.length;i++){
    contadores[i].textcontent =  calculaTempo(tempos[i]);
}
} 

atualizaCronametro();

function calculaTempo(tempoObjetivo){
let tempoAtual = new Date();
let tempoFinal = tempoObjetivo - tempoAtual;
let segundos = math.floor(tempoFinal/1000);
let minutos = math.floor(segundos/60);
let horas = math.floor(minutos/60);
let dias = math.floor (horas /24);

segundos %=60;
minutos %=60;
horas %=24;
return dias + "dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos" ;
}

