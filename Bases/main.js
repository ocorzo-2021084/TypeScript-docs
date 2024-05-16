"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return (text.length > 3) ? true : false;
    };
    Validations.validateDate = (myDate) => {
        return (isNaN(Number(myDate.valueOf()))) ? true : false;
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText('Octavio'));
//# sourceMappingURL=main.js.map