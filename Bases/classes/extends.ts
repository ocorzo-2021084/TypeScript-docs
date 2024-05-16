(() => {
    class Avenger {
        constructor(
            public name: string,
            public realName: string
        ){
            console.log('Constructor Avenger');
            
        }

        protected getFullName(){
            return `${this.name} ${this.realName}`;
        }
    }

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean
        ){
            console.log('Constructor Xmen');
            super(name, realName);
        }

        get fullName () {
            return `${this.name} - ${this.realName}`;
        }

        set fullName(name: string){
            if(name.length < 3){
                throw new Error('Name is too short');
            }
            this.name = name;
        }


        getFullNameXmen(){
            console.log(super.getFullName());
            
        }
    }

    // const wolverine = new Xmen('Wolverine', 'Logan', true);
    
    // wolverine.fullName = 'Octavio';
    
    // console.log(wolverine.fullName);
    
    

    // wolverine.getFullNameXmen(); 



})();