// Crea	un	script	que	pregunte	al	usuario	el	número	de	hermanos	que	tiene	y	una	cantidad.	En	el	caso	
// de	que	el	usuario	tenga	más	de	tres	hermanos,	se	mostrará	la	cantidad	con	un	15%	de	descuento.	Si	el	
// usuario	tiene	menos	de	tres	hermanos,	se	mostrará	la	cantidad	con	un	5%	de	descuento.	Si	no	tiene	
// hermanos	se	mostrará	la	cantidad	sin	descuento.

var hermanos = prompt('¿Cuántos hermanos tienes?');
var cantidad = prompt('Introduce la cantidad');

if (hermanos >= 3) {
    document.write(cantidad * 0.85)
} else if (hermanos < 3 && hermanos > 0 )  {
    document.write(cantidad * 0.95)
} else {
    document.write(cantidad)
} 