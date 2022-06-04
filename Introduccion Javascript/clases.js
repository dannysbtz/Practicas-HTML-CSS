class humano{
    tipo = "Humano";
    edad = "0-100 años"; 
}

class persona extends humano{
    nombre = "Daniel";

    saludar(){
        console.log("Hola " + this.nombre + " de la raza " + this.tipo);
    }
}

function animador(){}

animador.prototype.hola= function(){
    console.log("Hola soy hijo de prototype");
};

let person = new persona();
let anima = new animador();
let anima2 = new animador();

//prototype en funciones se pueden integrar fuera del objeto.
animador.prototype.saludo= function(){
    console.log("Hola aun se mantiene a pesar de estar despues de la creacion");
};

//console.log(person.saludar());

//console.log(person.edad);

/*console.log(anima.hola());
console.log(anima.saludo());
console.log(anima2.saludo());*/

//herencia en prototypes

//vamos hacer una erencia de el objeto animador.
//funcion tipo clase
function nuevoHeredado(){}
//aqui es donde se implementa la herencia
nuevoHeredado.prototype = Object.create(animador.prototype);

let nuevo = new nuevoHeredado();

console.log(nuevo.hola);