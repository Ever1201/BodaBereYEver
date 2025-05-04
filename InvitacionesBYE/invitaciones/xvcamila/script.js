document.addEventListener("DOMContentLoaded", () => {
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
