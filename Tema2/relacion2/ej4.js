cateto_a = prompt(`Introduce la longitud del primer cateto (en cm)`);


while (cateto_a !== 'parar') {
    a = parseFloat(cateto_a)
    cateto_b = parseFloat(prompt(`Introduce la longitud del segundo cateto (en cm)`));
    document.write('La hipotenusa mide ' + Math.sqrt((a ** 2) + (cateto_b ** 2)) + ' cm <br>');
    cateto_a = prompt(`Introduce la longitud del primer cateto (en cm). Si no quieres continuar escribe 'parar'. `);
}
