function calcular(){
    var number1 = document.getElementById('numero1').value;
    var number2 = document.getElementById('numero2').value;
    var seletor = document.getElementById('operacao').value;
    var result =  document.getElementById('resultado');
    
    if(inpu === '' ||number2 === ''){
        result.innerHTML='Campo Vazio! Por favor preencha o campo acima'
        return;
    }
    if(seletor === "+" ){
        result.innerHTML=  parseInt(number1) + parseInt(number2);
    } else if(seletor === "-"){
        result.innerHTML= number1 - number2;
    } else if(seletor === "/"){
        result.innerHTML= number1 / number2;
    } else if(seletor === "*"){
        result.innerHTML= number1 * number2;
    }
}