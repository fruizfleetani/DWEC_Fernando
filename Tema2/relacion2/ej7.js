
angulo = parseFloat(prompt(`Introduce un ángulo`));
radianes = angulo * Math.PI / 180;
seno = Math.sin(radianes);

document.write(`<table border = ”0” cellspacing = ”2” bgcolor = ”black” width = ”200”>`);
document.write(`<tr bgcolor = "white" height = "50"> `);
document.write(`<td width = "50"> &nbsp ${angulo}º &nbsp; </td>`);
document.write(`<td width = "50"> &nbsp ${seno} &nbsp; </td> </tr> </table> `);
