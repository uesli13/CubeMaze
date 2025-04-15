import * as THREE from 'three';
import sceneElements from './sceneElements.js';
import { MAZE_SCALE } from './constants.js';
import { wallCoords } from './mazeData.js';
import{ updateCollisionBoxes } from './collision.js';


export function createPlaneBox(cubeSize = 1) {
    const cubeFaces = new THREE.Group();
    const faceGeometry = new THREE.PlaneGeometry(cubeSize, cubeSize);

    const faceColors = [
        0xff0000, 0x00ff00, 0x0000ff,
        0xffff00, 0xff00ff, 0x00ffff
    ];

    const faceConfigs = [
        { position: [0, 0, cubeSize / 2], rotation: new THREE.Euler(0, 0, 0) },
        { position: [0, 0, -cubeSize / 2], rotation: new THREE.Euler(0, Math.PI, 0) },
        { position: [cubeSize / 2, 0, 0], rotation: new THREE.Euler(0, Math.PI / 2, 0) },
        { position: [-cubeSize / 2, 0, 0], rotation: new THREE.Euler(0, -Math.PI / 2, 0) },
        { position: [0, cubeSize / 2, 0], rotation: new THREE.Euler(-Math.PI / 2, 0, 0) },
        { position: [0, -cubeSize / 2, 0], rotation: new THREE.Euler(Math.PI / 2, 0, 0) }
    ];

    faceConfigs.forEach((config, i) => {
        const material = new THREE.MeshPhongMaterial({
            color: faceColors[i],
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.7
        });
        const face = new THREE.Mesh(faceGeometry, material);
        face.position.set(...config.position);
        face.setRotationFromEuler(config.rotation);
        cubeFaces.add(face);
    });

    return cubeFaces;
}

export function createBox(size = 1, color = 0x00ff00) {
    const geometry = new THREE.BoxGeometry(size, size, size);
    const material = new THREE.MeshPhongMaterial({ color });
    const box = new THREE.Mesh(geometry, material);
    box.castShadow = true;
    box.receiveShadow = true;
    return box;
}

export function createWall(length) {
    const wallHeight = 3;
    const material = new THREE.MeshPhongMaterial({ color: 0x8B4513 });
    const geometry = new THREE.BoxGeometry(length, wallHeight, 1);
    const wall = new THREE.Mesh(geometry, material);
    wall.castShadow = true;
    wall.receiveShadow = true;
    wall.position.set(0, wallHeight / 2, 0);
    return wall;
}

export function createPlaneWall(size, texture) {
    const geometry = new THREE.PlaneGeometry(size, size);
    //const material = new THREE.MeshPhongMaterial({ color: 0x8B4513 });

    // const texture = new THREE.TextureLoader().load('assets/textures/Stylized_Wood_Planks_002_basecolor.png');
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;

    texture.repeat.set(10, 10);

    const material = new THREE.MeshPhongMaterial({ map: texture });

    const plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = 0.5;
    plane.castShadow = true;
    plane.receiveShadow = true;
    return plane;
}

// export function createMaze() {
//     const group = new THREE.Group();
//     const boxWidth = 1;
//     const boxHeight = 2;
//     const boxDepth = 1;
//     const boxGeometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
//     const textureLoader = new THREE.TextureLoader();
//     const texture = textureLoader.load('assets/textures/Stylized_Ice_001_normal.png');
//     const material = new THREE.MeshPhongMaterial({ map: texture });

//     const instancedMesh = new THREE.InstancedMesh(boxGeometry, material, wallCoords.length);
//     const dummy = new THREE.Object3D();

//     wallCoords.forEach((coord, i) => {
//         const scaledX = coord.x * MAZE_SCALE;
//         const scaledZ = coord.z * MAZE_SCALE;

//         dummy.position.set(scaledX, boxHeight/2, scaledZ);
//         dummy.scale.set(MAZE_SCALE, MAZE_SCALE, MAZE_SCALE);
//         dummy.updateMatrix();
//         instancedMesh.setMatrixAt(i, dummy.matrix);

//         const box = new THREE.Box3(
//             new THREE.Vector3(
//                 scaledX - 0.5 * MAZE_SCALE,
//                 -0.5 * MAZE_SCALE,
//                 scaledZ - 0.5 * MAZE_SCALE
//             ),
//             new THREE.Vector3(
//                 scaledX + 0.5 * MAZE_SCALE,
//                 2.5 * MAZE_SCALE,
//                 scaledZ + 0.5 * MAZE_SCALE
//             )
//         );
//         sceneElements.collidableObjects.push(box);
//     });

//     group.add(instancedMesh);



// // Assuming `group` is your THREE.Group object
// const box = new THREE.Box3().setFromObject(group); // create bounding box
// const size = new THREE.Vector3();
// box.getSize(size); // fills 'size' with width/height/depth of the group

// console.log("Group size:", size.x, size.y, size.z);

//     return group;
// }

