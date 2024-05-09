"use strict";
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    }
};
const villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
const charles = {
    poder: "psiquico",
    estatura: 1.78
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
let mystique;
mystique = charles;
console.log(mystique);
mystique = apocalipsis;
console.log(apocalipsis);
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || '---'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || '---'}`;
        }
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, ...restOfName) => {
        return `${firstName} ${restOfName.join(' ')}`;
    };
    const name = fullName('Tony', 'Stark', 'Avenger', 'Ironman');
    console.log({ name });
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hello ${name}`;
    const saveTheWorld = () => 'The world is saved!';
    let myFunction;
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction('Tony Stark'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatiSignal = () => {
        return 'Signal activated';
    };
    console.log(typeof returnName);
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super fuerza', 'Volar']
    };
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2]
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [1, 3],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    let myCustomVariable = 'Octavio';
    console.log(myCustomVariable);
    myCustomVariable = 10;
    console.log(myCustomVariable);
    myCustomVariable = {
        name: 'Octavio',
        age: 24,
        powers: [1, 2]
    };
    console.log(typeof myCustomVariable);
})();
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = 'Dr. Strange';
    console.log(avenger.charAt(0));
    avenger = 150.55555;
    console.log(avenger.toFixed(2));
    console.log(exists);
})();
(() => {
    const numbers = [1, 2, 3, '4', 5];
    const villians = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
    villians.forEach(v => { console.log(v.toUpperCase()); });
    numbers.push(6);
    numbers.push('7');
    numbers.push(true);
    console.log(numbers);
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman });
})();
(() => {
    let audioLevel;
    (function (audioLevel) {
        audioLevel[audioLevel["min"] = 1] = "min";
        audioLevel[audioLevel["medium"] = 5] = "medium";
        audioLevel[audioLevel["max"] = 10] = "max";
    })(audioLevel || (audioLevel = {}));
    let currentAudio = audioLevel.medium;
    console.log(currentAudio);
    console.log(audioLevel);
})();
(() => {
    const error = (message) => {
        throw new Error(message);
    };
    error('Ayuda!');
})();
(() => {
    let nada = undefined;
    console.log(nada);
})();
(() => {
    let avengers = 4;
    console.log(avengers);
    const villians = 5;
    if (avengers < villians) {
        console.log('We are doomed!');
    }
    else {
        console.log('We are safe');
    }
})();
(() => {
    const batman = 'Batman';
    const linternaVerde = 'Linterna Verde';
    const volcanNegro = `Héroe: Volcán Negro`;
    console.log(batman.toUpperCase());
})();
(() => {
    const hero = ['Dr. Strange', 100];
    hero[0] = 'Ironman';
    hero[1] = 95;
    console.log(hero);
})();
(() => {
    function callBatman() {
        return;
    }
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map