(() => {
    
    type Hero = {
        name: string;
        age?: number;
        powers: number[];
        getName?: () => string;
    };

    let myCustomVariable: (string | number | Hero) = 'Octavio';  
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