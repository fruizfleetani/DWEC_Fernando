// Crea	un	script	que	pregunte	la	edad,	y	determine	si	debes	estar	en	el	jardín	de	infancia	(menores	de	5	
// años),	en	primaria	(entre	6	y	11),	en	la	ESO	(entre	12	y	16),	en	Bachillerato	o	Ciclos	(entre	17	y	21)	
// o	en	la	Universidad	(más	de	21).

var edad = prompt('Introduce tu edad');

if (edad <= 5) {
    document.write(`Jardín de infancia`)
} else if (edad >= 6 && edad <= 11)  {
    document.write(`Primaria`)
} else if (edad >= 12 && edad <= 16)  {
    document.write(`ESO`) 
} else if (edad >= 17 && edad <= 21)  {
    document.write(`Bachillerato o Ciclos`)
} else {
    document.write(`Universidad`)
}