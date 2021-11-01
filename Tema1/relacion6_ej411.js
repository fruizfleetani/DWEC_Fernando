
var n_columnas = parseInt(prompt(`Introduce el número de columnas que quieres que tenga la tabla`))
var alto = parseInt(prompt(`Introduce el número de píxeles de alto`))
var ancho = parseInt(prompt(`Introduce el número de píxeles de ancho`))

document.write(`<table border = ”0” cellspacing = ”2” bgcolor = ”black” width = ”200”>`);
document.write(`<tr bgcolor = "white" height = "${alto}"> `);
for (let i = 0; i < n_columnas; i++){
    document.write(`<td width = "${ancho}"> &nbsp; </td>`)
} ;
document.write(`</tr>`);
document.write(`</table>`);