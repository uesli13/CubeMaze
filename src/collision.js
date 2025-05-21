import * as THREE from 'three';
import { MAZE_SCALE } from './constants.js';
import sceneElements from './sceneElements.js';

const cameraRadius = 0.1 * MAZE_SCALE;  // Reduced radius for narrower corridors
const cameraHeight = 1.6 * MAZE_SCALE; // Eye level height
const cameraHalfHeight = 0.1 * MAZE_SCALE; // For vertical collision checks
export { cameraHeight };


export function checkCollisions(newPosition) {
    // Create camera collision volume (sphere shape)
    const cameraSphere = {
        position: new THREE.Vector3(newPosition.x, newPosition.y, newPosition.z),
        radius: cameraRadius
    };

    return sceneElements.collidableObjects.some(wallBox => {
        return sphereBoxIntersect(cameraSphere, wallBox);
    });
}

export function sphereBoxIntersect(sphere, box) {
    // Find the closest point on the box to the sphere's center
    const closest = new THREE.Vector3();
    closest.x = THREE.MathUtils.clamp(sphere.position.x, box.min.x, box.max.x);
    closest.y = THREE.MathUtils.clamp(sphere.position.y, box.min.y, box.max.y);
    closest.z = THREE.MathUtils.clamp(sphere.position.z, box.min.z, box.max.z);

    // Calculate the distance between the sphere's center and the closest point
    const distance = Math.sqrt(
        (closest.x - sphere.position.x) ** 2 +
        (closest.y - sphere.position.y) ** 2 +
        (closest.z - sphere.position.z) ** 2
    );

    // Check if the distance is less than the sphere's radius
    return distance < sphere.radius;
}

export function adjustPosition(oldPos, newPos) {
    const direction = new THREE.Vector3().subVectors(newPos, oldPos).normalize();
    const safePos = oldPos.clone();

    // Raycast check
    const raycaster = new THREE.Raycaster(oldPos, direction);
    const intersects = raycaster.intersectObjects(sceneElements.collidableObjects);

    if (intersects.length > 0 && intersects[0].distance < cameraRadius) {
        safePos.addScaledVector(
            direction,
            intersects[0].distance - cameraRadius
        );
        return safePos;
    }
    return newPos;
}

export function updateCollisionBoxes(group) {
    const collisionBoxes = [];
    const dummy = new THREE.Object3D();

    // Remove previous collision boxes for this group
    if (sceneElements.collidableObjectsMap.has(group)) {
        const oldBoxes = sceneElements.collidableObjectsMap.get(group);
        oldBoxes.forEach(box => {
            // Remove any visual helpers from the scene
            const helper = box.helper;
            if (helper) {
                sceneElements.sceneGraph.remove(helper);
            }
        });

        // Remove the group from the map
        sceneElements.collidableObjectsMap.delete(group);
    }

    // Traverse the group and calculate new collision boxes
    group.traverse((child) => {
        if (child.isInstancedMesh) {
            const geometry = child.geometry;
            geometry.computeBoundingBox();
            const baseBox = geometry.boundingBox.clone();

            for (let i = 0; i < child.count; i++) {
                child.getMatrixAt(i, dummy.matrix);
                dummy.matrix.decompose(dummy.position, dummy.quaternion, dummy.scale);
                dummy.updateMatrixWorld(true);

                const worldMatrix = new THREE.Matrix4().multiplyMatrices(group.matrixWorld, dummy.matrix);
                const transformedBox = baseBox.clone().applyMatrix4(worldMatrix);

                collisionBoxes.push(transformedBox);

                // Visible helper for debugging
                const boxHelper = new THREE.Box3Helper(transformedBox, 0xff0000);
                sceneElements.sceneGraph.add(boxHelper);
                transformedBox.helper = boxHelper; // Attach the helper to the box for easy removal
            }
        }
    });

    // Update the map with the new collision boxes for this group
    sceneElements.collidableObjectsMap.set(group, collisionBoxes);

    // Update the global collidableObjects array
    sceneElements.collidableObjects = Array.from(sceneElements.collidableObjectsMap.values()).flat();
}

