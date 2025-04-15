import * as THREE from 'three';
import sceneElements from './sceneElements.js';
import { mouseSensitivity } from './constants.js';
import { MAZE_SCALE } from './constants.js';
import {isWalkingOnXZ}  from './controls.js';

export function initEmptyScene() {
    // Scene
    sceneElements.sceneGraph = new THREE.Scene();

    // Camera
    const width = window.innerWidth;
    const height = window.innerHeight;
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.01, 1000);
    camera.position.set(5 * MAZE_SCALE, 3 * MAZE_SCALE, 0);
    camera.rotation.order = 'YXZ';

    sceneElements.camera = camera;

    // Lights
    const ambientLight = new THREE.AmbientLight('white', 0.5);
    sceneElements.sceneGraph.add(ambientLight);

    const spotLight = new THREE.SpotLight('white', 225);
    spotLight.position.set(10, 20, -10);
    spotLight.castShadow = true;
    sceneElements.sceneGraph.add(spotLight);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor('rgb(255, 255, 150)', 1.0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    document.getElementById('Tag3DScene').appendChild(renderer.domElement);
    sceneElements.renderer = renderer;

    // Pointer lock
    setupPointerLock(renderer.domElement);

    // Resize
    window.addEventListener('resize', onWindowResize);
}

export function render() {
    sceneElements.renderer.render(sceneElements.sceneGraph, sceneElements.camera);
}

function onWindowResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    sceneElements.camera.aspect = width / height;
    sceneElements.camera.updateProjectionMatrix();
    sceneElements.renderer.setSize(width, height);
}

function setupPointerLock(domElement) {
    domElement.addEventListener('click', () => {
        domElement.requestPointerLock();
    });

    document.addEventListener('pointerlockchange', () => {
        if (document.pointerLockElement === domElement) {
            document.addEventListener('mousemove', onMouseMove, false);
        } else {
            document.removeEventListener('mousemove', onMouseMove, false);
        }
    });
}

function onMouseMove(event) {
    const camera = sceneElements.camera;
    if (document.pointerLockElement === sceneElements.renderer.domElement) {
        if (isWalkingOnXZ) {
            // Default x-z surface
            camera.rotation.y -= event.movementX * mouseSensitivity;
            camera.rotation.x -= event.movementY * mouseSensitivity;
            camera.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, camera.rotation.x));
        
        } else { 
            // Adjust for x-y surface

            camera.rotation.z -= event.movementX * mouseSensitivity;
            camera.rotation.x -= event.movementY * mouseSensitivity;
            camera.rotation.x = Math.max(0, Math.min(Math.PI , camera.rotation.x));



        }
    }
}

