window.onload = () => {
    const modal = document.getElementById('modalBienvenida');
    const content = document.getElementById('content');
    const btnIngresar = document.getElementById('btnIngresar');

    // Bloquear el contenido mientras el modal está activo
    content.classList.add('disabled');

    // Habilitar el contenido al hacer clic en "Ingresar"
    btnIngresar.addEventListener('click', () => {
        modal.style.display = 'none';
        content.classList.remove('disabled');
        document.body.style.overflow = 'auto'; // Reactivar el scroll
    });
};
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
const eventDate = new Date("2026-03-15T18:00:00").getTime();

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

document.addEventListener("scroll", function () {
let scrollTop = window.scrollY;
let docHeight = document.documentElement.scrollHeight - window.innerHeight;

// Ajusta el porcentaje para que empiece antes
let scrollPercent = ((scrollTop + 500) / docHeight) * 100; 

document.querySelector(".progress").style.height = scrollPercent + "%";

// Efecto de movimiento en los eventos
let events = document.querySelectorAll(".event");
events.forEach((event, index) => {
let move = scrollPercent - index * 15;
if (move > 0) {
    event.style.transform = `translateX(${move}px)`;
} else {
    event.style.transform = "translateX(0)";
}
});
});
// Script para animaciones de scroll
document.addEventListener('scroll', function () {
let sections = document.querySelectorAll('.section');
let timelineImages = document.querySelectorAll('.timeline-container .images img');

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
