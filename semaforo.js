


let div1 = document.getElementById("rojo");
let div2 = document.getElementById("amarillo");
let div3 = document.getElementById("verde");
let peatones =document.getElementById("peatones");
let peatones2 =document.getElementById("peatones2");

let colores = ["red","yellow","green"];
var colorGris = "#cccccc";
let repeticiones =0;
let idInterval = 0;


function encender(){
     idInterval= setInterval(function () {
        
        // Cambiar el color de fondo de cada párrafo
        if(repeticiones ==0){
            div1.style.backgroundColor = colores[0];
            peatones.style.backgroundColor =colorGris;
            peatones2.style.backgroundColor ="green";
            repeticiones++;  
          
           
        }else if( repeticiones ==1) {
            div1.style.backgroundColor = colorGris; 
            div3.style.backgroundColor = colores[2]; 
            peatones2.style.backgroundColor =colorGris;
            peatones.style.backgroundColor ="red";
            repeticiones++;
            
            
                   
        }
        else if( repeticiones ==2) {
            div3.style.backgroundColor = colorGris;  
            div2.style.backgroundColor = colores[1];  
            peatones.style.backgroundColor ="red";  
            repeticiones++;
              
        }else {
            div2.style.backgroundColor = colorGris;  
            repeticiones=0;
            console.log(repeticiones);
        }

     } , 5000); // Cambiar cada 2000 milisegundos
}

function parar(){
    console.log("parando Semaforo");
    clearInterval(idInterval);
    
}
function pushPeatones(){
    parar();
    div1.style.backgroundColor = colorGris;
    div2.style.backgroundColor = colorGris;
    div3.style.backgroundColor = colorGris;
    peatones.style.backgroundColor =colorGris;
    peatones2.style.backgroundColor =colorGris;
    
    console.log(idInterval);
    encender();
   
}

function apagar(){
    parar();
}


