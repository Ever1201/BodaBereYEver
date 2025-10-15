document.addEventListener('DOMContentLoaded', () => {
  // Inicializar AOS
  AOS.init({ 
    once: false,
    duration: 800, 
    easing: 'ease-in-out',
    offset: 100,
  });

  // Scroll suave para los enlaces del menú
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Botón de volver arriba
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.remove('hidden');
    } else {
      scrollToTopBtn.classList.add('hidden');
    }
  });
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Validación del formulario de contacto
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    // Validar nombre
    const nombre = document.getElementById('nombre');
    const nombreError = nombre.nextElementSibling;
    if (!nombre.value.trim()) {
      nombreError.classList.remove('hidden');
      isValid = false;
    } else {
      nombreError.classList.add('hidden');
    }

    // Validar email
    const email = document.getElementById('email');
    const emailError = email.nextElementSibling;
    const emailRegex = /^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value)) {
      emailError.classList.remove('hidden');
      isValid = false;
    } else {
      emailError.classList.add('hidden');
    }

    // Validar mensaje
    const mensaje = document.getElementById('mensaje');
    const mensajeError = mensaje.nextElementSibling;
    if (!mensaje.value.trim()) {
      mensajeError.classList.remove('hidden');
      isValid = false;
    } else {
      mensajeError.classList.add('hidden');
    }

    // Mostrar mensaje de éxito si es válido
    if (isValid) {
      const successMessage = document.getElementById('success-message');
      successMessage.classList.remove('hidden');
      form.reset();
      setTimeout(() => {
        successMessage.classList.add('hidden');
      }, 5000);
    }
  });
});