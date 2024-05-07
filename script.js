
class Carta { 
    constructor (codigo, trago, precio, graduacion) {
       this.codigo = codigo
       this.trago = trago
       this.precio = precio
       this.graduacion = graduacion
       
       this.gettrago = function () {
        return trago;
       }
    }
}


const Bebida1 = new Carta (1, "Copa de Vino", 8, "8%");
const Bebida2 = new Carta (2, "Cerveza", "5%");
const Bebida3 = new Carta (3, "Gin Tonic", 10, "25%");
const Bebida4 = new Carta (4, "Jarra Loca", 8, "30%");
const Bebida5 = new Carta (5, "Campari", 12, "20%")

class Clientas {
    constructor (edad, nombre, trago){
        this.edad = edad;
        this.nombre = nombre;
        this.trago = trago;}
    }

const Woman1 = new Clientas (40, "Cassandra", "Copa de Vino");
const Woman2 = new Clientas (20, "Mayra", "Cerveza");
const Woman3 = new Clientas (30, "Soledad", "Gin Tonic");
const Woman4 = new Clientas (25, "Yennifer", "Jarra Loca");
const Woman5 = new Clientas (35, "Sabrina", "Campari");

function solicitarNombre() {
let Nombre = prompt ("Bienvenido a Joya Disco. ¿Como te llamas?")
console.log ("Bienvenido " + Nombre);
}

solicitarNombre();

const Trago1 = prompt ("Estas en Joya Disco, Camino Negro profundo, 2 AM. ¿Que te gustaria tomar?") 


//    if (this.gettrago != Trago1) {

function Respuesta1 () {
if  (Trago1 ==! "Campari" || Trago1 ==! "Cerveza" || Trago1 ==! "Copa de Vino" || Trago1 ==! "Gin Tonic" || Trago1 ==! "Jarra Loca") {
        console.log ("Elige otra cosa")
}   else if (Trago1 === "Campari" || Trago1 === "Cerveza" || Trago1 === "Copa de Vino" || Trago1 === "Gin Tonic" || Trago1 === "Jarra Loca")
        console.log ("Genial. Ya te lo preparo")
};

Respuesta1 ()

function MostrarCarta(){
    if (Respuesta1 = true )
    console.log ("Estas son tus opciones "+ console.log (this.trago) )
}

MostrarCarta ()

const RepreguntarTrago1 = prompt ("No tenemos nada de eso. Elige otra cosa")



function RepreguntaTrago1 () {
let RepreguntarTrago1 = prompt( "No tenemos nada de eso. Elige otra cosa")}
let Limits = 2
let ERROR = false;
var intento = 0
if ((Trago1 != "Jarra Loca") && !ERROR || RepreguntarTrago1 != "Jarra Loca") {
    do {
        RepreguntaTrago1 ();
        intento++;
    }
    while (intento<2)
} else if (Trago1 == "Jarra Loca" || RepreguntarTrago1 == "Jarra Loca" )
console.log("¡Genial! Ya te la preparo");

    
function Invitacion () {
let invitacion = confirm ("Quieres conocer especimenes de sexo femenino en Joya Disco?")
if (invitacion == false) { 
        alert ("Si no quieres conocer a nadie, vuelve a casa. Los juegos de mesa te esperan")
} else if (Trago1 == "Jarra Loca")
        alert ("Zulema tambien toma Jarra Loca")
};


Invitacion ()


function TicketFinal () {
let Ticket = Number(prompt("¿Cuantas Jarras vas a invitar?")); {
if((Trago1) == "Jarra Loca"){
        console.log ("Tu saldo es de " + Ticket*JarraLoca + "Acercate a caja a cancelar.");
    } 
        else{
            alert ("No invitaste a nadie. Te espera una noche larga");
    }
}
}

TicketFinal ()


const rootElement = document.documentElement;
const headElement = document.head;
const bodyElement = document.body;

bodyElement.style.background = "black";
const myH2 = document.createElement ("H2");
myH2.textcontent = "El tinder bailable";
myH2.style.color = "green";
bodyElement.appendChild (MyH2);

btns.forEach ((btns =>) {
    btns.addEventListener ("click", () => {
        alert (Gracias! );
    });
})

sessionStorage.setItem (Trago1;this.precio)
