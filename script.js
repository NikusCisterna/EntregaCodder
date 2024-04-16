const CARTA = ["Campari","Copa de Vino","Cerveza", "Gin Tonic", "Jarra Loca"];

function solicitarNombre() {
let Nombre = prompt ("Bienvenido a Joya Disco. ¿Como te llamas?")
console.log ("Bienvenido " + Nombre);
}

solicitarNombre();

let Trago1 = prompt( "Estas en Joya Disco, Camino Negro profundo, 2 AM. ¿Que te gustaria tomar?");


function PreguntaTrago1 () {
let Trago1 = prompt( "Estas en Joya Disco, Camino Negro profundo, 2 AM. ¿Que te gustaria tomar?");
}

function MostrarCarta(){
    console.log ("Estas son tus opciones "+ CARTA)
} 
if (Trago1 != "Jarra Loca") {
    MostrarCarta() 
} else (console.log ("Genial! Ya te lo preparo;"))

let Trago2 = prompt( "No tenemos nada de eso. Elige Jarra Loca")


function PreguntaTrago2() {
let Trago2 = prompt( "No tenemos nada de eso. Elige Jarra Loca")}
let Limits = 2
let ERROR = false;
var intento = 0
if ((Trago2 != "Jarra Loca") && !ERROR) {
    do { 
        PreguntaTrago2();
        intento++;
    }
    while (intento<2)
}else if ((Trago2) == "Jarra Loca")
console.log("¡Genial! Ya te la preparo");

 if (Trago2 != "Jarra Loca") {
      console.log ("Veo que viniste sin plata. Un guardaespalda te acompañará a la salida para despedirte afectuosamente");
   } else {console.log("¡Genial! Ya te la preparo");
}
    

    let Invitacion = confirm("¿Quieres conocer especimenes de sexo femenino en Joya Disco?")
    if(Invitacion == false){
        alert ("Si no quieres conocer a nadie, vuelve a casa. Los juegos de mesa te esperan.")
    } else if ((Trago2) == "Jarra Loca")   
            alert ("Zulema tambien toma Jarra Loca" );
   


    let Ticket = Number(prompt("¿Cuantas Jarras vas a invitar?")
    );
let JarraLoca = 8;
let GinTonic = 10;
let Cerveza = 5;
let CopadeVino = 8;
  

    if((Trago2) == "Jarra Loca"){
        console.log ("Tu saldo es de " + Ticket*JarraLoca + "Acercate a caja a cancelar.");
    } 
        else{
            alert ("No invitaste a nadie. Te espera una noche larga");
    }






