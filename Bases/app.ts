// Crear interfaces
interface Batimovil {
  encender: boolean,
  velocidadMaxima: number;
  acelear():void;
}
// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto: Batimovil ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil: Batimovil = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Guason {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

const guason: Guason = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason: Guason ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface CiudadGotica {
  ( ciudadanos:string[] ):number;
}

const ciudadGotica: CiudadGotica = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/


interface Persona {
  nombre:string;
  edad:number;
  sexo:string;
  estadoCivil:string;
  imprimirBio():void;
}

class Persona implements Persona {
  constructor(
    public nombre:string,
    public edad:number,
    public sexo:string,
    public estadoCivil:string
  ){}

  imprimirBio(){
    console.log(`${this.nombre} tiene ${this.edad} años de edad, es de sexo ${this.sexo} y su estado civil es ${this.estadoCivil}`);
  }
}