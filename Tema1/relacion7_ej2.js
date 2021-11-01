//Write a function called addOnlyNums that can take in any number of arguments (including numbers or strings), 
//and returns the sum of only the numbers.

var valores = [2, 'perro', 5, 6, 'gato', 8, 'pájaro', 11];

function addOnlyNums(valores){
let suma = 0
for (elemento of valores)
    if (typeof elemento == "number")
        suma += elemento
        
return suma
 }

document.write(addOnlyNums(valores))

/*
var suma = 0
var argumento = [2, 5, 7, 'pepe', 5, 'antonio']
function addOnlyNums(...argumento){
    if(typeof argumento === 'number'){
        for(let i=0; i < argumento.length; i++){
            suma += argumento[i]
        }
        return suma
    }
    
}

document.write(addOnlyNums(argumento)
*/