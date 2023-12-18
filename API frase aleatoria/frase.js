
// função que traz a API para a pagina
function citacao(){
    // busca a API
    fetch('https://api.quotable.io/random')

    .then(response => response.json())
    // traz o "Quote" e "Author" da API para as tags que eu nomeei como 'texto' e 'autor'
    .then(data => {
        document.getElementById('texto').textContent = data.content;
        document.getElementById('autor').textContent = "- " + data.author;
        document.getElementById('data').textContent = data.dateAdded;
    })
}
// carregar a função citacao(função que traz a API lá de cima) sempre que a pagina carrega
window.onload = citacao