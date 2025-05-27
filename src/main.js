import sceneElements from './sceneElements.js';
import { initEmptyScene, render } from './sceneHelper.js';
import { load3DObjects } from './objects.js';
import { setupControls, updateMovement } from './controls.js';
import { setupMainMenu } from './menu.js';
import { startTimer,  } from './timer.js';

let prevTime = 0;
let gameStarted = false;

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
    initEmptyScene(sceneElements);
    load3DObjects(sceneElements.sceneGraph);
    setupControls(sceneElements);

    setupMainMenu(() => {
        gameStarted = true;
        startTimer();
        animate(0);
    });

    // Start rendering the scene
    animate(0);
}

init();
