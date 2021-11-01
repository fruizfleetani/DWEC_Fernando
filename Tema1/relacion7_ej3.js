//Write a function called countTheArgs that can take any number of arguments, and returns the number of arguments that are passed in.

var valores = [2, 'perro', 5, 6, 'gato', 8, 'pájaro', 11];


function countValues(valores){
let contador = 0
for (elemento of valores)
        contador += 1
        
return contador
 }

document.write(countValues(valores))