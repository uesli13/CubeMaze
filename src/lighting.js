import * as THREE from 'three';

export function setupLighting(scene) {
    const sunlight = new THREE.DirectionalLight(0xffffff, 1.5);
    sunlight.position.set(0, 50, -50);
    sunlight.target.position.set(0, 27, -19);
    sunlight.castShadow = true;
    sunlight.shadow.mapSize.width = 2048;
    sunlight.shadow.mapSize.height = 2048;
    sunlight.shadow.camera.near = 1;
    sunlight.shadow.camera.far = 200;
    sunlight.shadow.camera.left = -50;
    sunlight.shadow.camera.right = 50;
    sunlight.shadow.camera.top = 50;
    sunlight.shadow.camera.bottom = -50;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(sunlight, sunlight.target, ambientLight);
}