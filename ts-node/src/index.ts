import { getPokemon } from "./generics/get-pokemon";





getPokemon(12)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => console.log('Finally'));