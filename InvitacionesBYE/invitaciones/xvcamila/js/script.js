document.addEventListener("DOMContentLoaded", () => {
    // Partículas simuladas (simple animación visual)
    const bg = document.querySelector(".background-animation");
    for (let i = 0; i < 40; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${5 + Math.random() * 10}s`;
      bg.appendChild(particle);
    }
  });
  
const eventDate = new Date("2025-10-04T13:00:00").getTime();

  const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance <= 0) {
      clearInterval(countdown);
      document.getElementById("timer").innerHTML = "<strong>¡Ya comenzó el evento!</strong>";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
  }, 1000);

document.getElementById("rsvp-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const form = this;
    const button = document.getElementById("submit-btn");
    const message = document.getElementById("success-message");

    const formData = {
      Nombre: form.Nombre.value,
      Acompañantes: form.Acompañantes.value,
      Asistencia: form.Asistencia.value,
      Mensaje: form.Mensaje.value
    };

    button.disabled = true;
    button.textContent = "Enviando...";

    fetch("https://script.google.com/macros/s/AKfycbyElGbtyQ7-A_5pWgOAOIFyePm94Nat1wWSJ2hltc28mKVCQs_wPM2ofRiQIjjJUHEl/exec", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        form.reset();
        message.style.display = "block";
      } else {
        alert("Hubo un problema al enviar el formulario. Intenta de nuevo.");
      }
      button.disabled = false;
      button.textContent = "Confirmar";
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Ocurrió un error inesperado.");
      button.disabled = false;
      button.textContent = "Confirmar";
    });
  });