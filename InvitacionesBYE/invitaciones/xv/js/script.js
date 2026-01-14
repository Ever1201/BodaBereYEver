window.onload = () => {
    const modal = document.getElementById('modalBienvenida');
    const content = document.getElementById('content');
    const btnIngresar = document.getElementById('btnIngresar');
    const audio = document.getElementById('musica');

    // Bloquear el contenido mientras el modal está activo
    content.classList.add('disabled');

    // Habilitar el contenido y reproducir la música al hacer clic en "Ingresar"
    btnIngresar.addEventListener('click', () => {
        modal.style.display = 'none';
        content.classList.remove('disabled');
        document.body.style.overflow = 'auto';
        audio.play();
        initNavDots();
    });
};

document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('musica');
    const musicaOff = document.getElementById('sonidomusicaOff');
    const musicaOn = document.getElementById('sonidoMusicaOn');

    const initializeMusicButton = () => {
        if (audio.paused) {
            musicaOff.style.display = 'block';
            musicaOn.style.display = 'none';
        } else {
            musicaOff.style.display = 'none';
            musicaOn.style.display = 'block';
        }
    };

    const toggleMusic = () => {
        if (audio.paused) {
            audio.play();
            musicaOff.style.display = 'none';
            musicaOn.style.display = 'block';
        } else {
            audio.pause();
            musicaOn.style.display = 'none';
            musicaOff.style.display = 'block';
        }
    };

    musicaOff.addEventListener('click', toggleMusic);
    musicaOn.addEventListener('click', toggleMusic);
    initializeMusicButton();
});

// ===== COUNTDOWN =====
const eventDate = new Date("2026-03-15T18:00:00").getTime();

const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        const pad = (num) => String(num).padStart(2, '0');
        document.getElementById("days").textContent = pad(days);
        document.getElementById("hours").textContent = pad(hours);
        document.getElementById("minutes").textContent = pad(minutes);
        document.getElementById("seconds").textContent = pad(seconds);
    } else {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "¡El evento ha comenzado!";
    }
}, 1000);

// ===== TIMELINE PROGRESS =====
document.addEventListener("DOMContentLoaded", function () {
    const timelines = document.querySelectorAll(".progress");
    const timelineContainers = document.querySelectorAll(".timeline-container");

    function updateProgress() {
        timelineContainers.forEach((container, index) => {
            const timeline = timelines[index];
            const rect = container.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            const start = windowHeight / 3;
            const end = rect.height + start;

            if (rect.top <= start && rect.bottom >= start) {
                let progress = ((start - rect.top) / (end - start)) * 100;
                progress = Math.max(0, Math.min(100, progress));
                timeline.style.height = `${progress}%`;
            }
        });
    }

    window.addEventListener("scroll", updateProgress);
    updateProgress();
});

// ===== SCROLL ANIMATIONS & PROGRESS BAR =====
document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.section, .section2');
    const timelineImages = document.querySelectorAll('.timeline-container .images div');
    
    // Actualizar barra de progreso
    const scrollTop = document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById('progressBar').style.width = scrollPercent + '%';

    // Animaciones al scroll
    sections.forEach((section) => {
        let sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.8) {
            section.classList.add('visible');
        }
    });

    timelineImages.forEach((image) => {
        let imageTop = image.getBoundingClientRect().top;
        if (imageTop < window.innerHeight * 0.8) {
            image.classList.add('visible');
        }
    });
});

// ===== NAVIGATION DOTS =====
function initNavDots() {
    const sections = document.querySelectorAll('.section, .section2');
    const navDotsContainer = document.getElementById('navDots');
    
    sections.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'nav-dot';
        if (index === 0) dot.classList.add('active');
        
        dot.addEventListener('click', () => {
            sections[index].scrollIntoView({ behavior: 'smooth' });
        });
        
        navDotsContainer.appendChild(dot);
    });

    // Actualizar dots activos al hacer scroll
    window.addEventListener('scroll', () => {
        let currentSectionIndex = 0;
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2) {
                currentSectionIndex = index;
            }
        });

        document.querySelectorAll('.nav-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSectionIndex);
        });
    });
}

// ===== FORM HANDLER =====
document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();
    
    let datos = {
        nombre: document.getElementById("nombre").value,
        correo: document.getElementById("correo").value,
        mensaje: document.getElementById("mensaje").value
    };

    fetch("TU_URL_DEL_SCRIPT", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos)
    }).then(() => {
        const respuesta = document.getElementById("respuesta");
        respuesta.innerText = "¡Gracias " + datos.nombre + "! Tu confirmación ha sido registrada.";
        respuesta.style.color = "#b246f2";
        respuesta.style.background = "rgba(178, 70, 242, 0.1)";
    }).catch(() => {
        const respuesta = document.getElementById("respuesta");
        respuesta.innerText = "Error al enviar. Por favor intenta de nuevo.";
        respuesta.style.color = "#ff6b6b";
        respuesta.style.background = "rgba(255, 107, 107, 0.1)";
    });

    document.getElementById("formulario").reset();
});

// ===== CAROUSEL =====
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function moveSlide(step) {
    // Remover clase active del slide actual
    slides[currentIndex].classList.remove('active');
    
    // Calcular nuevo índice
    currentIndex = (currentIndex + step + totalSlides) % totalSlides;
    
    // Agregar clase active al nuevo slide
    slides[currentIndex].classList.add('active');
}

// Auto-slide cada 4 segundos
let interval = setInterval(() => moveSlide(1), 4000);

// Pausar cuando el usuario interactúa
if (document.querySelector(".carousel")) {
    document.querySelector(".carousel").addEventListener("mouseenter", () => {
        clearInterval(interval);
    });

    document.querySelector(".carousel").addEventListener("mouseleave", () => {
        interval = setInterval(() => moveSlide(1), 4000);
    });

    // Tambien para touch en mobile
    document.querySelector(".carousel").addEventListener("touchstart", () => {
        clearInterval(interval);
    });

    document.querySelector(".carousel").addEventListener("touchend", () => {
        interval = setInterval(() => moveSlide(1), 4000);
    });
}
