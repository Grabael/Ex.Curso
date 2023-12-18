function adicionarTarefa(){
    const campo=document.getElementById('resposta')
    const escrever=document.getElementById('input').value;
    console.log(escrever);
    if(escrever === ''){
        campo.innerHTML='<p class="conteudo" id="conte"> Campo Vazio! Por favor preencha o campo acima </p>'
        return;
    }else{
       
        campo.innerHTML+= '<li>'+escrever+'</li>'
        const conteudo=document.getElementById('conte')
        console.log(conteudo);
        conteudo.innerHTML=''
        
    }
    
    
}