export function createMaze(wallsTexrure) {
    const group = new THREE.Group();
    const boxWidth = 1;
    const boxHeight = 2;
    const boxDepth = 1;
    const boxGeometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
    // const textureLoader = new THREE.TextureLoader();
    // const texture = textureLoader.load('assets/textures/Water_001_COLOR.jpg');
    const material = new THREE.MeshPhongMaterial({ map: wallsTexrure });

    const instancedMesh = new THREE.InstancedMesh(boxGeometry, material, wallCoords.length);
    const dummy = new THREE.Object3D();

    wallCoords.forEach((coord, i) => {
        const scaledX = coord.x * MAZE_SCALE;
        const scaledZ = coord.z * MAZE_SCALE;

        dummy.position.set(scaledX, boxHeight / 2, scaledZ);
        dummy.scale.set(MAZE_SCALE, MAZE_SCALE, MAZE_SCALE);
        dummy.updateMatrix();
        instancedMesh.setMatrixAt(i, dummy.matrix);

        // const box = new THREE.Box3().setFromObject(dummy); // Create collision box
        // sceneElements.collidableObjects.push(box); // Add to collidable objects

        // Manually create a bounding box for each instance
        const box = new THREE.Box3().setFromCenterAndSize(
            new THREE.Vector3(scaledX, boxHeight / 2, scaledZ),
            new THREE.Vector3(boxWidth * MAZE_SCALE, boxHeight * MAZE_SCALE, boxDepth * MAZE_SCALE)
        );
        sceneElements.collidableObjects.push(box); // Add to collidable objects

    });

    group.add(instancedMesh);
    return group;
}




export function CreateFinalCube(){

    const group = new THREE.Group();


    const wallsTexrur_1 = new THREE.TextureLoader().load('assets/textures/Water_001_COLOR.jpg');

    const maze_1 = createMaze(wallsTexrur_1);
    maze_1.position.set(0, 0, 0);

    maze_1.updateMatrixWorld(true);
    updateCollisionBoxes(maze_1);


    const floorTexture = new THREE.TextureLoader().load('assets/textures/Stylized_Wood_Planks_002_basecolor.png');
    const plane_1 = createPlaneWall(26, floorTexture);
    plane_1.position.set(9.5, 0, -9.5);

    group.add(maze_1);
    group.add(plane_1);



    const wallsTexrur_2 = new THREE.TextureLoader().load('assets/textures/Lava_005_COLOR.jpg');

    const maze_2 = createMaze(wallsTexrur_2);
    maze_2.rotation.x = Math.PI/2
    maze_2.position.set(0, 0.5, -22.5);

    maze_2.updateMatrixWorld(true);
    updateCollisionBoxes(maze_2);

    const plane_2 = createPlaneWall(26, floorTexture);
    plane_2.position.set(9.5, 10, -22);
    plane_2.rotation.x = 0

    group.add(maze_2);
    group.add(plane_2);


    const wallsTexrur_3 = new THREE.TextureLoader().load('assets/textures/Lava_005_COLOR.jpg');

    const maze_3 = createMaze(wallsTexrur_3);
    maze_3.rotation.z = Math.PI/2
    maze_3.position.set(22.5, 0, 0);

    maze_3.updateMatrixWorld(true);
    updateCollisionBoxes(maze_3);

    const plane_3 = createPlaneWall(26,floorTexture);
    plane_3.position.set(22.5, 10, -9.5);
    plane_3.rotation.y = -Math.PI/2

    group.add(maze_3);
    group.add(plane_3);




    const maze_4 = createMaze(wallsTexrur_1);
    maze_4.rotation.z = Math.PI/2
    maze_4.position.set(-1.5, 0, 0);

    maze_4.updateMatrixWorld(true);
    updateCollisionBoxes(maze_4);

    const plane_4 = createPlaneWall(26,floorTexture);
    plane_4.position.set(-3.5,10,-9.5);
    plane_4.rotation.y = Math.PI/2

    group.add(maze_4);
    group.add(plane_4);




    const maze_5 = createMaze(wallsTexrur_1);
    maze_5.rotation.x = 0;
    maze_5.position.set(0, 20, 0);   

    maze_5.updateMatrixWorld(true);
    updateCollisionBoxes(maze_5);

    const plane_5 = createPlaneWall(26,floorTexture);
    plane_5.rotation.x = Math.PI/2;
    plane_5.position.set(9.5, 22, -9.5);

    group.add(maze_5);
    group.add(plane_5);




    const maze_6 = createMaze(wallsTexrur_2);
    maze_6.rotation.x = Math.PI/2;
    maze_6.position.set(0, 0, 1.5);   

    maze_6.updateMatrixWorld(true);
    updateCollisionBoxes(maze_6);

    const plane_6 = createPlaneWall(26, floorTexture);
    plane_6.rotation.x = Math.PI;
    plane_6.position.set(9.5, 9.5, 3.5);

    group.add(maze_6);
    group.add(plane_6);
    
    return group;

}

export function load3DObjects(sceneGraph) {

    // const maze = createMaze();
    // maze.position.set(0, 8, 0);
    // sceneGraph.add(maze);
    // maze.updateMatrixWorld(true);
    // updateCollisionBoxes(maze);

    // const plane = createPlaneWall(24);
    // plane.position.set(9.5, 0, -9.5);
    // sceneGraph.add(plane);



    const finalCube = CreateFinalCube();
    finalCube.position.set(0, 0, 0);
    sceneGraph.add(finalCube);
    

}
