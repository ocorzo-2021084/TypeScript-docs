(() => {

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500
    }

    // const { nick, ironman, vision } = avengers;
    // console.log(nick, vision.toUpperCase(), ironman.toUpperCase());
    
    const printAvenger =({ironman, ...resto}: Avengers) => {
        console.log(ironman, resto);
        
    }

    // printAvenger(avengers);



    const AvengersArray: string[] = ['Thor', 'Ironman', 'Spiderman'];

    const [, ironman,] = AvengersArray;
    // console.log({ironman});
    

})();