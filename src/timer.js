let timerInterval = null;
let elapsedTime = 0;

export function displayCompletionTime(elapsedTime) {
    const winDiv = document.createElement('div');
    winDiv.style.position = 'absolute';
    winDiv.style.top = '50%';
    winDiv.style.left = '50%';
    winDiv.style.transform = 'translate(-50%, -50%)';
    winDiv.style.color = 'white';
    winDiv.style.background = 'rgba(0, 0, 0, 0.8)';
    winDiv.style.padding = '20px';
    winDiv.style.fontSize = '24px';
    winDiv.style.fontFamily = 'Arial, sans-serif';
    winDiv.style.textAlign = 'center';
    winDiv.style.borderRadius = '10px';
    winDiv.innerHTML = `
        <h1>Congratulations!</h1>
        <p>You've escaped the cube maze!</p>
        <p>Look around to enjoy the view!</p>
        <p>Your time: ${elapsedTime}s</p>
    `;
    document.body.appendChild(winDiv);
}

export function startTimer() {
    const timerElement = document.getElementById('timer');
    elapsedTime = 0;

    timerInterval = setInterval(() => {
        elapsedTime++;
        timerElement.textContent = `Time: ${elapsedTime}s`;
    }, 1000);
}

export function stopTimer() {
    clearInterval(timerInterval);
}

export function handleGameEnd() {
    stopTimer();
    displayCompletionTime(elapsedTime);
}

export function getElapsedTime() {
    return elapsedTime;
}