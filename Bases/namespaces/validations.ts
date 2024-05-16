namespace Validations {
    export const validateText = (text: string): boolean =>{
        return( text.length > 3 )? true : false;
    }

    export const validateDate = (myDate: string): boolean =>{
        return( isNaN(Number(myDate.valueOf())) )? true : false;
    }
}

console.log(Validations.validateText('Octavio'));
