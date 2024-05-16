(() => {
    abstract class Mutante {
        constructor
        (
            public nombre: string, 
            public realName: string
        ) 
        { }
    }

    class Xmen extends Mutante {
        salvarMundo() {
            return 'Salvando el mundo';
        }
    }

    class Villian extends Mutante {
        conquistarMundo() {
            return 'Conquistando el mundo';
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');

    // console.log(wolverine);
    // console.log(magneto.conquistarMundo());

    const printName = (character: Mutante) => {
        console.log(character.nombre);
        
    };

    // printName(wolverine);
    
})();