(()=> {
    class Apocalipsis {
        static intance: Apocalipsis;


        private constructor(public name: string) {}

        static callApocalipsis(): Apocalipsis{
            if(!Apocalipsis.intance){
                Apocalipsis.intance = new Apocalipsis('Soy Apocalipsis... el único');
            }
            return Apocalipsis.intance;
        }

        changeName(newName: string ): void {
            this.name = newName;
        }



    }

    // const apocalipsis = Apocalipsis.callApocalipsis();

    // apocalipsis.changeName('Hola mundo');

    // console.log(apocalipsis);
    

})();