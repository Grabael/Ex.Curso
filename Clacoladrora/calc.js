const visor= document.getElementById('tela');
function adicionarTela(value){
    visor.value+=value; 
}
function limparTela(){
    visor.value='';
}
function calcular(){
    let result=eval(visor.value);
    visor.value=result;
}
document.addEventListener('keypress',function(e){
    if(e.key==='Enter'){
        calcular();
    }
});