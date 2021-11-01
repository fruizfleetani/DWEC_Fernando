var num_adivinar = parseInt(prompt(`Introduce un número que otro jugador deberá adivinar`));
var num = parseInt(prompt(`Intenta adivinar el número`))

do {
    if (num < num_adivinar) 
        alert(`El número que tienes que adivinar es mayor`)
    else
        alert(`El número que tienes que adivinar es menor`)
    
    var num = parseInt(prompt(`Intenta adivinar el número`))
}   while (num_adivinar != num) 

alert(`Has acertado el número!!`)