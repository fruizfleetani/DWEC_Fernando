// Crea	un	script	que	pida	a	un	usuario	dónde	vive;	si	vive	en	Madrid	y	tiene	entre	18	y	30 años,	
// el	script	debe	mostrar	en	pantalla	que	el	usuario	puede	acceder	al	carnet	de	empresarios	emprendedores.

var localidad = prompt('Introduce en qué localidad vives');
var edad = prompt('Introduce tu edad');


if ((edad >= 18 && edad <= 30) && (localidad == `Madrid` || localidad == `MADRID`) {
    document.write(`Puedes acceder al carnet de empresarios emprendedores`)
} else {
    document.write(`No puedes acceder al carnet de empresarios emprendedores`)
}
