var valores = [2,5,6,8,11]
//var suma = 0

function sumEveryOther(valores){
let suma = 0
for(let i=0; i < valores.length; i+=2)
    suma += valores[i]
        
return suma
    }

document.write(sumEveryOther(valores))