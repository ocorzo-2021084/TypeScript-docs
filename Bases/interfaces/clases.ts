(() => {

    interface Xmen {
        name: string;
        realName: string;
        mutantPower(id: number): void;
    }

    interface Human{
        age: number;
    }
    class Mutant implements Xmen, Human {
        public name: string = '';
        public realName: string = '';
        public age: number = 0;

        mutantPower(id: number){
            console.log('Mutant Power');
        }

    }




})();