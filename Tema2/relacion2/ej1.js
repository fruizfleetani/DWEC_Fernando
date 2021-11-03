//Un número aleatorio entre cero y uno

document.write(Math.random() + `<br>`);


//Un número aleatorio entre 100 y 200

numero_aleatorio = Math.random() * (101) + 100
document.write(Math.floor(numero_aleatorio) + `<br>`) ;

//Un número aleatorio entre dos valores introducidos por el usuario

numero = parseInt(prompt(`Introduce un número`));
segundo_numero = parseInt(prompt(`Introduce otro número`));

if (numero > segundo_numero) {
    num_ale = Math.random() * (numero - segundo_numero + 1) + segundo_numero

} else {
    segundo_numero = Math.random() * (segundo_numero - numero + 1) + numero
}

document.write(Math.floor(num_ale));
