window.onload = iniciarRegistro;

function iniciarRegistro() {
    document.getElementById('botonRegistro').addEventListener('click', validarRegistro, false);
}

function validaNombre() {
    let elemento = document.getElementById('nombre');

    let texto = elemento.value.trim();
    
    if(texto == ''){
        error(elemento.parentElement.nextElementSibling, "Debe introducir un nombre")
        return false;
    }

    if(!elemento.checkValidity()) {
        if(elemento.validity.valueMissing) {
            console.log(elemento.parentElement.nextElementSibling);
            error(elemento.parentElement.nextElementSibling, "Debe introducir un nombre")
        }

        if(elemento.validity.patternMismatch) {
            error(elemento.parentElement.nextElementSibling, "Debe introducir un nombre de 4 a 15 caracteres")
        }
        return false;
    }
    elemento.parentElement.nextElementSibling.classList.add('is-hidden');
    return true;
}

function validaContrasena() {
    let elemento = document.getElementById('contrasena');

    if(!elemento.checkValidity()) {
        if(elemento.validity.valueMissing) {
            console.log(elemento.parentElement.nextElementSibling);
            error(elemento.parentElement.nextElementSibling, "Debe introducir una contraseña, maximo 30 caracteres")
        }

        if(elemento.validity.patternMismatch) {
            error(elemento.parentElement.nextElementSibling, "Debe introducir una contraseña con solo numeros y letras, sin espacios, entre 8 a 30 caracteres")
        }
        return false;
    }
    elemento.parentElement.nextElementSibling.classList.add('is-hidden');
    return true;
}

function validaCorreo() {
    let elemento = document.getElementById('correo');

    if(!elemento.checkValidity()) {
        if(elemento.validity.valueMissing) {
            console.log(elemento.parentElement.nextElementSibling);
            error(elemento.parentElement.nextElementSibling, "Debe introducir su correo de trabajo")
        }

        if(elemento.validity.patternMismatch) {
            error(elemento.parentElement.nextElementSibling, "Debe introducir un correo valido")
        }
        return false;
    }
    elemento.parentElement.nextElementSibling.classList.add('is-hidden');
    return true;
}

function validaNombreEquipo() {
    let elemento = document.getElementById('nombreEquipo');

    let texto = elemento.value.trim();
    
    if(texto == ''){
        error(elemento.parentElement.nextElementSibling, "Debe introducir un nombre")
        return false;
    }

    if(!elemento.checkValidity()) {
        if(elemento.validity.valueMissing) {
            console.log(elemento.parentElement.nextElementSibling);
            error(elemento.parentElement.nextElementSibling, "Debe introducir un nombre para su equipo")
        }

        if(elemento.validity.patternMismatch) {
            error(elemento.parentElement.nextElementSibling, "Debe introducir un nombre de 4 a 15 caracteres, sin numeros")
        }
        return false;
    }
    elemento.parentElement.nextElementSibling.classList.add('is-hidden');
    return true;
}

function validaTerminos() {
    let elemento = document.getElementById('terminos');
    console.log(elemento);
    if(!elemento.checkValidity()) {
        if(elemento.validity.valueMissing) {
            console.log(elemento.parentElement.nextElementSibling);
            error(elemento.parentElement.nextElementSibling, "Debe aceptar los terminos y condiciones")
        }

        return false;
    }
    elemento.parentElement.nextElementSibling.classList.add('is-hidden');
    return true;
}

function validarRegistro(e) {
    if(validaNombre() && validaContrasena() && validaCorreo() && validaNombreEquipo() && validaTerminos() && confirm("Pulsa aceptar si desea enviar el formulario")) {
        return true;
    }
    e.preventDefault();
    return false;
}

function error(pError, mensaje) {
    pError.innerHTML = mensaje;
    pError.classList.remove('is-hidden');
    pError.focus();
}