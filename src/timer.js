import { resetGame } from './main.js';

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

    // Back button
    const backButton = document.createElement('button');
    backButton.textContent = 'Back';
    backButton.style.marginTop = '20px';
    backButton.style.padding = '10px 20px';
    backButton.style.fontSize = '18px';
    backButton.style.cursor = 'pointer';
    backButton.style.border = 'none';
    backButton.style.borderRadius = '5px';
    backButton.style.background = '#007bff';
    backButton.style.color = 'white';
    backButton.style.transition = 'background 0.3s';

    backButton.addEventListener('mouseover', () => {
        backButton.style.background = '#0056b3';
    });

    backButton.addEventListener('mouseout', () => {
        backButton.style.background = '#007bff';
    });

    backButton.addEventListener('click', () => {
        // Remove the win message
        document.body.removeChild(winDiv);

        // Reset the scene
        resetGame();

        // Show the main menu
        const mainMenu = document.getElementById('mainMenu');
        mainMenu.style.display = 'flex';
    });

    winDiv.appendChild(backButton);
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