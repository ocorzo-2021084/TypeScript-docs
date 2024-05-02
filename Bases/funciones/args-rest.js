"use strict";
(() => {
    const fullName = (firstName, ...restOfName) => {
        return `${firstName} ${restOfName.join(' ')}`;
    };
    const name = fullName('Tony', 'Stark', 'Avenger', 'Ironman');
    console.log({ name });
})();
