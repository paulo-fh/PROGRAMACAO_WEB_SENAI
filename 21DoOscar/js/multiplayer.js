let jogador_01 = document.getElementById("joga1"),
    jogador_02 = document.getElementById("joga2"),
    placar_total = document.getElementById("placar");
    
let btn01 = document.getElementById("btn_1"),
    btn02 = document.getElementById("btn_2"),
    btn03 = document.getElementById("btn_3"),
    btn04 = document.getElementById("btn_4"),
    btn05 = document.getElementById("btn_5"),
    btn06 = document.getElementById("btn_6");

let num = 0;
placar_total.value = num;

document.getElementById("jogad2").style.display = "none";

// função contabilizar jogo 
btn01.onclick = () => {
    aparece("jogad2")
    some("jogad1")
    atualiza_valor(1)
}
btn02.onclick = () => {
    aparece("jogad2")
    some("jogad1")
    atualiza_valor(2)
}
btn03.onclick = () => {
    aparece("jogad2")
    some("jogad1")
    atualiza_valor(3)
}

btn04.onclick = () => {
    aparece("jogad1")
    some("jogad2")
    atualiza_valor(1)
}
btn05.onclick = () => {
    aparece("jogad1")
    some("jogad2")
    atualiza_valor(2)
}
btn06.onclick = () => {
    aparece("jogad1")
    some("jogad2")
    atualiza_valor(3);
}


//função atualiza valores
function atualiza_valor(val) {
    let totalsun = Number(+placar_total.value + val);
    if (totalsun == 21) {        
        vencedor()
    } else if(totalsun > 21){
        perdedor();
    }
    placar_total.value = totalsun;
    flush();
}

function some(val) {
    document.getElementById(val).style.display = "none";
}

function aparece(val) {
    document.getElementById(val).style.display = "block";
}

// função para as regras
function rules(){
    let secao_01 = document.getElementById('secao01');
    let secao_02 = document.getElementById('secao02');   
    let rules = document.getElementById('rules');

    secao_01.style.display = 'none';
    secao_02.style.display = 'none';   

    rules.style.display = 'block';  
}

function aparecerules(){
    let secao_01 = document.getElementById('secao01');
    let secao_02 = document.getElementById('secao02');     
    let rules = document.getElementById('rules');

    secao_01.style.display = 'flex'
    secao_02.style.display = 'flex';  

    rules.style.display = 'none';  
}

// Função que o vencedor
function vencedor(){
    let secao_01 = document.getElementById("secao01")
    let secao_02 = document.getElementById("secao02")
    let venceu = document.getElementById('vencedor')
    let icon = document.getElementById('icones')

    secao_01.style.display ='none'
    secao_02.style.display ='none'
    venceu.style.display = 'block'
    icon.style.display = 'none'

    
}
function perdedor(){
    let secao_01 = document.getElementById("secao01")
    let secao_02 = document.getElementById("secao02")
    let perdeu = document.getElementById('perdedor')
    let icon = document.getElementById('icones')

    secao_01.style.display ='none'
    secao_02.style.display ='none'
    perdeu.style.display = 'block'
    icon.style.display = 'none'
}

