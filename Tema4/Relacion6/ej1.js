// Diseña una web que hará uso de cookies para guardar el nombre del usuario. En caso de no tener ninguna 
//cookie de ese sitio, deberá preguntar el nombre del usuario y almacenarlo en una cookie que caducará en 5 
// minutos. Tras esto saludará al usuario mediante un mensaje en pantalla. En caso de tener ya creada la cookie 
// deberá leerla y mostrar el mensaje anterior directamente. Deberá proporcionar también un enlace para borrar 
//la cookie (lo que podríamos llamar 'Cerrar Sesión').

function crearCookie(){
    if (document.cookie == ''){
        usuario = prompt('Introduce nombre de usuario');
        document.cookie = `usuario=${usuario}; max-age=300`
        alert(`Bienvenido ${sacarNombre()}`)
    } else {
        alert(`La cookie ya está creada: ${document.cookie}`)
        alert(`Bienvenido ${sacarNombre()}`)
    }
}

function sacarNombre(){
    cookies = document.cookie.split(';')
    usuario = cookies[0].split('=')
    return usuario[1]
}

function cerrarSesion(){
    if (!(document.cookie == '')){
        document.cookie = "usuario=; max-age = 0"
    }
}

document.getElementById('cerrar').addEventListener('click', cerrarSesion);

window.addEventListener('load', crearCookie)
