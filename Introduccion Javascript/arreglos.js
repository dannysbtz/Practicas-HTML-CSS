/*Arreglos*/
let numeros = [1,2,3,4,5,6,7,8,9]


/*uso de map, el uso de => es igual a decir que e suna funcion*/
let cuadrados = numeros.map((numero) =>{
    return numero * numero;
})

console.log(cuadrados);


/* foreach tiene 3 parametros, el valor, el index y el arreglo compelto */
let numeros_recorridos =[];
numeros.forEach((numero,index, arreglo) =>{
    numeros_recorridos[index] = numero * numero;
    console.log(arreglo);
})

console.log(numeros_recorridos);

/* filter es lo mismo que map pero con una condicion integrada */

let numeros_filter = [];
console.log(numeros.filter((numero)=>{
    /*if(numero % 2 == 0){
        return true;
    }else{
    return false;
    }
    */
   return numero % 2 == 0;
}))

/* retorna un solo string o variable de todos los elementos segun lo que indiquemos, la parte inferior es para darle un valor inicial*/

let nombres = ["Alan","Juan","Manuel"];

let cadena = nombres.reduce((cadenaFinal,nombre)=>{
    return cadenaFinal + "<a>" + nombre + "</a>";
},"");

console.log(cadena);

/* Busca un elemento en un string */
// indexOf retorna la posicion en especifico o -1 si no encuentra nada
console.log(nombres.indexOf("Alan"));
// include retorna si existe ese elemento en el arreglo, y podemos indicar la posicion desde donde queremos que busque.
console.log(nombres.includes("Alan"));
console.log(nombres.includes("Alan",1));

/* Find busca un elemento y retornal el nombre del elemento*/

let nombresFind = nombres.find(function(elemento, pos, arreglo){
    return elemento == "Juan";
})

console.log(nombresFind);

/* FindIndex busca un elemento y retorna el index*/
let nombresFindIndex = nombres.findIndex(function(elemento, pos, arreglo){
    return elemento == "Juan";
})

console.log(nombresFindIndex);

/* some busca un elemento  y retorna si lo encontro o no*/
let nombresSome = nombres.some(function(elemento, pos, arreglo){
    return elemento == "Juan";
})

console.log(nombresSome);

/* todo lo demas que se agregue se va a una variable */

function holaarreglo(var1, ...var2){
    console.log(var1,var2);
}

holaarreglo("Nuevioxd",1,2,3,4,5,6,7,8);