document.getElementById('startButton').addEventListener('click', startTimer);

function startTimer() {
    const minutesInput = document.getElementById('minutesInput');
    const secondsInput = document.getElementById('secondsInput');
    const timerDisplay = document.getElementById('timerDisplay');

    const minutes = parseInt(minutesInput.value, 10);
    const seconds = parseInt(secondsInput.value, 10);

    const totalSeconds = (minutes * 60) + seconds;

    if (totalSeconds > 0) {
        minutesInput.disabled = true;
        secondsInput.disabled = true;
        this.disabled = true;

        let remainingSeconds = totalSeconds;
        let displayMinutes = Math.floor(remainingSeconds / 60);
        let displaySeconds = remainingSeconds % 60;

        const countdownInterval = setInterval(() => {
            remainingSeconds--;

            if (remainingSeconds < 0) {
                clearInterval(countdownInterval);
                timerDisplay.innerText = "Time's up!";
                playBeepSound();
                minutesInput.disabled = false;
                secondsInput.disabled = false;
                this.disabled = false;
            } else {
                displayMinutes = Math.floor(remainingSeconds / 60);
                displaySeconds = remainingSeconds % 60;
                timerDisplay.innerText = `${displayMinutes}:${displaySeconds}`;
            }
        }, 1000);
    }
}

function playBeepSound() {
    const beepSound = document.getElementById('beep');
    beepSound.play();
}
