a = parseFloat(prompt(`Introduce la a`));
b = parseFloat(prompt(`Introduce la b`));
c = parseFloat(prompt(`Introduce la c`));


discriminante = ((b ** 2) - (4 * a * c));

if (discriminante > 0) {
    x1 = (-b + Math.sqrt(discriminante) / (2 * a));
    x2 = (-b - Math.sqrt(discriminante) / (2 * a));
    document.write(`Las soluciones de la ecuación son las siguientes: ${x1} y ${x2}`);
} else
    document.write('La ecuación no tiene solución')
