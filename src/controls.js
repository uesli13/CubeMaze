import * as THREE from 'three';
import sceneElements from './sceneElements.js';
import { movementSpeed } from './constants.js';
import { checkCollisions, adjustPosition, cameraHeight } from './collision.js';


// Movement state
let keyW = false, keyA = false, keyS = false, keyD = false;
let keyQ = false, keyE = false;
let keyF = false; // For toggling walking surface

export let isWalkingOnXZ = true; 

let targetRotation = new THREE.Euler(0, 0, 0); // Target rotation
let isRotating = false; 


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
            if (!keyF) { // Ensure this runs only once per key press
                keyF = true;
                isWalkingOnXZ = !isWalkingOnXZ; // Toggle walking surface
                console.log(`Walking on ${isWalkingOnXZ ? 'x-z' : 'x-y'} surface`);
                
                if (isWalkingOnXZ) {
                    targetRotation.set(0, 0, 0); // Set target rotation for x-z surface
                } else {
                    targetRotation.set(Math.PI / 2, 0, 0); // Set target rotation for x-y surface
                }
                isRotating = true; // Start rotation
            }
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
        case 'f': keyF = false; break;

    }
}

// Movement logic
export function handleKeyboard(deltaTime) {
    const camera = sceneElements.camera;
    const oldPosition = camera.position.clone();
    const direction = new THREE.Vector3();

    // Smoothly interpolate camera rotation towards targetRotation only if rotating
    if (isRotating) {
        const rotationSpeed = 0.1; // Adjust the factor for speed
        camera.rotation.x += (targetRotation.x - camera.rotation.x) * rotationSpeed;
        camera.rotation.y += (targetRotation.y - camera.rotation.y) * rotationSpeed;
        camera.rotation.z += (targetRotation.z - camera.rotation.z) * rotationSpeed;

        // Check if the rotation is close enough to the target to stop interpolating
        if (Math.abs(targetRotation.x - camera.rotation.x) < 0.01 &&
            Math.abs(targetRotation.y - camera.rotation.y) < 0.01 &&
            Math.abs(targetRotation.z - camera.rotation.z) < 0.01) {
            camera.rotation.copy(targetRotation); // Snap to target rotation
            isRotating = false; // Stop rotation
        }
    }

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
