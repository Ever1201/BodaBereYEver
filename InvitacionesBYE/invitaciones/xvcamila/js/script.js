document.addEventListener("DOMContentLoaded", () => {
  // 1. Partículas animadas de fondo
  const bg = document.querySelector(".background-animation");
  for (let i = 0; i < 40; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${5 + Math.random() * 10}s`;
    bg.appendChild(particle);
  }

  // 2. Contador regresivo
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

});
document.getElementById('confirmacionForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const respuestaEl = document.getElementById('respuesta');
  const boton = form.querySelector('button');

  respuestaEl.textContent = '';
  boton.disabled = true;
  boton.innerHTML = `<span class="spinner"></span> Enviando...`;

  fetch('https://script.google.com/macros/s/AKfycbw7Gbehg1qpE2MnVwbUMENNhlqrQcnzdsRKHBnyx83XQgwizSNd7h9BbDpaXYjjG7gQrw/exec', {
    method: 'POST',
    body: formData
  })
  .then(res => res.text())
  .then(response => {
    form.reset();

    respuestaEl.innerHTML = `
      <div class="confirmacion-exitosa">
        <svg viewBox="0 0 24 24">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
        <span>¡Gracias por confirmar tu asistencia!</span>
      </div>
    `;

    setTimeout(() => {
      respuestaEl.innerHTML = '';
    }, 5000);
  })
  .catch(error => {
    console.error(error);
    respuestaEl.textContent = 'Ocurrió un error al enviar tu confirmación.';
  })
  .finally(() => {
    boton.disabled = false;
    boton.textContent = 'Confirmar';
  });
});


      