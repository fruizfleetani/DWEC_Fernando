//Crea	un	script	que	pregunte	al	usuario	por	el	nombre	de	un	mes,	y	muestre	el	número	de	días	que	
// tiene	el	mes.

var mes = prompt('Introduce un mes');

switch (mes) {
    case `enero` :
        document.write(`${mes} tiene 31 días.`);
        break;
    case `febrero` :
        document.write(`${mes} tiene 28 días.`);
        break;
    case `marzo` :
        document.write(`${mes} tiene 31 días.`);
        break;
    case `abril` :
        document.write(`${mes} tiene 30 días.`);
        break;
    case `mayo` :
        document.write(`${mes} tiene 31 días.`);
        break;
    case `junio` :
        document.write(`${mes} tiene 30 días.`);
        break;
    case `julio` :
        document.write(`${mes} tiene 31 días.`);
        break;
    case `agosto` :
        document.write(`${mes} tiene 31 días.`);
        break;
    case `septiembre` :
        document.write(`${mes} tiene 30 días.`);
        break;
    case `octubre` :
        document.write(`${mes} tiene 31 días.`);
        break;
    case `noviembre` :
        document.write(`${mes} tiene 30 días.`);
        break;
    case `diciembre` :
        document.write(`${mes} tiene 31 días.`);
        break;
} ;


/*
switch (mes) {
    case `enero` || `marzo` || `mayo` || `julio` || `agosto` || `octubre` || `diciembre` :
        document.write(`${mes} tiene 31 días.`);
        break;
    case `abril` || `junio` || `septiembre` || `noviembre` :
        document.write(`${mes} tiene 30 días.`);
        break;
    case `febrero` :
        document.write(`${mes} tiene 28 días.`);
        break;
} ;

*/