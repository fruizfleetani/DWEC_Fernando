/*
2. Crea una pagina que contenga varios enlaces, imagenes y anclas de ejemplo
y añade una serie de enlaces que realicen lo siguiente: 
c) Muestra el numero de imagenes del documento 
d) Muestra el id de la primera imagen
e) Muestra el numero de enlaces del documento 
f) Cambia el titulo del documento.
*/

document.write('<a href = "https://www.marca.com"> Marca </a> <br>')
document.write('<a href = "https://www.realmadrid.com"> Real Madrid </a> <br>')
document.write(`<img class="images" id='CR7 en la Juve' src = "1.jpg">`);
document.write(`<img src = "2.jpg">`);
document.write(`<img src = "3.jpg"> <br>`);



//c

console.log(document.images.length);

// d)

var id_img = document.getElementsByClassName("images").id;
console.log(id_img)

// e)

console.log(document.links.length)

// f)

alert(document.title); 
document.title = "Ejercicio hecho con exito";
alert(document.title);