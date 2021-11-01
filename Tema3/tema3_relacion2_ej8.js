
function lanzamiento() {
	return (Math.floor(Math.random()*(6))+1 + Math.floor(Math.random()*(6))+1)
};

function variosLanzamientos(num_lanzamientos) {
    let lanzamientos = new Array()
    for (i = 0; i < num_lanzamientos; i++){
        lanzamientos.push(lanzamiento())
    }    
    return lanzamientos
}

function contarLanzamientos(lista_lanzamientos){
    for (i = 2; i <= 12; i++){
        contador = 0
        while (lista_lanzamientos.indexOf(i) != -1) {
            contador++
            lista_lanzamientos.indexOf(i, lista_lanzamientos.indexOf(i))
        };
        document.write(`Los dados han sumado ${i} ${contador} veces `);
    }
}

si = variosLanzamientos(10)

contarLanzamientos(si)