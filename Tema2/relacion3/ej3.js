function subcadena(cadena)
{
    let palabras = cadena.split(" ")
    for (let palabra of palabras)
    {
        document.write(palabra)
    }
}

cadena = "algunas palabras contienen algun elemento que se repite con frecuencia"
document.write(subcadena(cadena))