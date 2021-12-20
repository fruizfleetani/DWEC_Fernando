// var mibola;

// class bola
// {
//       constructor(radio, posicionX, posicionY, velocidadX, velocidadY, color, svgContenedor) {
//         this.x = posicionX;
//         this.y = posicionY;
//         this.color = color;
//         this.radio = radio;
//         this.vX = velocidadX;
//         this.vY = velocidadY;

//         // Creación del tag
//         for (let i=0; i<1; i++)
//             new bola(aleatorio(4,50), aleatorio(70,900), aleatorio(70,900), aleatorio(1,15),aleatorio(1,15),colorAleatorio(),svg);
//         this.tagCircle = document.createElementNS("http://www.w3.org/2000/svg","circle");
//         this.tagCircle.setAttribute("fill", this.color);
//         this.tagCircle.setAttribute("cx", this.x);
//         this.tagCircle.setAttribute("cy", this.y);
//         this.tagCircle.setAttribute("r", this.radio);
//         svg.appendChild(this.tagCircle);

//         mibola = this.tagCircle;

//         setInterval(bucle, 30)
//     }
// }
    
    
    
// function aleatorio(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }

// function colorAleatorio()
// {
//     return "#"+ Math.floor(Math.random()*16777215).toString(16);
// }

// var svg = document.getElementById("panel");
// var ancho = svg.height;
// var bajo = svg.width;
// var posX = 10, posY = 10;
// var velX = aleatorio(1, 10), velY = aleatorio(1, 10);

// function bucle(){
//     if (posX < 0 || posX > ancho)
//         velX *= -1;
    
//     posX += velX

//     if (posY < 0 || posY > bajo)
//         velY *= -1;
    
//     posY += velY
//     mibola.setAttribute("cx", posX)
//     mibola.setAttribute("cy", posY)
// }

import {bola, barra, interfazBola, interfazBarra} from "./objetos.js";



function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function colorAleatorio()
{
    return "#"+ Math.floor(Math.random()*16777215).toString(16);
}

var bolas = new Array();
var interfacesBola = new Array();
var barras = new Array();
var interfacesBarra = new Array();
var svg; 
var tamanoSVG;
var mitad;
var elId;

svg = document.getElementById("panel")

 window.onload = () =>
  {
      tamanoSVG = svg.getBoundingClientRect();
      mitad = (tamanoSVG.height/2)

      for (let i=0; i<1; i++){
        let bolita;
        bolita = new bola(aleatorio(4,50), aleatorio(70,900), aleatorio(70,900), aleatorio(100,150),aleatorio(100,150))
        bolas.push(bolita);
        interfacesBola.push(new interfazBola(bolita, document.getElementById("panel")))
      }
        let barraizq, barradcha;
        barraizq = new barra(70, 18, 0, mitad, aleatorio(1,15))
        barradcha = new barra(70, 18, tamanoSVG.width - 18, mitad, aleatorio(1,15))
        barras.push(barraizq);
        barras.push(barradcha);
        interfacesBarra.push(new interfazBarra(barraizq, document.getElementById("panel")))
        interfacesBarra.push(new interfazBarra(barradcha, document.getElementById("panel")))

     // setInterval( loop, 30);
     elId = window.requestAnimationFrame(loop);
  }
  
  function loop()
  {
     tamanoSVG = svg.getBoundingClientRect();
      for (let i=0; i<bolas.length; i++)
      {
        bolas[i].mueve(tamanoSVG.width, tamanoSVG.height);

        // for (let j=0; j<bolas.length; j++)
        //     if (i!=j) bolas[i].colisiona(bolas[j]);
        
          interfacesBola[i].dibuja();
      }

      for (let i=0; i < barras.length; i++)
      {
        barras[i].mueve(tamanoSVG.height);

        // for (let j=0; j<bolas.length; j++)
        //     if (i!=j) bolas[i].colisiona(bolas[j]);
        
          interfacesBarra[i].dibuja();
      }
      elId = window.requestAnimationFrame(loop);
  }
