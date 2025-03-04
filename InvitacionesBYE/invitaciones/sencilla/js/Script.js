const audio = document.getElementById('background-music');
const musicIcon = document.getElementById('music-icon');

function toggleMusic() {
    if (audio.paused) {
        audio.play(); // Reproduce la música
        musicIcon.src = "img/pause.svg"; // Cambia a la imagen de reproducir
    } else {
        audio.pause(); // Pausa la música
        musicIcon.src = "img/play.svg"; // Cambia a la imagen inicial
    }
}

// Reproduce la música automáticamente al cargar la página
window.onload = function() {
    audio.play().catch(error => {
        console.log('Reproducción automática fallida:', error);
    });
};
