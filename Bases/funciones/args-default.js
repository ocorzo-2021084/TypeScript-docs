"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || '---'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || '---'}`;
        }
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
//# sourceMappingURL=args-default.js.map