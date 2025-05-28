import sceneElements from './sceneElements.js';
import { initEmptyScene, render } from './sceneHelper.js';
import { load3DObjects } from './objects.js';
import { currentFace, setupControls, updateMovement } from './controls.js';
import { setupMainMenu } from './menu.js';
import { startTimer,  } from './timer.js';
import { switchFace } from './controls.js';
import { resetControls } from './controls.js';

export let prevTime = 0;
export let gameStarted = false;

export function resetGame() {

    // Reset the game state
    gameStarted = false;
    prevTime = 0;
    sceneElements.isGameWon = false;

    // Reset camera position and orientation
    sceneElements.camera.position.set(5, 1.5, 3);
    sceneElements.camera.rotation.set(0, 0, 0);

    switchFace('bottom');

    // Reset controls
    resetControls();
    setupControls();
}

function animate(time) {
    if (!gameStarted) {
        render(sceneElements); // Render the scene even if the game hasn't started
        requestAnimationFrame(animate);
        return;
    }
    const deltaTime = (time - prevTime) / 1000;
    prevTime = time;
    updateMovement(deltaTime);
    render(sceneElements);

    requestAnimationFrame(animate);
}

function init() {
    // Initialize the scene but don't start the game yet
    initEmptyScene();
    load3DObjects(sceneElements.sceneGraph);
    setupControls();

    setupMainMenu(() => {
        gameStarted = true;
        startTimer();
        animate(0);
    });

    // Start rendering the scene
    animate(0);
}

init();
