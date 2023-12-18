//função para pular
const personagem = document.querySelector('.Mario');


const jump = () => {
    personagem.classList.add('Pulo');
    setTimeout(()=>{
        personagem.classList.remove('Pulo');
    },800)
}
document.addEventListener('keydown',jump);

//função de hitbox
const obstaculo = document.querySelector('.Cano');

const loop = setInterval(() => {
    const obstaculoPosition = obstaculo.offsetLeft;
    const personagemPosition = +window.getComputedStyle(personagem).bottom.replace('px', '');
    const minhaPontuacao = document.querySelector('.pontuacao')
    if(obstaculoPosition <=80 && obstaculoPosition >0 && personagemPosition <= 100){
        obstaculo.style.animation='none';
        obstaculo.style.left= `${obstaculoPosition}px`;
        personagem.style.animation='none';
        personagem.style.bottom = `${personagemPosition}px`;
        
        
        personagem.src='img/Morrendo.gif';
        personagem.style.width='80px';
        personagem.style.marginLeft='-10px'

        clearInterval(loop)
    }else{
        if(personagemPosition >= 100){
        minhaPontuacao.innerHTML= +minhaPontuacao.textContent +1;
        }
    }
    

    
},10);

