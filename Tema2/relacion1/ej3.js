
var segundos = 7

function muestraSeg() {
    document.write(`${segundos--} <br>`);

    if (segundos >= 0)
        setTimeout(muestraSeg, 1000);
};
 
 
 //setTimeout(function(){ alert(`Han pasado 60 segundos`); }, 1000);
 setTimeout(muestraSeg, 1000);
 


