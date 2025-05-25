import * as THREE from 'three';
import sceneElements from './sceneElements.js';
import { movementSpeed } from './constants.js';
import { trySlide } from './collision.js';

// Key state
let keyW = false, keyA = false, keyS = false, keyD = false;
let keyQ = false, keyE = false;
let key1 = false, key2 = false, key3 = false, key4 = false, key5 = false, key6 = false;

export let currentFace = 'bottom';

let targetRotation = new THREE.Euler(0, 0, 0); // Target rotation
let isRotating = false;

// // Define all six cube faces

export const cubeFaces = {
    top: {normal: new THREE.Vector3(0, 1, 0),
         up: new THREE.Vector3(0, 0, -1),
         rotation: new THREE.Euler(Math.PI, -Math.PI/2, 0),
         level:{y:25.5} },
    
    bottom: { normal: new THREE.Vector3(0, -1, 0), 
        up: new THREE.Vector3(0, 0, 1), 
        rotation: new THREE.Euler(0, 0, 0),
        level:{y:1.5} },
    
    front:  { normal: new THREE.Vector3(0, 0, -1),
        up: new THREE.Vector3(0, 1, 0),
            rotation: new THREE.Euler(Math.PI / 2, 0, 0),
            level: { z: -21.5 },},
    
    back:   { normal: new THREE.Vector3(0, 0, 1),
           up: new THREE.Vector3(0, -1, 0),
            rotation: new THREE.Euler(-Math.PI/2, 0, Math.PI/2),
             level: { z: 2.5 } },
    
    left:   { normal: new THREE.Vector3(-1, 0, 0),
          up: new THREE.Vector3(0, 1, 0),
            rotation: new THREE.Euler(0, Math.PI , Math.PI / 2),
             level: { x: -2.5 },},
    
    right:  { normal: new THREE.Vector3(1, 0, 0),
           up: new THREE.Vector3(0, 1, 0),
             rotation: new THREE.Euler(Math.PI, Math.PI, -Math.PI / 2),
              level: { x: 21.5 } },
};

// Setup controls
export function setupControls() {
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);
}

// Switch active face
function switchFace(faceName) {
    const face = cubeFaces[faceName];
    if (!face) return;

    currentFace = faceName;
    targetRotation.copy(face.rotation);
    isRotating = true;
    
    const camera = sceneElements.camera;
    if (face.level.x !== undefined) camera.position.x = face.level.x;
    if (face.level.y !== undefined) camera.position.y = face.level.y;
    if (face.level.z !== undefined) camera.position.z = face.level.z;

}

// Keydown event
function onKeyDown(e) {
    switch (e.key.toLowerCase()) {
        case 'w': keyW = true; break;
        case 'a': keyA = true; break;
        case 's': keyS = true; break;
        case 'd': keyD = true; break;
        case 'q': keyQ = true; break;
        case 'e': keyE = true; break;

        // Toggle cube faces manually
        case '1': if (!key1) { key1 = true; switchFace('bottom'); } break;
        case '2': if (!key2) { key2 = true; switchFace('front'); } break;
        case '3': if (!key3) { key3 = true; switchFace('left'); } break;
        case '4': if (!key4) { key4 = true; switchFace('back'); } break;
        case '5': if (!key5) { key5 = true; switchFace('right'); } break;
        case '6': if (!key6) { key6 = true; switchFace('top'); } break;
    }
}

// Keyup event
function onKeyUp(e) {
    switch (e.key.toLowerCase()) {
        case 'w': keyW = false; break;
        case 'a': keyA = false; break;
        case 's': keyS = false; break;
        case 'd': keyD = false; break;
        case 'q': keyQ = false; break;
        case 'e': keyE = false; break;

        case '1': key1 = false; break;
        case '2': key2 = false; break;
        case '3': key3 = false; break;
        case '4': key4 = false; break;
        case '5': key5 = false; break;
        case '6': key6 = false; break;
    }
}
function handleWinning(camera) {
    if (sceneElements.isGameWon) return;

    const doorPosition = new THREE.Vector3(-4, 26.5, -9.5);
    const distanceToDoor = camera.position.distanceTo(doorPosition);

    if (distanceToDoor < 2) {
        sceneElements.isGameWon = true;
        moveToWinningPosition(camera);
    }
}

