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
// Traducciones para el botón de cambio de idioma y el contenido
  const translations = {
      es: {
        title: "Invitación XV Años - Camila Sánchez",
        hero: "Mis XV Años",
        name: "Camila Sánchez",
        date: "4 de Octubre, 2025",
        inviteMessage: "Quiero que seas parte de este momento tan especial",
        intro: "Con alegría en el alma y amor en el corazón, te invito a celebrar mis XV años, un sueño que comienza a hacerse realidad.",
        countdownTitle: "Faltan para el gran día...",
        days: "Días",
        hours: "Horas",
        minutes: "Minutos",
        seconds: "Segundos",
        mass: "Misa",
        lunch: "Comida",
        reception: "Recepción",
        location: "Ver ubicación",
        dressCodeTitle: "Código de vestimenta:",
        dressCode: "Semiformal o Western",
        noTennis: "No tenis / No colores blanco, beige, ivory",
        giftsTitle: "Regalos",
        giftsText: "Tu presencia en este día tan especial es el mejor regalo que puedo recibir. Si deseas tener un detalle conmigo, se agradecerán las contribuciones en efectivo o puedes depositarlo en el buzón de regalos que estará disponible el día del evento. ¡Gracias por ser parte de este momento tan importante en mi vida!",
        rsvpTitle: "Confirma tu asistencia",
        confirm: "Confirmar",
        finalMessageTitle: "Te invitó con el corazón lleno de ilusión",
        finalMessage: "Ha llegado un día muy especial en nuestras vidas, un momento que hemos esperado con emoción y cariño: los XV años de nuestra querida hija Camila...",
        giftsParagraph1: "Tu presencia en este día tan especial es el mejor regalo que puedo recibir.",
        giftsParagraph2: "Si deseas tener un detalle conmigo, se agradecerán las contribuciones en efectivo o puedes depositarlo en el buzón de regalos que estará disponible el día del evento.",
        giftsParagraph3: "¡Gracias por ser parte de este momento tan importante en mi vida!",
        finalParagraph1: "Ha llegado un día muy especial en nuestras vidas, un momento que hemos esperado con emoción y cariño: los XV años de nuestra querida hija Camila.",
        finalParagraph2: "Con profundo amor, queremos compartir contigo la dicha de verla crecer, soñar y convertirse en una hermosa joven. Será un honor que nos acompañes en esta celebración tan significativa.",
        finalParagraph3: "Te esperamos para dar gracias a Dios con una misa de acción de gracias y disfrutar juntos una fiesta llena de alegría, familia y momentos inolvidables.",

      },
      en: {
        title: "Quinceañera Invitation - Camila Sánchez",
        hero: "My Quinceañera",
        name: "Camila Sánchez",
        date: "October 4, 2025",
        inviteMessage: "I want you to be part of this special moment",
        intro: "With joy in my soul and love in my heart, I invite you to celebrate my 15th birthday, a dream beginning to come true.",
        countdownTitle: "Countdown to the big day...",
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds",
        mass: "Church Service",
        lunch: "Dinner",
        reception: "Reception",
        location: "View Location",
        dressCodeTitle: "Dress Code:",
        dressCode: "Semi-formal or Western",
        noTennis: "No sneakers / No white, beige, or ivory colors",
        giftsTitle: "Gifts",
        giftsParagraph1: "Your presence on this special day is the best gift I could receive.",
        giftsParagraph2: "If you wish to give a gift, cash contributions are welcome or you can leave it in the gift box that will be available at the event.",
        giftsParagraph3: "Thank you for being part of this important moment in my life!",
        rsvpTitle: "Confirmation of Attendance",
        confirm: "Confirm",
        finalMessageTitle: "I invite you with a heart full of joy",
        finalParagraph1: "A very special day has arrived in our lives, a moment we've awaited with joy and love: the 15th birthday of our dear daughter Camila.",
        finalParagraph2: "With deep love, we want to share with you the joy of watching her grow, dream, and become a beautiful young woman. It will be an honor to have you with us at this meaningful celebration.",
        finalParagraph3: "We look forward to giving thanks to God in a special mass and then enjoying a joyful party full of family and unforgettable moments."
      }
    };

    let currentLang = 'es';

    document.getElementById('translateBtn').addEventListener('click', () => {
      currentLang = currentLang === 'es' ? 'en' : 'es';
      const t = translations[currentLang];
      document.getElementById('translateBtn').textContent = currentLang === 'es' ? 'EN' : 'ES';

      document.title = t.title;
      document.querySelector('.hero h1').textContent = t.hero;
      document.querySelector('.hero h2').textContent = t.name;
      document.querySelector('.hero p').textContent = t.date;

      const detailSections = document.querySelectorAll('.details');
      if (detailSections[0]) {
        detailSections[0].querySelector('h1').textContent = t.inviteMessage;
        detailSections[0].querySelector('p').textContent = t.intro;
      }
      if (detailSections[1]) {
        detailSections[1].querySelector('h1').textContent = t.finalMessageTitle;
        const ps = detailSections[1].querySelectorAll('p');
        if (ps.length >= 3) {
          ps[0].textContent = t.finalParagraph1;
          ps[1].textContent = t.finalParagraph2;
          ps[2].textContent = t.finalParagraph3;
        }
      }


      document.querySelector('.countdown h1').textContent = t.countdownTitle;
      document.querySelector('#timer .time-box:nth-child(1) small').textContent = t.days;
      document.querySelector('#timer .time-box:nth-child(2) small').textContent = t.hours;
      document.querySelector('#timer .time-box:nth-child(3) small').textContent = t.minutes;
      document.querySelector('#timer .time-box:nth-child(4) small').textContent = t.seconds;

      document.querySelectorAll('.event h4')[0].textContent = t.mass;
      document.querySelectorAll('.event h4')[1].textContent = t.lunch;
      document.querySelectorAll('.event h4')[2].textContent = t.reception;
      document.querySelectorAll('.event button').forEach(btn => btn.textContent = t.location);

      const dressSections = document.querySelectorAll('.dress-code');
      if (dressSections[0]) {
        dressSections[0].querySelector('h1').textContent = t.dressCodeTitle;
        dressSections[0].querySelectorAll('p')[0].textContent = t.dressCode;
        dressSections[0].querySelectorAll('p')[1].textContent = t.noTennis;
      }
      if (dressSections[1]) {
        dressSections[1].querySelector('h1').textContent = t.giftsTitle;
        const ps = dressSections[1].querySelectorAll('p');
        if (ps.length >= 3) {
          ps[0].textContent = t.giftsParagraph1;
          ps[1].textContent = t.giftsParagraph2;
          ps[2].textContent = t.giftsParagraph3;
        }
      }

      if (dressSections[1]) {
        dressSections[1].querySelector('h1').textContent = t.giftsTitle;
        dressSections[1].querySelectorAll('p')[0].textContent = t.giftsParagraph1;
        dressSections[1].querySelectorAll('p')[1].textContent = t.giftsParagraph2;
        dressSections[1].querySelectorAll('p')[2].textContent = t.giftsParagraph3;
      }

      // Mensaje final
      if (detailSections[1]) {
        detailSections[1].querySelector('h1').textContent = t.finalMessageTitle;
        detailSections[1].querySelectorAll('p')[0].textContent = t.finalParagraph1;
        detailSections[1].querySelectorAll('p')[1].textContent = t.finalParagraph2;
        detailSections[1].querySelectorAll('p')[2].textContent = t.finalParagraph3;
      }

      document.querySelector('.rsvp h1').textContent = t.rsvpTitle;
      document.querySelector('.rsvp button').textContent = t.confirm;
    });