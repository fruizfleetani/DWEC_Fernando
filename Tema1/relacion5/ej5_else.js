// Crea	un	script	que	recoja	la	nota	de	dos	exámenes	y	dos	trabajos	y	determine	si	la	media	es	superior	
// a	5	para	aprobar	la	asignatura	(75%	exámenes	y	25%	trabajos)	y	4.5	en	todos	ellos.

var examen1 = prompt('Introduce la nota del primer examen');
var examen2 = prompt('Introduce la nota del segundo examen');
var trabajo1 = prompt('Introduce la nota del primer trabajo');
var trabajo2 = prompt('Introduce la nota del segundo trabajo');

var media = ((examen1 + examen2) * 0.75 + ((trabajo1 + trabajo2) * 0.25))

if (media >= 5 && examen1 >= 4.5 && examen2 >= 4.5 && trabajo1 >= 4.5 && trabajo2 >= 4.5) {
    document.write(`Tienes una media de ${media} y en todo más de 4.5. Estás aprobado`)
} else {
    document.write(`Tienes una media de ${media}. Estás suspenso (si no se tiene mas de 4.5 en todo también se suspende). `)
} 