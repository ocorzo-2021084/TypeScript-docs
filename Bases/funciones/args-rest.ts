(() => {
    const fullName = (firstName: string, ...restOfName: string[]): string => {
        return `${firstName} ${restOfName.join(' ')}`;
    }

    const name = fullName('Tony', 'Stark', 'Avenger', 'Ironman');

    console.log({name});
})()