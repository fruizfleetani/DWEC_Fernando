
import {elemento} from './class_elemento.js';

class juego{
    constructor(){
    this.contador_maquina = 0;
    this.contador_humano = 0;
    this.opciones_maquina = [piedra,papel,tijera];
    };   


    jugar (opcion_jugador){
        this.opcion_elegida_maquina = this.opciones_maquina[Math.floor((Math.random() * (3 - 0 + 1)) + 0)];
        if (this.opcion_elegida_maquina.gana.includes(opcion_jugador.nombre)===true){
            this.contador_maquina++;
            document.getElementById('marcador').innerHTML = `<h3> Has sacado ${opcion_jugador.nombre}
            <br><br> La maquina ha sacado ${this.opcion_elegida_maquina.nombre}. Has perdido. <br><br>
            contador: TU: ${this.contador_humano} CPU: ${this.contador_maquina} </h3>`;
        }
        else if (this.opcion_elegida_maquina.pierde.includes(opcion_jugador.nombre)===true) {
            this.contador_humano++;
            document.getElementById('marcador').innerHTML = `<h3> Has sacado ${opcion_jugador.nombre}
            <br><br> La maquina ha sacado ${this.opcion_elegida_maquina.nombre}. Le has ganado <br><br>
            contador: TU: ${this.contador_humano} CPU: ${this.contador_maquina} </h3>`;
            
        } else {
            document.getElementById('marcador').innerHTML = `<h3>Has sacado ${opcion_jugador.nombre} 
            <br><br> EMPATE ${this.opcion_elegida_maquina.nombre} <br><br> contador: TU: 
            ${this.contador_humano} CPU: ${this.contador_maquina} </h3>`;
        }

    }

};

var piedra = new elemento("piedra","tijera","papel");
var papel = new elemento("papel","piedra","tijera");
var tijera = new elemento("tijera","papel","piedra");


var partida = new juego();

document.getElementById("piedra").addEventListener('click', partida.jugar(piedra));
document.getElementById("papel").addEventListener('click', partida.jugar(papel));
document.getElementById("tijera").addEventListener('click', partida.jugar(tijera));