const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24,
  month = day * 30.44;

let countDown = new Date("october 25, 2025 12:00:00").getTime();

function updateCounter() {
  let now = new Date().getTime(),
    distance = countDown - now;

  let months = Math.floor(distance / month),
    days = Math.floor((distance % month) / day),
    hours = Math.floor((distance % day) / hour),
    minutes = Math.floor((distance % hour) / minute);

  document.getElementById("months").innerText = months;
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
}

// Ejecutar inmediatamente para actualizar el contador al cargar la página
updateCounter();

// Luego, establecer el intervalo para que continúe actualizando
let x = setInterval(updateCounter, minute);
