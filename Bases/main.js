"use strict";
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
});
(() => {
    class Mutant {
        constructor() {
            this.name = '';
            this.realName = '';
            this.age = 0;
        }
        mutantPower(id) {
            console.log('Mutant Power');
        }
    }
})();
(() => {
    const client = {
        name: 'Octavio',
        age: 19,
        adress: {
            id: 1,
            zip: 12345,
            city: 'Gt'
        },
        getFullAdress(id) {
            return this.adress.city;
        }
    };
    const client2 = {
        name: 'Octavio',
        age: 19,
        adress: {
            id: 1,
            zip: 12345,
            city: 'Gt'
        },
        getFullAdress(id) {
            return this.adress.city;
        }
    };
})();
(() => {
    let addNombersFunction;
    addNombersFunction = (a, b) => a + b;
})();
//# sourceMappingURL=main.js.map