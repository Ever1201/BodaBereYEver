window.onload = () => {
    const modal = document.getElementById('modalBienvenida');
    const content = document.getElementById('content');
    const btnIngresar = document.getElementById('btnIngresar');
    const audio = document.getElementById('musica'); // Selecciona el elemento de audio

    // Bloquear el contenido mientras el modal está activo
    content.classList.add('disabled');

    // Habilitar el contenido y reproducir la música al hacer clic en "Ingresar"
    btnIngresar.addEventListener('click', () => {
        modal.style.display = 'none';
        content.classList.remove('disabled');
        document.body.style.overflow = 'auto'; // Reactivar el scroll

        // Reproducir la música
        audio.play();
    });
};

document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('musica'); // Selecciona el elemento de audio
    const musicaOff = document.getElementById('sonidomusicaOff'); // Botón de música "Off"
    const musicaOn = document.getElementById('sonidoMusicaOn'); // Botón de música "On"

    // Función para inicializar el estado de los botones
    const initializeMusicButton = () => {
        if (audio.paused) {
            musicaOff.style.display = 'block'; // Mostrar botón Off
            musicaOn.style.display = 'none'; // Ocultar botón On
        } else {
            musicaOff.style.display = 'none'; // Ocultar botón Off
            musicaOn.style.display = 'block'; // Mostrar botón On
        }
    };

    // Función para alternar reproducción y pausa
    const toggleMusic = () => {
        if (audio.paused) {
            audio.play();
            musicaOff.style.display = 'none'; // Oculta el botón Off
            musicaOn.style.display = 'block'; // Muestra el botón On
        } else {
            audio.pause();
            musicaOn.style.display = 'none'; // Oculta el botón On
            musicaOff.style.display = 'block'; // Muestra el botón Off
        }
    };

    // Agregar evento de clic a ambos botones
    musicaOff.addEventListener('click', toggleMusic);
    musicaOn.addEventListener('click', toggleMusic);

    // Inicializar el estado de los botones al cargar la página
    initializeMusicButton();
});

// Fecha del evento
const eventDate = new Date("2025-05-25T18:00:00").getTime();

// Actualiza el contador cada segundo
const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    } else {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "¡El evento ha comenzado!";
    }
}, 1000);

document.addEventListener("DOMContentLoaded", function () {
    const timeline = document.querySelector(".progress"); // Selecciona la barra de progreso
    const section4 = document.querySelectorAll(".section2")[1]; // Selecciona la 4ta sección (segundo .section2)

    function updateProgress() {
        const rect = section4.getBoundingClientRect(); // Obtiene la posición de la sección
        const windowHeight = window.innerHeight; // Altura de la ventana
        const start = windowHeight / 5; // Punto medio de la pantalla
        const end = rect.height + start; // Punto final de la sección

        if (rect.top <= start && rect.bottom >= start) {
            let progress = ((start - rect.top) / (end - start)) * 100;
            progress = Math.max(0, Math.min(100, progress)); // Limita el valor entre 0 y 100
            timeline.style.height = `${progress}%`;
        }
    }

    window.addEventListener("scroll", updateProgress); // Detecta el scroll
    updateProgress(); // Inicializa la barra si la sección ya está visible
});



// Script para animaciones de scroll en secciones
document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.section');
    const timelineImages = document.querySelectorAll('.timeline-container .images img');

    // Aparecer las secciones cuando estén en el viewport
    sections.forEach((section) => {
        let sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.8) {
            section.classList.add('visible');
        }
    });

    // Aparecer imágenes del itinerario al hacer scroll
    timelineImages.forEach((image) => {
        let imageTop = image.getBoundingClientRect().top;
        if (imageTop < window.innerHeight * 0.8) {
            image.classList.add('visible');
        }
    });
});

document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();
    
    let datos = {
        nombre: document.getElementById("nombre").value,
        correo: document.getElementById("correo").value,
        mensaje: document.getElementById("mensaje").value
    };

    fetch("TU_URL_DEL_SCRIPT", { // Pega aquí la URL del Apps Script
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos)
    }).then(() => {
        document.getElementById("respuesta").innerText = "¡Enviado con éxito!";
    }).catch(() => {
        document.getElementById("respuesta").innerText = "Error al enviar.";
    });

    // Limpiar el formulario
    document.getElementById("formulario").reset();
});
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
const container = document.querySelector('.carousel-container');

function moveSlide(step) {
    currentIndex = (currentIndex + step + totalSlides) % totalSlides;
    updateCarousel();
}

function updateCarousel() {
    const newTransform = -currentIndex * 100 + "%";
    container.style.transform = `translateX(${newTransform})`;
}

// Auto-slide cada 3 segundos
let interval = setInterval(() => moveSlide(1), 3000);

// Pausar el autoplay cuando el usuario pase el mouse sobre el carrusel
document.querySelector(".carousel").addEventListener("mouseenter", () => {
    clearInterval(interval);
});

// Reanudar el autoplay cuando el usuario sale del carrusel
document.querySelector(".carousel").addEventListener("mouseleave", () => {
    interval = setInterval(() => moveSlide(1), 3000);
});
