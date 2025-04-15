import * as THREE from 'three';
import sceneElements from './sceneElements.js';
import { movementSpeed } from './constants.js';
import { checkCollisions, adjustPosition, cameraHeight } from './collision.js';


// Movement state
let keyW = false, keyA = false, keyS = false, keyD = false;
let keyQ = false, keyE = false;
let keyF = false; // For toggling walking surface
export let isWalkingOnXZ = true; 


// Movement and control setup
export function setupControls() {
    // Keyboard listeners
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);
}

// Keyboard event handlers
function onKeyDown(e) {
    switch (e.key.toLowerCase()) {
        case 'w': keyW = true; break;
        case 'a': keyA = true; break;
        case 's': keyS = true; break;
        case 'd': keyD = true; break;

        case 'q': keyQ = true; break;
        case 'e': keyE = true; break;

        case 'f': 
        isWalkingOnXZ = !isWalkingOnXZ; // Toggle walking surface
        console.log(`Walking on ${isWalkingOnXZ ? 'x-z' : 'x-y'} surface`);
        // sceneElements.camera.order = isWalkingOnXZ ? 'YXZ' : 'ZXY';
        break;

    }
}

function onKeyUp(e) {
    switch (e.key.toLowerCase()) {
        case 'w': keyW = false; break;
        case 'a': keyA = false; break;
        case 's': keyS = false; break;
        case 'd': keyD = false; break;
        case 'q': keyQ = false; break;
        case 'e': keyE = false; break;
    }
}

// Movement logic
export function handleKeyboard(deltaTime) {
    const camera = sceneElements.camera;
    const oldPosition = camera.position.clone();
    const direction = new THREE.Vector3();

    // Update camera rotation order based on walking surface
    camera.rotation.order = isWalkingOnXZ ? 'YXZ' : 'ZXY';

    if (isWalkingOnXZ) {
        // Walking on x-z surface
        camera.getWorldDirection(direction);
        direction.y = 0;
        direction.normalize();

        const right = new THREE.Vector3();
        right.crossVectors(direction, new THREE.Vector3(0, 1, 0));

        // Movement
        if (keyW) camera.position.add(direction.clone().multiplyScalar(movementSpeed * deltaTime));
        if (keyS) camera.position.sub(direction.clone().multiplyScalar(movementSpeed * deltaTime));
        if (keyA) camera.position.sub(right.clone().multiplyScalar(movementSpeed * deltaTime));
        if (keyD) camera.position.add(right.clone().multiplyScalar(movementSpeed * deltaTime));

        // Lock Y height
        camera.position.y = cameraHeight;
    } else {
        // Walking on x-y surface
        camera.getWorldDirection(direction);
        direction.z = 0; // Ignore depth movement
        direction.normalize();

        const up = new THREE.Vector3();
        up.crossVectors(direction, new THREE.Vector3(0, 0, 1));

        // Movement
        if (keyW) camera.position.add(direction.clone().multiplyScalar(movementSpeed * deltaTime));
        if (keyS) camera.position.sub(direction.clone().multiplyScalar(movementSpeed * deltaTime));
        if (keyA) camera.position.sub(up.clone().multiplyScalar(movementSpeed * deltaTime));
        if (keyD) camera.position.add(up.clone().multiplyScalar(movementSpeed * deltaTime));

        // Lock Z height
        camera.position.z = -20.5; // Adjust this value as needed
    }

    // Collision check
    if (checkCollisions(camera.position)) {
        camera.position.copy(oldPosition);
    }
}
