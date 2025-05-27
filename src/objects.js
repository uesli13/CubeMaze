import * as THREE from 'three';
import { MAZE_SCALE } from './constants.js';
import { entryCoords, wallCoords_1, wallCoords_2, wallCoords_3, connector1_2_coords, connector2_3_coords, connector3_4_coords, connector4_5_coords,connector5_6_coords } from './mazeData.js';
import{ updateCollisionBoxes } from './collision.js';
import { textures } from './textures.js';

 function createPlaneWall(size, material) {
    const geometry = new THREE.PlaneGeometry(size, size);

    const plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = 0.5;
    plane.castShadow = true;
    plane.receiveShadow = true;
    return plane;
}

function createMaze(material, wallCoords, boxHeight=2) {
    const group = new THREE.Group();
    const boxWidth = 1;
    const boxDepth = 1;
    const boxGeometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

    const instancedMesh = new THREE.InstancedMesh(boxGeometry, material, wallCoords.length);
    const dummy = new THREE.Object3D();

    wallCoords.forEach((coord, i) => {
        const scaledX = coord.x * MAZE_SCALE;
        const scaledZ = coord.z * MAZE_SCALE;

        dummy.position.set(scaledX, boxHeight / 2, scaledZ);
        dummy.scale.set(MAZE_SCALE, MAZE_SCALE, MAZE_SCALE);
        dummy.updateMatrix();
        instancedMesh.setMatrixAt(i, dummy.matrix);
    });

    group.add(instancedMesh);
    return group;
}

function createPortal() {
  const portalGroup = new THREE.Group();
  const loader = new THREE.TextureLoader();

  // 1. Load your wood texture
  const woodTex = loader.load('assets/textures/wooden_garage_door_diff_2k.jpg');
  woodTex.encoding = THREE.sRGBEncoding;
  woodTex.wrapS = woodTex.wrapT = THREE.RepeatWrapping;
  woodTex.repeat.set(1, 1);

  // Create the door frame
  const frameGeometry = new THREE.BoxGeometry(4, 5, 0.3);
  const frameMaterial = new THREE.MeshStandardMaterial({ 
    color: 0x31201b,
    metalness: 0.0,
    roughness: 1.0
  });
  const frame = new THREE.Mesh(frameGeometry, frameMaterial);

  // Create a glimpse of the outside (behind the door)
  const backgroundGeometry = new THREE.PlaneGeometry(3.5, 4.5);
  const backgroundMaterial = new THREE.MeshBasicMaterial({
    color: 0x87CEEB,
    side: THREE.DoubleSide
  });
  const background = new THREE.Mesh(backgroundGeometry, backgroundMaterial);
  background.position.z = 0.1;

  // Create the door, using the wood texture
  const doorGeometry = new THREE.BoxGeometry(3.5, 4.5, 0.2);
  const doorMaterial = new THREE.MeshStandardMaterial({
    map:        woodTex,
    metalness:  0.0,
    roughness:  1.0,
    color:      0x654321 // Brown wood color
  });
  const door = new THREE.Mesh(doorGeometry, doorMaterial);
  door.position.z = 0.2;

  // Add door handle
  const handleGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.3, 8);
  const handleMaterial = new THREE.MeshStandardMaterial({ 
    color:     0xB87333,
    metalness: 0.8,
    roughness: 0.2
  });
  const handle = new THREE.Mesh(handleGeometry, handleMaterial);
  handle.rotation.x = Math.PI / 2;
  handle.position.set(1.2, 0, 0.3);
  door.add(handle);

  // Assemble
  portalGroup.add(frame, background, door);
  portalGroup.userData.door = door;
  return portalGroup;
}


