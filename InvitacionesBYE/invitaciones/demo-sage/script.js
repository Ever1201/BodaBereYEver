document.addEventListener('DOMContentLoaded', () => {

    // --- Countdown Timer ---
    const eventDate = new Date('October 25, 2026 16:00:00').getTime();

    function updateCountdown() {
        const now = new Date();
        const event = new Date(eventDate);

        if (now >= event) {
            document.getElementById('countdown').innerHTML = "<div class='time-box'><span>¡Hoy!</span></div>";
            return;
        }

        // Calculate months
        let months = (event.getFullYear() - now.getFullYear()) * 12 + (event.getMonth() - now.getMonth());

        // Adjust if current day is after event day in the month
        if (now.getDate() > event.getDate()) {
            months--;
        }
        if (now.getDate() === event.getDate() && now.getHours() > event.getHours()) {
            // Handle precise edge cases if needed, but simple day comparison usually suffices for 'months'
            // If we want precise calculation down to minutes, we might need to decrement month if we haven't reached the time yet on the same day?
            // Actually standard definition: 1 month is roughly same day next month.
            // Let's stick to the day check.
        }

        // Calculate date after 'months'
        const tempDate = new Date(now);
        tempDate.setMonth(now.getMonth() + months);

        // Calculate remaining difference
        const distance = event.getTime() - tempDate.getTime();

        // Calculate remaining days, hours, minutes
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById('months').innerText = String(months).padStart(2, '0');
        document.getElementById('days').innerText = String(days).padStart(2, '0');
        document.getElementById('hours').innerText = String(hours).padStart(2, '0');
        document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
    }

    setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call

    // --- Intersection Observer for Animations ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in, .timeline-item, .scale-up');
    animatedElements.forEach(el => observer.observe(el));

    // --- Audio Control ---
    const audioBtn = document.getElementById('audioControl');
    const bgMusic = document.getElementById('bgMusic');
    let isPlaying = false;

    // Try to autoplay (might be blocked by browser policy until user interaction)
    // bgMusic.play().catch(e => console.log("Autoplay waiting for interaction"));

    audioBtn.addEventListener('click', () => {
        if (isPlaying) {
            bgMusic.pause();
            audioBtn.classList.remove('playing');
            audioBtn.innerHTML = '<i class="fas fa-play"></i>';
        } else {
            bgMusic.play().then(() => {
                audioBtn.classList.add('playing');
                audioBtn.innerHTML = '<i class="fas fa-music"></i>';
            }).catch(e => console.error("Audio playback error:", e));
        }
        isPlaying = !isPlaying;
    });

    // One-time interaction listener to unlock audio context if needed
    document.body.addEventListener('click', function unlockAudio() {
        // Optional: Auto-start music on first interaction
        // if (!isPlaying) audioBtn.click();
        document.body.removeEventListener('click', unlockAudio);
    }, { once: true });

    // --- RSVP Form Handling ---
    const rsvpForm = document.getElementById('rsvpForm');
    rsvpForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Mock submission
        const btn = rsvpForm.querySelector('button');
        const feedback = document.getElementById('form-feedback');

        const originalText = btn.innerText;
        btn.innerText = 'Enviando...';
        btn.disabled = true;

        setTimeout(() => {
            btn.style.display = 'none';
            feedback.innerText = '¡Gracias por confirmar! Hemos recibido tu respuesta.';
            feedback.classList.remove('hidden');
            feedback.style.color = 'green';
            feedback.style.marginTop = '1rem';
            feedback.style.fontWeight = 'bold';

            // Here you would typically send data to a server
        }, 1500);
    });
});
