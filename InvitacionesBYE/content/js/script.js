// Ejemplo de interacción básica
document.addEventListener('DOMContentLoaded', function() {
    console.log('El template ha sido cargado correctamente.');
});

window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.scrollY;
    hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`; // Ajusta la velocidad del parallax
});

// Seleccionar elementos
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

// Función para alternar el menú
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    
    const adjustFooterPosition = () => {
        const viewportHeight = window.innerHeight;
        const contentHeight = document.body.offsetHeight;

        // Si el contenido no llena la pantalla, ajusta el espacio
        if (contentHeight < viewportHeight) {
            main.style.minHeight = `${viewportHeight - footer.offsetHeight - main.offsetTop}px`;
        }
    };

    // Ejecutar al cargar y redimensionar
    adjustFooterPosition();
    window.addEventListener('resize', adjustFooterPosition);
});

// Variables para sumar valores
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const totalSumDisplay = document.getElementById('totalSum');

// Actualizar la suma total cuando se seleccionan opciones
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        let total = 0;
        checkboxes.forEach((box) => {
            if (box.checked) {
                total += parseFloat(box.value);
            }
        });
        console.log(`Total calculado: $${total.toFixed(2)}`);  // Verificar en la consola
        totalSumDisplay.textContent = `Total: $${total.toFixed(2)}`; // Mostrar con 2 decimales
    });
});
