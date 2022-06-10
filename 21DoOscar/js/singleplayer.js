let jogador_01 = document.getElementById("joga1"),
    comput = document.getElementById("computer"),
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

btn01.onclick = () => {
    aparece("jogad2")
    some("jogad1")        
    atualizaValorJogador(1) 
    atualizaValorComputador()            
}             

btn02.onclick = () => {
    aparece("jogad2")
    some("jogad1")   
    atualizaValorJogador(2)
    atualizaValorComputador()       
}        

btn03.onclick = () => {
    aparece("jogad2")
    some("jogad1")     
    atualizaValorJogador(3)
    atualizaValorComputador()        
}           

//função atualiza valores do jogador 1 com o placar
function atualizaValorJogador(val) {
    let totalsun = Number(+placar_total.value + val);     
    if (totalsun == 21) {        
        vencedor()
    } else if(totalsun > 21){
        perdedor();
    }
    placar_total.value = totalsun;    
}

// função que gera valores aleatorio de 1 à 3
function valorAleatorio() {    
    let min = Math.ceil(1);
    let max = Math.floor(3);       
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

//função soma valores aleatorios(computador) com placar atual
function atualizaValorComputador() {
    setTimeout(() => {
        let valorComputador = valorAleatorio()
        let totalsun = Number(+placar_total.value + valorComputador);  
        aparece("jogad1")
        some("jogad2")   
        if (totalsun == 21) {        
            vencedor()
        } else if(totalsun > 21){
            perdedor();
        }         
           
        return placar_total.value = totalsun;    
    }, 1000) 
   
    
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
    icon.style.display = 'none'
    venceu.style.display = 'block'     
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


