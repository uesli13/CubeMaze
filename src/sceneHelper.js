import * as THREE from 'three';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
import sceneElements from './sceneElements.js';
import { mouseSensitivity } from './constants.js';
import { MAZE_SCALE } from './constants.js';
import { cubeFaces, currentFace }  from './controls.js';

export function initEmptyScene() {
    // Scene
    sceneElements.sceneGraph = new THREE.Scene();

    // Load HDR background
    const loader = new RGBELoader();
    loader.load('assets/hdri/sky.hdr', function(texture) {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        sceneElements.sceneGraph.background = texture;
        sceneElements.sceneGraph.environment = texture;
    });

    // Camera
    const width = window.innerWidth;
    const height = window.innerHeight;
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.01, 1000);
    camera.position.set(5 * MAZE_SCALE, 1.5 * MAZE_SCALE, 3);
    camera.rotation.order = 'YXZ';

    sceneElements.camera = camera;

    // Lights
    // Ambient light (reduced intensity for a darker interior)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2); // Reduced intensity
    sceneElements.sceneGraph.add(ambientLight);

    // Directional light (sunlight coming from above)
    const sunlight = new THREE.DirectionalLight(0xffffff, 1.0); // Bright sunlight
    sunlight.position.set(0, 50, 0); // Position above the cube
    sunlight.castShadow = true;
    sunlight.shadow.mapSize.width = 2048;
    sunlight.shadow.mapSize.height = 2048;
    sunlight.shadow.camera.near = 1;
    sunlight.shadow.camera.far = 100;
    sunlight.shadow.camera.left = -50;
    sunlight.shadow.camera.right = 50;
    sunlight.shadow.camera.top = 50;
    sunlight.shadow.camera.bottom = -50;
    sceneElements.sceneGraph.add(sunlight);

    // Spotlight to simulate light passing through the semi-transparent top face
    const topLight = new THREE.SpotLight(0xffffff, 0.8, 100, Math.PI / 4, 0.5, 2);
    topLight.position.set(0, 30, 0); // Position above the top face
    topLight.target.position.set(0, 0, 0); // Pointing to the center of the cube
    topLight.castShadow = true;
    topLight.shadow.mapSize.width = 1024;
    topLight.shadow.mapSize.height = 1024;
    sceneElements.sceneGraph.add(topLight);
    sceneElements.sceneGraph.add(topLight.target);

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

    const sensitivity = mouseSensitivity;

    // If game is won, use bottom-face-like controls
    if (sceneElements.isGameWon) {
        camera.rotation.order = 'YXZ';
        camera.rotation.y -= event.movementX * sensitivity;
        camera.rotation.x -= event.movementY * sensitivity;
        camera.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, camera.rotation.x));
        return;
    }

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
