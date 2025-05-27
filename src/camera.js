import * as THREE from 'three';

export function setupCamera(width, height) {
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.01, 1000);
    camera.position.set(5 , 1.5 , 3);
    camera.rotation.order = 'YXZ';
    return camera;
}