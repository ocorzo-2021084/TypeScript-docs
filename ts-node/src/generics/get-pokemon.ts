import axios from 'axios';


export const getPokemon = async(pokemonId: number): Promise<void> => {
    const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    console.log(resp.data);

    return resp.data;
}