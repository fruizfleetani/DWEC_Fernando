// Crea	un	script	que	pregunte	al	usuario	por	un	número,	y	determine	si	es	par,	si	es	múltiplo	de	tres,	y	
// si	es	múltiplo	de	5.


var num = parseInt(prompt('Introduce un número'));

switch (true) {
    case num % 2 == 0 :
        document.write(`${num} es par <br>`);
    case num % 3 == 0 :
        document.write(`${num} es múltiplo de 3 <br>`);
    case num % 5 == 0 :
        document.write(`${num} es múltiplo de 5`);
        break;
} ;
    