function moveToWinningPosition(camera) {
    const targetPosition = sceneElements.winningPosition.clone();
    const targetRotation = new THREE.Euler(0, 0, 0, 'YXZ');

    const moveInterval = setInterval(() => {
        // Smoothly move camera position
        camera.position.lerp(targetPosition, 0.05);

        // Smoothly rotate camera
        camera.rotation.x += (targetRotation.x - camera.rotation.x) * 0.05;
        camera.rotation.y += (targetRotation.y - camera.rotation.y) * 0.05;
        camera.rotation.z += (targetRotation.z - camera.rotation.z) * 0.05;

        if (camera.position.distanceTo(targetPosition) < 0.1) {
            clearInterval(moveInterval);
            displayWinMessage();
        }
    }, 16);
}

function displayWinMessage() {
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
        <p>Look around to enjoy the view...</p>
    `;
    document.body.appendChild(winDiv);
}

// Handle movement
export function handleKeyboard(deltaTime) {
    const camera = sceneElements.camera;
    
    // Check for winning condition on top face
    if (currentFace === 'top') {
        handleWinning(camera);
    }

    // If game is won, disable movement
    if (sceneElements.isGameWon) {
        return;
    }

    const oldPosition = camera.position.clone();
    const face = cubeFaces[currentFace];

    // Smooth camera rotation
    if (isRotating) {
        const rotSpeed = 0.1;
        camera.rotation.x += (targetRotation.x - camera.rotation.x) * rotSpeed;
        camera.rotation.y += (targetRotation.y - camera.rotation.y) * rotSpeed;
        camera.rotation.z += (targetRotation.z - camera.rotation.z) * rotSpeed;

        if (Math.abs(targetRotation.x - camera.rotation.x) < 0.1 &&
            Math.abs(targetRotation.y - camera.rotation.y) < 0.1 &&
            Math.abs(targetRotation.z - camera.rotation.z) < 0.1) {
            camera.rotation.copy(targetRotation);
            isRotating = false;
        }
    }

    // Compute forward and right vectors based on current face
    const forward = new THREE.Vector3();
    camera.getWorldDirection(forward);
    forward.projectOnPlane(face.normal).normalize();

    const right = new THREE.Vector3();
    right.crossVectors(forward, face.normal).normalize();

    // Build movement direction vector
    const moveDirection = new THREE.Vector3();

    if (keyW) moveDirection.add(forward);
    if (keyS) moveDirection.sub(forward);
    if (keyD) moveDirection.sub(right);
    if (keyA) moveDirection.add(right);

    // Optional: allow movement along the cube face normal for debugging
    if (keyQ) moveDirection.add(face.normal.clone().negate());
    if (keyE) moveDirection.add(face.normal.clone());

    // Normalize and apply speed
    if (moveDirection.length() > 0) {
        moveDirection.normalize();
        moveDirection.multiplyScalar(movementSpeed * deltaTime);
        camera.position.add(moveDirection);
    }

    // Collision detection

    // if (checkCollisions(camera.position)) {
    //     camera.position.copy(oldPosition);
    // }

    const proposedPosition = camera.position.clone();
    const correctedPosition = trySlide(oldPosition, proposedPosition);
    camera.position.copy(correctedPosition);


    // Clamp the camera's position to stay within the map boundaries
    camera.position.x = THREE.MathUtils.clamp(camera.position.x, sceneElements.BOUNDARIES.x.min, sceneElements.BOUNDARIES.x.max);
    camera.position.y = THREE.MathUtils.clamp(camera.position.y, sceneElements.BOUNDARIES.y.min, sceneElements.BOUNDARIES.y.max);
    camera.position.z = THREE.MathUtils.clamp(camera.position.z, sceneElements.BOUNDARIES.z.min, sceneElements.BOUNDARIES.z.max);

    // Check for face change
    switch (currentFace) {
        case 'bottom':
            if (camera.position.z < -21) {
                switchFace('front');
            }
            break;

        case 'front':
            if (camera.position.x < -1) {
                switchFace('left');
            }
            break;

        case 'left':
            if (camera.position.z > 2) {
                switchFace('back');
            }
            break;

        case 'back':
            if (camera.position.x > 21) {
                switchFace('right');
            }
            break;

        case 'right':
            if (camera.position.y > 25.5) {
                switchFace('top');
            }
            break;

        case 'top':
            break;
    }
}
