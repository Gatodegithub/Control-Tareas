window.onload = iniciar;

function iniciar() {
    document.getElementById('boton').addEventListener('click', validar, false);
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

function validaCorreo() {
    let elemento = document.getElementById('correo');

    if(!elemento.checkValidity()) {
        if(elemento.validity.valueMissing) {
            console.log(elemento.parentElement.nextElementSibling);
            error(elemento.parentElement.nextElementSibling, "Debe introducir un correo")
        }

        if(elemento.validity.patternMismatch) {
            error(elemento.parentElement.nextElementSibling, "Debe introducir un correo valido")
        }
        return false;
    }
    elemento.parentElement.nextElementSibling.classList.add('is-hidden');
    return true;
}

function validaAsunto() {
    let elemento = document.getElementById('asunto');
    console.log(elemento);
    if(!elemento.checkValidity()) {
        if(elemento.validity.valueMissing) {
            console.log(elemento.parentElement.nextElementSibling);
            error(elemento.parentElement.nextElementSibling, "Debe seleccinar un asunto")
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

function validar(e) {
    if(validaNombre() && validaCorreo() && validaAsunto() && validaTerminos() && confirm("Pulsa aceptar si desea enviar el formulario")) {
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

// EmailJS
const btn = document.getElementById('boton');

document.getElementById('formContact')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_pwsmwad';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                alert('Sent!');
                event.target.reset();
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });