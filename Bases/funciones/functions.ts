(() => {
    // Your code here
    const hero: string = 'Flash';
    function returnName(): string {
        return hero;
    }

    const activateBatiSignal = (): string => {
        return 'Signal activated';
    };    

    console.log(typeof returnName);
})();