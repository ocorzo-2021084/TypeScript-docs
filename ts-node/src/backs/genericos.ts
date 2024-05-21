import { printObject, genericFunction } from "../generics/generics";
import { Heroe } from "../interfaces";


printObject({ name: "John", age: 30 });

console.log(genericFunction("Hello"));


const deadpool = {
    name: "Deadpool",
    realName: "Wade Wilson",
    dangerLevel: 10
}

console.log(genericFunction<Heroe>(deadpool));
