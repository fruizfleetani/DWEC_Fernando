// Haciendo uso de expresiones regulares crea funciones para validar los campos que se indican a continuación. 
//La función recibirá un parámetro de tipo string con el valor a validar y debe devolver true o false según 
//cumpla los requisitos de validación:

//var Cadena = document.getElementById('string');

// validarMayuscula: El parámetro debe contener al menos un carácter en mayúscula 

function validarMayuscula(cadena){
    regex = /[A-Z]/;
    return regex.test(cadena)
}

// validarCaracteresEspeciales: El parámetro debe contener al menos uno de los siguientes caracteres: !@#$%^&

function validarCaracteresEspeciales(cadena){
    regex = /[!@#$%^&]/;
        return regex.test(cadena)
}

// validarCorreo: El parámetro debe tener el formato correcto de un email

function validarCorreo(correo){
    regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
    return regex.test(correo)
}


// validarTarjetaCredito: El parámetro debe tener el formato correcto de una tarjeta de crédito
// validarLongitud: El parámetro debe tener al menos 8 caracteres.
// validarNumero: El parámetro debe contener al menos un dígito.