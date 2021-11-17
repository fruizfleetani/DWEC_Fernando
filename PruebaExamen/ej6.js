function Ejercicio6(arrayBi){
    arrayBi.sort(function(a, b) {
        contA = 0
        contB = 0
        for (numero of a){
            contA += numero
        }
        for (numero of b){
            contB += numero
        }
        if (contA < contB){
            return -1
        } else if (contA > contB){
            return 1
        } else
            return 0
      });
    
    return arrayBi
}

array = [[1,2,3], [3,5,3], [6, 8, 9], [1,2], [3,3], [0,0,0,0,1]]