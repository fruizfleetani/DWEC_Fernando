var subtractProductAndSum = function(n) {
    producto = 1 
    sum = 0
    for (numero of n.toString()){
        producto *= parseInt(numero)
        sum += parseInt(numero)
    }
    return producto - sum
    
    
};