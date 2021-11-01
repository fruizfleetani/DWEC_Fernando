var numeros = new Array();

for (i = 0; i < 10; i++) {
    numeros.push(Math.floor(Math.random()*(9) + 1))
}

function igualarACero(lista){
    return lista.map(numero => 0)
}


function sumarUno(lista){
    return lista.map(numero => numero + 1)
}

function mostrarArray(lista){
     return lista.join(' ')

}





