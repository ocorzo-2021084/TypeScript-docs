function printToConsole(constructor: Function) {
    console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function => {
    if(print){
        return printToConsole;
    } else {
        return () => {};
    }
}

const bloquearPrototipo = function(constructor: Function){
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

function CheckValidPokemonId() {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        const originalMethod = descriptor.value;
        descriptor.value = function(...args: any[]){
            if(args[0] < 0 || args[0] > 1000){
                throw new Error('Invalid Pokemon Id');
            }
            return originalMethod.apply(this, args);
        }

    }
}


function readOnly(isWritable: boolean = true): Function{
    return function(target: any, propertyKey: string){
       
        const descriptor: PropertyDescriptor = {
            get(){
                console.log(this, 'getter');
                
                return 'Octavio';
            },
            set(this, value){
                console.log(this, value, 'setter');
                Object.defineProperty(this, propertyKey, {
                    value: value,
                    writable: !isWritable,
                    enumerable: true,
                    configurable: true
                });
            }
        };

        return descriptor;
    }
}



@bloquearPrototipo
@printToConsoleConditional(true)
export class Pokemon {



    @readOnly()
    public publicApiUrl: string = 'https://pokeapi.co';
    
    
    constructor(
        public name: string
    ){}



    @CheckValidPokemonId()
    savePokemonToDB(id: number){
        console.log(`Pokemon saved to DB with id: ${id}`);
        
    }





}