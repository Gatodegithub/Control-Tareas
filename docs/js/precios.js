let botones = [...document.getElementsByClassName('button-precio')];
let valores = [...document.getElementsByClassName('valor')];
let costos = [...document.getElementsByClassName('costo')];

botones.forEach(element => {
    element.addEventListener('click', toggle, true);
});

function toggle(e) {
    botones.forEach(element => {
        let verdad = element.classList.contains('is-primary');
        if (verdad) element.classList.remove('is-primary');
    })

    e.target.classList.add('is-primary');

    calculo(e);
}

function calculo(e) {
    let precio = parseInt(e.target.textContent.slice(0, 2));

    let valoresNuevos = [];
    costos.forEach(element => {
        let valor = element.textContent.slice(1, 3);
        valor *= precio;
        valoresNuevos.push(valor);
    });

    for (let i = 0; i < valoresNuevos.length; i++) {
        valores[i].innerHTML = `Total de $${valoresNuevos[i]} / mes`;
    }
}

// Accordion
const accordionItemHeaders = document.querySelectorAll('.accordion-item-header');

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener('click', () => {
        accordionItemHeader.classList.toggle('active');
        // Devuelve el siguiente elemento hermano con nextElementSibling
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if(accordionItemHeader.classList.contains('active')) {
            // De lo que se haga de scroll (esta en max height: 0 asi que se hara scroll todo su contenido) el accordionitembody sera la altura del contenido 
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }else {
            accordionItemBody.style.maxHeight = 0;
        }
    });
});