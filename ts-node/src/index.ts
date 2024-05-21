import {Pokemon} from './decorators/pokemon-class';



const charmander = new Pokemon('Charmander');


// (Pokemon as any).custom = 'https://google.com';


// charmander.savePokemonToDB(1);


charmander.publicApiUrl = 'https://google.com';
console.log(charmander);
