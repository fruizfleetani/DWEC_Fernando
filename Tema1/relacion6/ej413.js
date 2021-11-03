var n_columnas = parseInt(prompt(`Introduce el número de columnas que quieres que tenga la tabla`))
var alto = parseInt(prompt(`Introduce el número de píxeles de alto`))
var ancho = parseInt(prompt(`Introduce el número de píxeles de ancho`))
var i = 0

document.write(`<table border = ”0” cellspacing = ”2” bgcolor = ”black” width = ”200”>`);
document.write(`<tr bgcolor = "white" height = "${alto}"> `);
while (i < n_columnas ){
    document.write(`<td width = "${ancho}"> &nbsp; </td>`)
    i += 1
} ;
document.write(`</tr>`);
document.write(`</table>`);