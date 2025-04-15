import * as THREE from 'three';
import { MAZE_SCALE } from './constants.js';
import sceneElements from './sceneElements.js';

const cameraRadius = 0.1 * MAZE_SCALE;  // Reduced radius for narrower corridors
const cameraHeight = 1.6 * MAZE_SCALE; // Eye level height
const cameraHalfHeight = 0.1 * MAZE_SCALE; // For vertical collision checks
export { cameraHeight };



// export function checkCollisions(newPosition) {
//     // Create camera collision volume (cylinder shape)
//     const cameraCylinder = {
//         position: new THREE.Vector3(newPosition.x, newPosition.y, newPosition.z),
//         radius: cameraRadius,
//         halfHeight: cameraHalfHeight
//     };

//     return sceneElements.collidableObjects.some(wallBox => {
//         return cylinderBoxIntersect(cameraCylinder, wallBox);
//     });
// }
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






// export function cylinderBoxIntersect(cylinder, box){
//     // Find closest point on box to cylinder center
//     const closest = new THREE.Vector3();
//     closest.x = THREE.MathUtils.clamp(cylinder.position.x, box.min.x, box.max.x);
//     closest.y = THREE.MathUtils.clamp(cylinder.position.y, box.min.y, box.max.y);
//     closest.z = THREE.MathUtils.clamp(cylinder.position.z, box.min.z, box.max.z);

//     // Check vertical overlap
//     const verticalOverlap = Math.abs(closest.y - cylinder.position.y) < 
//                         (cylinder.halfHeight + (box.max.y - box.min.y)/2);

//     // Check horizontal distance
//     const horizontalDist = Math.sqrt(
//         (closest.x - cylinder.position.x) ** 2 +
//         (closest.z - cylinder.position.z) ** 2
//     );

//     return verticalOverlap && (horizontalDist < cylinder.radius);
// }
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







// export function adjustPosition(oldPos, newPos) {
//     const direction = new THREE.Vector3().subVectors(newPos, oldPos).normalize();
//     const testPos = oldPos.clone();
//     let safePos = oldPos.clone();
    
//     // Raycast check
//     const raycaster = new THREE.Raycaster(oldPos, direction);
//     const intersects = raycaster.intersectObjects(sceneElements.collidableObjects);
    
//     if(intersects.length > 0 && intersects[0].distance < this.cameraRadius) {
//         safePos.addScaledVector(
//             direction,
//             intersects[0].distance - this.cameraRadius
//         );
//         return safePos;
//     }
//     return newPos;
// }
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
            }
        }
    });

    // Append the new collision boxes to the existing ones
    sceneElements.collidableObjects.push(...collisionBoxes);

    console.log("Updated collision boxes:", collisionBoxes);
    console.log("sceneElements.collidableObjects:", sceneElements.collidableObjects);
}

