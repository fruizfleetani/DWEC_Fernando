
cateto_a = parseFloat(prompt(`Introduce la longitud del primer cateto (en cm)`));
cateto_b = parseFloat(prompt(`Introduce la longitud del segundo cateto (en cm)`));

document.write('La hipotenusa mide ' + Math.sqrt((cateto_a ** 2) + (cateto_b ** 2)) + ' cm');
