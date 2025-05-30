import * as THREE from 'three';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
import sceneElements from './sceneElements.js';
import { currentFace }  from './controls.js';
import { setupCamera } from './camera.js';
import { setupLighting } from './lighting.js'; 
export function initEmptyScene() {
    // Scene
    sceneElements.sceneGraph = new THREE.Scene();

    // Load HDR background
    const loader = new RGBELoader();
    loader.load('assets/hdri/sky.hdr', function(texture) {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        sceneElements.sceneGraph.background = texture;
        sceneElements.sceneGraph.environment = texture;
        sceneElements.sceneGraph.environmentIntensity = 0.8; // Adjust as needed
    });

    // Camera
    const width = window.innerWidth;
    const height = window.innerHeight;
    sceneElements.camera = setupCamera(width, height ,1);

    // Lights
    setupLighting(sceneElements.sceneGraph);


    
    // Renderer settings
    const renderer = new THREE.WebGLRenderer({ 
        antialias: true,
        powerPreference: "high-performance"
    });

    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
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
    if (document.pointerLockElement !== sceneElements.renderer.domElement) return;
    
    const sensitivity = 0.002;

    // If game is won, use bottom-face-like controls
    if (sceneElements.isGameWon) {
        camera.rotation.order = 'YXZ';
        camera.rotation.y -= event.movementX * sensitivity;
        camera.rotation.x -= event.movementY * sensitivity;
        camera.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, camera.rotation.x));
        return;
    }

    // Handle camera rotation based on the current face
    switch (currentFace) {
        case 'bottom':
            camera.rotation.order = 'YXZ';

            camera.rotation.y -= event.movementX * sensitivity;
            camera.rotation.x -= event.movementY * sensitivity;
            camera.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, camera.rotation.x));
            break;

        case 'front':
            camera.rotation.order = 'YZX';
            camera.rotation.z += -event.movementX * sensitivity;
            camera.rotation.x -= event.movementY * sensitivity;
            camera.rotation.x = Math.max(0.01, Math.min(Math.PI, camera.rotation.x));
            break;

        case 'left':
            camera.rotation.order = 'XYZ';
            camera.rotation.x += -event.movementX * sensitivity;
            camera.rotation.y -= event.movementY * sensitivity;
            camera.rotation.y = Math.max(Math.PI/2, Math.min(3*Math.PI/2, camera.rotation.y));
            break;

        case 'back':
            camera.rotation.order = 'YZX';
            camera.rotation.z -= -event.movementX * sensitivity;
            camera.rotation.x -= event.movementY * sensitivity;
            camera.rotation.x = Math.max(-Math.PI, Math.min(0.01, camera.rotation.x));
            break;

        case 'right':
            camera.rotation.order = 'XYZ';
            camera.rotation.x -= -event.movementX * sensitivity;
            camera.rotation.y += event.movementY * sensitivity;
            camera.rotation.y = Math.max(Math.PI/2, Math.min(3*Math.PI/2, camera.rotation.y));
            break;

        case 'top':
            camera.rotation.order = 'YXZ';

            camera.rotation.y += event.movementX * sensitivity;
            camera.rotation.x -= event.movementY * sensitivity;
            camera.rotation.x = Math.max(Math.PI/2, Math.min(3*Math.PI/2, camera.rotation.x));
            break;
    }
}
