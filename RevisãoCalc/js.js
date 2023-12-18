    // chamando os elementos pelo ID que dei no HTML
function calcular(){
    var number1 = document.getElementById('numero1').value;
    var number2 = document.getElementById('numero2').value;
    var result =  document.getElementById('resultado');
    // se qualquer input for = 0 (sem nada) escrever o texto
    if(number1 === '' ||number2 === ''){
        result.innerHTML='Campo Vazio! Por favor preencha o campo acima'
        return;
    }  
    // resultado escreve no html no paragrafo cujo ID é ''resultado'' e eu nomeei a variavel de result e escreve o resultado dessa função
    result.innerHTML = " Deus criou adição e subtração, diabo veio e criou o MMC que por sinal seu resultado é " + calculMMC(number1, number2);
}
    // função para calcular o MMC(minimo multiplo comum)
function calculMMC(number1, number2){
    var operaco, x, y;
    x = number1;
    y = number2;
    if(x==0 || y==0){
        return ("número = 0")
    }
    // enquanto (operaco for diferente de 0) execute a função {operaco  = number1 resto( resto de uma divisão ) number2}
     while(operaco!=0){
        operaco  = x % y;
        x = y;
        y = operaco;
    }
    // 
    return (number1*number2)/x;
};