(() => {
    // Your code here
    const addNumbers = (a: number, b: number): number => a + b;
    const greet = (name: string): string => `Hello ${name}`;
    const saveTheWorld = () => 'The world is saved!';


    let myFunction;

    myFunction = addNumbers;
    console.log(myFunction(1, 2));

    myFunction = greet;
    console.log(myFunction('Tony Stark'));

    myFunction = saveTheWorld;
    console.log(myFunction());



})();