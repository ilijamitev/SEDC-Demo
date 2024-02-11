function startTimer(minutes) {
    let seconds = minutes * 60;
    const timerDisplay = document.getElementById('timer');
    timerDisplay.style.color = "Green"

    const timerInterval = setInterval(() => {
        const minutesDisplay = Math.floor(seconds / 60);
        const secondsDisplay = seconds % 60;

        if (!minutesDisplay && secondsDisplay <= 60) {
            timerDisplay.style.color = "Yellow"
        }
        if (!minutesDisplay && secondsDisplay <= 10) {
            timerDisplay.style.color = "Red"
        }
        timerDisplay.textContent = `${minutesDisplay}:${secondsDisplay < 10 ? '0' : ''}${secondsDisplay}`;

        if (seconds <= 0) {
            clearInterval(timerInterval);
            timerDisplay.style.color = "DarkRed"
            timerDisplay.textContent = 'Time\'s up!';
        } else {
            seconds--;
        }
    }, 1000);
}

startTimer(25);