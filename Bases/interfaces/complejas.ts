(() => {


    interface Cliente {
        name: string;
        age: number;
        adress: Adress;
        getFullAdress(id: string):void
    }

    interface Adress {  
        id: number;
        zip: number;
        city: string;
    }

    const client: Cliente = {
        name: 'Octavio',
        age: 19,
        adress: {
            id: 1,
            zip: 12345,
            city: 'Gt'
        },
        getFullAdress(id: string){
            return this.adress.city;
        }
    }

    const client2: Cliente = {
        name: 'Octavio',
        age: 19,
        adress: {
            id: 1,
            zip: 12345,
            city: 'Gt'
        },
        getFullAdress(id: string){
            return this.adress.city;
        }
    }


})();