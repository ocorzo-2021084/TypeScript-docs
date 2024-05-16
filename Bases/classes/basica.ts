(() => {

    class Avenger {
        // private name: string ;
        // public team?: string;
        // public realName?: string;
        static avgAge: number = 35;
        static getAvgAge(){
            return this.name;
        }


        constructor(
            private name: string, 
            public team?: string, 
            public realName?: string
        ) {} 

        public bio(){
            return `${this.name} (${this.team}) - ${this.realName}`;
        }


    }

    const antman: Avenger = new Avenger('Antman', "Cap", "Scott Lang");
    // console.log(antman);
    // console.log(Avenger.avgAge);
    // console.log(Avenger.getAvgAge());
    
    
    




})();