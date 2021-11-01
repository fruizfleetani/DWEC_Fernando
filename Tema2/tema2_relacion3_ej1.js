
cadena = `Hola me llamo Fernando`;

function invierteCadena(cad_arg){
    return cad_arg.split('').reverse().join('')     
}

function inviertePalabras(cad_arg){
    let palabras_invertidas = '';
    palabras = cad_arg.split(' ');
    for (i = 0; i < palabras.length; i++){
        palabras_invertidas += ` ${palabras[i].split('').reverse().join('')}`;
    } 
    return palabras_invertidas 
}

/* 
function inviertePalabra(cad_arg){
    invertida = cadena.split(' ').reverse().join().replaceAll(',',' ')
    return invertida
}
*/

document.write(invierteCadena(cadena) + ' <br>');
//document.write(cadena.length + ' <br>');
document.write(inviertePalabras(cadena) + ' <br>')