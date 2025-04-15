import sceneElements from './sceneElements.js';
import { initEmptyScene, render } from './sceneHelper.js';
import { load3DObjects } from './objects.js';
import { setupControls, handleKeyboard } from './controls.js';

let prevTime = 0;
function animate(time) {
    const deltaTime = (time - prevTime) / 1000;
    prevTime = time;
    handleKeyboard(deltaTime);
    render(sceneElements);
    
    // Update coordinates on screen
    const camera = sceneElements.camera;
    const coordinatesDiv = document.getElementById('coordinates');
    coordinatesDiv.innerText = `Coordinates: (x: ${camera.position.x.toFixed(2)}, y: ${camera.position.y.toFixed(2)}, z: ${camera.position.z.toFixed(2)})`;


    requestAnimationFrame(animate);
}

function init() {
    initEmptyScene(sceneElements);
    load3DObjects(sceneElements.sceneGraph);
    setupControls(sceneElements);
    animate(0);
}

init();
