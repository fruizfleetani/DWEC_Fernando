

var numeros = new Array();
function ParesImpares(lista){
    for (i = 0; i < 100; i++) {
        lista.push(Math.floor(Math.random()*(999) + 1))
    }
    lista.sort(a => {
        if (a % 2)
            return -1
        else
            return 1
    }     )
}

ParesImpares(numeros)

