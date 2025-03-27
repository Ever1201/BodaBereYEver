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

document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    let formData = new URLSearchParams();
    formData.append("nombre", document.getElementById("nombre").value);
    formData.append("acompañantes", document.getElementById("Acompañantes").value);
    formData.append("mensaje", document.getElementById("mensaje").value);

    fetch("https://script.google.com/macros/s/AKfycbyV-b1QJ4FB8F_szIRuDbEbisc7-bNcckJjJ2QT6rBJhSKASWR6zxcvHKLoqc8nCgR7UQ/exec", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData
    })
    .then(response => response.json()) // Aquí espera una respuesta JSON
    .then(data => {
        console.log("Respuesta del servidor:", data);
        document.getElementById("respuesta").textContent = "Confirmación enviada con éxito.";
        document.getElementById("formulario").reset();
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById("respuesta").textContent = "Confirmación enviada con éxito.";
    });
});

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