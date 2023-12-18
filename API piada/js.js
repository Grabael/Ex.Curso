// chamando o botão que te da a citação (HTML)
document.getElementById('botao');
// função que traz a API para a pagina
function piada(){
    // busca a API
    fetch('https://api.chucknorris.io/jokes/random')

    .then(response => response.json())
    // traz o "Quote" e "Author" da API para as tags que eu nomeei como 'texto' e 'autor'
    .then(data => {
        document.getElementById('texto').textContent = data.value;
        document.getElementById('data').textContent = data.created_at;
        document.getElementById('trol').textContent = "quem ta lendo é gay kkj"
    })
}