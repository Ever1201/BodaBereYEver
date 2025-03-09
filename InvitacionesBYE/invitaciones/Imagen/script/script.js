// Abrir el modal al cargar la página
window.onload = function () {
    let modal = document.getElementById("modal");
    modal.style.display = "flex";
};

// Función para cerrar el modal y comenzar la música
function startMusic() {
    let modal = document.getElementById("modal");
    let audio = document.getElementById("audio");
    modal.style.display = "none";
    audio.play();
}

// Función para cerrar el modal sin reproducir la música
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Función para pausar o reanudar la música
document.getElementById("pauseBtn").addEventListener("click", function () {
    let audio = document.getElementById("audio");
    let pauseBtn = document.getElementById("pauseBtn");

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});
