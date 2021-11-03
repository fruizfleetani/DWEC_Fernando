
angulo = parseFloat(prompt(`Introduce un ángulo`));
radianes = angulo * Math.PI / 180;

document.write(Math.sin(radianes) + '<br>');
document.write(Math.cos(radianes) + '<br>');
document.write(Math.tan(radianes));