import sceneElements from './sceneElements.js';
import { initEmptyScene, render } from './sceneHelper.js';
import { load3DObjects } from './objects.js';
import { setupControls, handleKeyboard } from './controls.js';

let prevTime = 0;
let gameStarted = false;
let timerInterval = null;
let elapsedTime = 0;

function animate(time) {
    if (!gameStarted) {
        render(sceneElements); // Render the scene even if the game hasn't started
        requestAnimationFrame(animate);
        return;
    }

    const deltaTime = (time - prevTime) / 1000;
    prevTime = time;
    handleKeyboard(deltaTime);
    render(sceneElements);

    requestAnimationFrame(animate);
}

function startTimer() {
    const timerElement = document.getElementById('timer');
    elapsedTime = 0;

    timerInterval = setInterval(() => {
        elapsedTime++;
        timerElement.textContent = `Time: ${elapsedTime}s`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function displayCompletionTime() {
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

function init() {
    // Initialize the scene but don't start the game yet
    initEmptyScene(sceneElements);
    load3DObjects(sceneElements.sceneGraph);
    setupControls(sceneElements);

    // Setup main menu logic
    const mainMenu = document.getElementById('mainMenu');
    const startGameButton = document.getElementById('startGameButton');
    const howToPlayButton = document.getElementById('howToPlayButton');
    const howToPlayModal = document.getElementById('howToPlayModal');
    const closeHowToPlayButton = document.getElementById('closeHowToPlayButton');

    startGameButton.addEventListener('click', () => {
        mainMenu.style.display = 'none'; // Hide the menu
        gameStarted = true; // Start the game
        startTimer(); // Start the timer
        animate(0); // Start the animation loop
    });

    howToPlayButton.addEventListener('click', () => {
        howToPlayModal.classList.remove('hidden'); // Show the modal
    });

    closeHowToPlayButton.addEventListener('click', () => {
        howToPlayModal.classList.add('hidden'); // Hide the modal
    });

    // Start rendering the scene immediately
    animate(0);
}

// Stop the timer and display the completion time when the game ends
export function handleGameEnd() {
    stopTimer();
    displayCompletionTime();
}

init();
