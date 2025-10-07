document.addEventListener("DOMContentLoaded", function () {
    const playBtn = document.querySelector('.play-btn');
    const progressBar = document.querySelector('.progress-bar');
    const progressTime = document.querySelectorAll('.time');
    const volumeBar = document.querySelector('.volume-bar');
    let isPlaying = false;

    // Toggle Play/Pause
    playBtn.addEventListener('click', function () {
        isPlaying = !isPlaying;
        playBtn.textContent = isPlaying ? '⏸️' : '▶️';
    });

    // Update progress bar and time
    setInterval(() => {
        if (isPlaying) {
            let value = parseInt(progressBar.value);
            if (value < 100) {
                progressBar.value = value + 0.5; // Simulasi durasi lagu
                updateProgressTime();
            } else {
                playBtn.textContent = '▶️';
                isPlaying = false;
            }
        }
    }, 1000);

    function updateProgressTime() {
        const value = progressBar.value;
        const total = 240; // 4 menit dalam detik
        const current = Math.floor((value / 100) * total);
        const mins = Math.floor(current / 60);
        const secs = Math.floor(current % 60);
        progressTime[0].textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // Volume control
    volumeBar.addEventListener('input', function () {
        console.log(`Volume: ${volumeBar.value}%`);
    });
});
