// crea	un	script	que	reciba	la	edad	de	un	usuario	y	determine	si	puede	jubilarse	o	no	(la	jubilación	se	
// alcanza	con	67 años).

var edad = prompt('Introduce tu edad');

if (edad >= 67) {
    document.write(`Puedes jubilarte`)
} else {
    document.write(`No puedes jubilarte`)
}