"use strict";
(() => {
    // Your code here
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
