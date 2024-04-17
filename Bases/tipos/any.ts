(() => {
    // Your code here
    let avenger:any = 123;
    let exists;
    let power;

    avenger = 'Dr. Strange';
    console.log((avenger as string).charAt(0));

    avenger = 150.55555;

    console.log(avenger.toFixed(2));

    console.log(exists);
    
})();