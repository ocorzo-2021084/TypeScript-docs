export const printObject = (argument: any) => {
    console.log(argument);
}


export function genericFunction<T>(arg: T) {
    return arg;
}

export const genericFuncionWithArrow = <T>(arg: T[]) => arg;
