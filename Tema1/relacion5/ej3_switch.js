// Crea	un	script	que	pida	al	usuario	dos	números	y	una	operación	(que	puede	ser	el	carácter	+,	-,	*	o	/).	
// El	script	debe	devolver	el	resultado	de	la	operación	seleccionada	por	el	usuario.


var num1 = parseInt(prompt('Introduce un número'));
var num2 = parseInt(prompt('Introduce otro número'));
var operador = prompt('Introduce la operación que quieres hacer');

switch (operador) {
    case `+` :
        var resultado = num1 + num2
        document.write(`${num1} ${operador} ${num2} = ${resultado}`);
        break;
    case `-` :
        var resultado = num1 - num2
        document.write(`${num1} ${operador} ${num2} = ${resultado}`);
        break;
    case `*` :
        var resultado = num1 * num2
        document.write(`${num1} ${operador} ${num2} = ${resultado}`);
        break;
    case `/` :
        var resultado = num1 / num2
        document.write(`${num1} ${operador} ${num2} = ${resultado}`);
        break;
} ;