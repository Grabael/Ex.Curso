const getPokemonURL = id => `https://pokeapi.co/api/v2/pokemon/${id}`;
const fetchPokemon = () => {
    const pokemonPromises = [];
    for(let i = 1; i <= 150; i++) {
            pokemonPromises.push(fetch(getPokemonURL(i)).then(response => response.json()));
    }
    Promise.all(pokemonPromises)
    .then((pokemons) => {
        const listPokemons = pokemons.reduce((accumulator,pokemon) => {
            const types = pokemon.types.map(typeInfo =>  typeInfo.type.name);
            accumulator += `
            <div class="pagina card ${types[0]}">
            <li class="card ${types[0]}">
            <div class="redondo">
            <img class="card-image" alt="${pokemon.name}" src="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg"/>
            <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
            <p class="card-subtitle">${pokemon.types.map(typeInfo => typeInfo.type.name).join(' | ')}</p>
            </li>
            </div>
            </div>
            `
            return accumulator;
        },'');
        const ul = document.querySelector('[data-js="pokedex"]');
        ul.innerHTML = listPokemons;
    });
};
fetchPokemon();