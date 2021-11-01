// Write a function that can take in any number of arguments, and returns the sum of all of the arguments.

var valores = [2, 'perro', 5, 6, 'gato', 8, 'pájaro', 11];


function sumAll(valores){
let suma = 0
for (elemento of valores)
        suma += elemento
        
return suma
 }

document.write(sumAll(valores))