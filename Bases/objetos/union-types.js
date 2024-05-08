"use strict";
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
