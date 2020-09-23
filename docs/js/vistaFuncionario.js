let hamburguesa = document.querySelector('.navbar-burger');
let dashboard = document.getElementById('dashboard');

hamburguesa.addEventListener('click', function() {
    dashboard.classList.toggle('is-hidden');
})