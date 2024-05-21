import { getPokemon } from "./generics/get-pokemon";





getPokemon(12)
    .then(pokemon => console.log(pokemon.sprites.front_female))
    .catch(err => console.log(err))
    .finally(() => console.log('Finally'));