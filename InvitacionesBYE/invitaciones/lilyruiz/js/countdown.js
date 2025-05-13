// Fecha del evento: 21 junio 2025 21:00
const fechaEvento = new Date("2025-06-21T21:00:00").getTime();

const contador = document.getElementById("contador");

const interval = setInterval(() => {
  const ahora = new Date().getTime();
  const diferencia = fechaEvento - ahora;

  if (diferencia <= 0) {
    clearInterval(interval);
    contador.innerHTML = "¡Ha llegado el gran día!";
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  contador.innerHTML = `${dias} días ${horas}h ${minutos}m ${segundos}s`;
}, 1000);
