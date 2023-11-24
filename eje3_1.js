document.getElementById("h1").innerHTML = "TAREA repaso objetos navegador"+"</hr>";

let nombre = prompt("Introuce el nombre");
let apellidos = prompt("Introduce Apellidos:");

let resultado = false;
let resultado2 =false;
let resultado3 = false;
/*comprobacion del nombre*/
if(nombre.length >= 2 ){
    if ((nombre.search(/[0-9]/)==-1) && (nombre.slice(0,1).search(/[A-Z]/)>=0)) {
        resultado = true;
    }
}

/*comprobacon del apellido*/

if(apellidos.length >= 2 && apellidos.search(" ")>0){
    let ape_espacio = apellidos.split(" ");
    if((ape_espacio[0].slice(0,1).search(/[A-Z]/)>=0) &&  (ape_espacio[0].search(/[0-9]/)==-1)){
        resultado2 = true;
    }
}

/* ccomprobacion del 2 apellido*/

if(apellidos.length >= 2 && apellidos.search(" ")>0){
    let ape_espacio2 = apellidos.split(" ");
    if((ape_espacio2[1].slice(0,1).search(/[A-Z]/)>=0) && 
    (ape_espacio2[1].search(/[0-9]/)==-1)){
        resultado3 = true;
    }
}


/*comprobacion*/ 
if(!resultado){
    document.getElementById("comprobacion").innerHTML="nombre no  valido";
}
else {
    document.getElementById("comprobacion").innerHTML="nombre  valido";
}

if(!resultado2){
    document.getElementById("apellidos1").innerHTML="apellido 1 no  valido";
}
else {
    document.getElementById("apellidos1").innerHTML="apellidos 1  valido";
}

if(!resultado3){
    document.getElementById("apellidos2").innerHTML="apellido 2 no  valido";
}
else {
    document.getElementById("apellidos2").innerHTML="apellido 2  valido";
}

