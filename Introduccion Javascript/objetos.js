let user={
    nombre: "daniel",
    edad: 21
}

let datos={
    gustos: "Correr",
    Escuela: "UdeG"
}
// union de dos objetos
let nueva = {...objeto, ...datos}

console.log(nueva);

//union de dos objetos utilizando assing
let pruebaAssing = Object.assign(user,datos,{Ciudad: "Mexico"});

console.log(pruebaAssing);

//destructuracion para tomar un valor

let {nombre: Nombre} = user;

console.log(nombre);