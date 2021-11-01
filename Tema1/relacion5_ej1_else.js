// crea	un	script	que	pida	al	usuario	su	nombre	y	apellidos.	Si	el	nombre	es	“Ricardo”,	debe	mostrar	en	
// pantalla	los	apellidos;	si	el	nombre	no	es	“Ricardo”,	debe	escribir	en	el	documento	HTML	los	apellidos.


var nombre = prompt('Introduce tu nombre');
var apellidos = prompt('Introduce tus apellidos');


if (nombre == `Ricardo`) {
    alert(apellidos)
} else {
    document.write(apellidos)
}