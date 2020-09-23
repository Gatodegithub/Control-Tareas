const hamburguesa = document.querySelector('.navbar-burger');
const navmenu = document.querySelector('.navbar-menu');
const botonLogin = document.getElementById('botonLogin'); // Boton iniciar sesion
const modalLogin = document.getElementById('modalLogin'); // Modal
const modalBg = document.querySelector('.modal-background'); // BG
const modalClose = document.querySelector('.modal-close'); // x

[hamburguesa, botonLogin, modalBg, modalClose].forEach(element => {
    element.addEventListener('click', activo, false);
})

function activo(e) {
    let isTrue = this == botonLogin || this == modalBg || this == modalClose;

    isTrue ? modalLogin.classList.toggle('is-active') : hamburguesa.classList.toggle('is-active'), navmenu.classList.toggle('is-active')
}