function createMap() {
    const global_group = new THREE.Group();

    // Entry
    const entry_walls = createMaze(textures.tileMaterial_029, entryCoords, 2);
    entry_walls.position.set(0, 0, 0);
    entry_walls.updateMatrixWorld(true);
    updateCollisionBoxes(entry_walls);

    //Side 1
    const side_1 = new THREE.Group();

    side_1.updateMatrixWorld(true);
    updateCollisionBoxes(side_1);

    const maze_1 = createMaze(textures.tileMaterial_029, wallCoords_1);

    maze_1.position.set(0, 0, 0);

    const plane_1 = createPlaneWall(27, textures.woodFloorMaterial_017);
    plane_1.position.set(9.5, 0, -9.5);

    side_1.add(maze_1);
    side_1.add(plane_1);

    side_1.updateMatrixWorld(true);
    updateCollisionBoxes(side_1);




    //side 1 to side 2 connection
    const connection_1 = createMaze(textures.tileMaterial_029, connector1_2_coords,  3.5);
    connection_1.position.set(0, 0, 0);
    
    connection_1.updateMatrixWorld(true);
    updateCollisionBoxes(connection_1);





    // //Side 2
    const side_2 = new THREE.Group();

    side_2.updateMatrixWorld(true);
    updateCollisionBoxes(side_2);    

    const maze_2 = createMaze(textures.tileMaterial_101, wallCoords_2);
    maze_2.position.set(0, 0, 0);

    const plane_2 = createPlaneWall(27, textures.PavingStonesMaterial_126A);
    plane_2.position.set(9.5, 0, -9.5);

    side_2.add(maze_2);
    side_2.add(plane_2);

    side_2.position.set(0, 0, 0);
    side_2.rotation.x = Math.PI/2;
    side_2.rotation.y = Math.PI/2;
    side_2.position.set(19, 4, -23);

    side_2.updateMatrixWorld(true);
    updateCollisionBoxes(side_2);


    //side 2 to side 3 connection
    const connection_2 = createMaze(textures.tileMaterial_101, connector2_3_coords,  3.5);

    connection_2.position.set(0, 0, 0);
    connection_2.rotation.x = Math.PI/2;
    connection_2.position.set(-4, 21, -23);

    connection_2.updateMatrixWorld(true);
    updateCollisionBoxes(connection_2);


    //Side 3
    const side_3 = new THREE.Group();
    side_3.updateMatrixWorld(true);
    updateCollisionBoxes(side_3);

    const maze_3 = createMaze(textures.DiamondPlateTexture_008D, wallCoords_3);
    maze_3.position.set(0, 0, 0);

    const plane_3 = createPlaneWall(27, textures.rubberMaterial_004);
    plane_3.position.set(9.5, 0, -9.5);

    side_3.add(maze_3);
    side_3.add(plane_3);

    // side_3.position.set(0, 0, 0);
    side_3.rotation.x = Math.PI/2;
    side_3.rotation.z =- Math.PI/2;
    side_3.position.set(-4, 4, 0);

    side_3.updateMatrixWorld(true);
    updateCollisionBoxes(side_3);


    //side 3 to side 4 connection
    const connection_3 = createMaze(textures.DiamondPlateTexture_008D, connector3_4_coords,  3.5);

    connection_3.rotation.z = -Math.PI/2;
    connection_3.position.set(-4, 11, 5);


    connection_3.updateMatrixWorld(true);
    updateCollisionBoxes(connection_3);


    //Side 4
    const side_4 = new THREE.Group();
    side_4.updateMatrixWorld(true);
    updateCollisionBoxes(side_4);

    const maze_4 = createMaze(textures.tileMaterial_074, wallCoords_1);
    maze_4.position.set(0, 0, 0);

    const plane_4 = createPlaneWall(27, textures.tileMaterial_081);
    plane_4.position.set(9.5, 0, -9.5);

    side_4.add(maze_4);
    side_4.add(plane_4);

    side_4.rotation.x = Math.PI/2;
    side_4.rotation.y = -Math.PI/2 ;
    side_4.rotation.z = Math.PI;
    side_4.position.set(0,4,4 );

    side_4.updateMatrixWorld(true);
    updateCollisionBoxes(side_4);




    //side 4 to side 5 connection
    const connection_4 = createMaze(textures.tileMaterial_074, connector4_5_coords,  3.5);

    connection_4.rotation.z = Math.PI/2;
    connection_4.position.set(23, 4, 1);

    connection_4.updateMatrixWorld(true);
    updateCollisionBoxes(connection_4);





    //Side 5
    const side_5 = new THREE.Group();
    side_5.updateMatrixWorld(true);
    updateCollisionBoxes(side_5);

    const maze_5 = createMaze(textures.tileMaterial_075, wallCoords_2);
    maze_5.position.set(0, 0, 0);

    const plane_5 = createPlaneWall(27, textures.woodFloorMaterial_048);
    plane_5.position.set(9.5, 0, -9.5);

    side_5.add(maze_5);
    side_5.add(plane_5);

    side_5.rotation.z = Math.PI/2;
    side_5.rotation.x = Math.PI;
    side_5.position.set(23, 23, -19);
    
    side_5.updateMatrixWorld(true);
    updateCollisionBoxes(side_5);



    
    //side 5 to side 6 connection
    const connection_5 = createMaze(textures.tileMaterial_075, connector5_6_coords,  2);

    connection_5.rotation.z  = Math.PI/2;
    connection_5.rotation.x = Math.PI/2;
    connection_5.position.set(23, 28, -11);

    connection_5.updateMatrixWorld(true);
    updateCollisionBoxes(connection_5);





    //Side 6
    const side_6 = new THREE.Group();
    side_6.updateMatrixWorld(true);
    updateCollisionBoxes(side_6);

    const plane_6 = createPlaneWall(27, textures.metalWalkwayMaterial_010);
    plane_6.position.set(9.5, 0, -9.5);
    
    const portal = createPortal();
    portal.scale.set(0.5, 0.5, 0.5); // Scale down the portal
    portal.position.set(-4, 1.5, -9.5); // Adjust height to 3 units
    portal.rotation.x = Math.PI;
    portal.rotation.y = Math.PI/2;

    side_6.add(plane_6);
    side_6.add(portal);

    side_6.rotation.x = Math.PI;
    side_6.position.set(0, 27, -19);




    
    // add all the groups to the global group
    global_group.add(side_1);
    global_group.add(side_2);
    global_group.add(side_3);
    global_group.add(side_4);
    global_group.add(side_5);
    global_group.add(side_6);
    global_group.add(connection_1);
    global_group.add(connection_2);
    global_group.add(connection_3);
    global_group.add(connection_4);
    global_group.add(connection_5);
    global_group.add(entry_walls);

    return global_group;
}

export function load3DObjects(sceneGraph) {
    const map = createMap();
    sceneGraph.add(map);
}