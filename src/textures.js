import * as THREE from 'three';

const textureLoader = new THREE.TextureLoader();

export const textures = {
    // Tiles 101
    tileMaterial_101: new THREE.MeshStandardMaterial({
        map: textureLoader.load('assets/textures/Tiles101/Tiles101_2K-JPG_Color.jpg'),
        normalMap: textureLoader.load('assets/textures/Tiles101/Tiles101_2K-JPG_NormalGL.jpg'),
        roughnessMap: textureLoader.load('assets/textures/Tiles101/Tiles101_2K-JPG_Roughness.jpg'),
        aoMap: textureLoader.load('assets/textures/Tiles101/Tiles101_2K-JPG_AmbientOcclusion.jpg'),
        metalness: 0.0,
        roughness: 1.0,
        color: new THREE.Color(0x888888),
    }),

    // Paving Stones 126A
    PavingStonesMaterial_126A: new THREE.MeshStandardMaterial({
        map: textureLoader.load('assets/textures/PavingStones126A/PavingStones126A_2K-JPG_Color.jpg'),
        normalMap: textureLoader.load('assets/textures/PavingStones126A/PavingStones126A_2K-JPG_NormalGL.jpg'),
        roughnessMap: textureLoader.load('assets/textures/PavingStones126A/PavingStones126A_2K-JPG_Roughness.jpg'),
        aoMap: textureLoader.load('assets/textures/PavingStones126A/PavingStones126A_2K-JPG_AmbientOcclusion.jpg'),
        metalness: 0.0,
        roughness: 1.0,
    }),

    // Tiles 074
    tileMaterial_074: new THREE.MeshStandardMaterial({
        map: textureLoader.load('assets/textures/Tiles074/Tiles074_2K-JPG_Color.jpg'),
        normalMap: textureLoader.load('assets/textures/Tiles074/Tiles074_2K-JPG_NormalGL.jpg'),
        roughnessMap: textureLoader.load('assets/textures/Tiles074/Tiles074_2K-JPG_Roughness.jpg'),
        metalness: 0.0,
        roughness: 1.0,
        color: new THREE.Color(0x888888),
    }),

    // Tiles 081
    tileMaterial_081: new THREE.MeshStandardMaterial({
        map: textureLoader.load('assets/textures/Tiles081/Tiles081_2K-JPG_Color.jpg'),
        normalMap: textureLoader.load('assets/textures/Tiles081/Tiles081_2K-JPG_NormalGL.jpg'),
        roughnessMap: textureLoader.load('assets/textures/Tiles081/Tiles081_2K-JPG_Roughness.jpg'),
        metalness: 0.0,
        roughness: 1.0,
        color: new THREE.Color(0x888888),
    }),

    // Diamond Plate 008D
    DiamondPlateTexture_008D: new THREE.MeshStandardMaterial({
        map: textureLoader.load('assets/textures/DiamondPlate008D/DiamondPlate008D_2K-JPG_Color.jpg'),
        normalMap: textureLoader.load('assets/textures/DiamondPlate008D/DiamondPlate008D_2K-JPG_NormalGL.jpg'),
        roughnessMap: textureLoader.load('assets/textures/DiamondPlate008D/DiamondPlate008D_2K-JPG_Roughness.jpg'),
        aoMap: textureLoader.load('assets/textures/DiamondPlate008D/DiamondPlate008D_2K-JPG_AmbientOcclusion.jpg'),
        metalness: 0.0,
        roughness: 1.0,
        color: new THREE.Color(0x888888),
    }),

    // Rubber 004
    rubberMaterial_004: new THREE.MeshStandardMaterial({
        map: textureLoader.load('assets/textures/Rubber004/Rubber004_2K-JPG_Color.jpg'),
        normalMap: textureLoader.load('assets/textures/Rubber004/Rubber004_2K-JPG_NormalGL.jpg'),
        roughnessMap: textureLoader.load('assets/textures/Rubber004/Rubber004_2K-JPG_Roughness.jpg'),
        metalness: 0.0,
        roughness: 1.0,
        color: new THREE.Color(0x888888),
    }),

    // Wood Floor 017
    woodFloorMaterial_017: new THREE.MeshStandardMaterial({
        map: textureLoader.load('assets/textures/WoodFloor017/WoodFloor017_2K-JPG_Color.jpg'),
        normalMap: textureLoader.load('assets/textures/WoodFloor017/WoodFloor017_2K-JPG_NormalGL.jpg'),
        roughnessMap: textureLoader.load('assets/textures/WoodFloor017/WoodFloor017_2K-JPG_Roughness.jpg'),
        aoMap: textureLoader.load('assets/textures/WoodFloor017/WoodFloor017_2K-JPG_AmbientOcclusion.jpg'),
        metalness: 0.0,
        roughness: 1.0,
        color: new THREE.Color(0x888888),
    }),
    
    // Tiles 075
    tileMaterial_075: new THREE.MeshStandardMaterial({
        map: textureLoader.load('assets/textures/Tiles075/Tiles075_2K-JPG_Color.jpg'),
        normalMap: textureLoader.load('assets/textures/Tiles075/Tiles075_2K-JPG_NormalGL.jpg'),
        roughnessMap: textureLoader.load('assets/textures/Tiles075/Tiles075_2K-JPG_Roughness.jpg'),
        metalness: 0.0,
        roughness: 1.0,
        // color: new THREE.Color(0x888888),
    }),

    // Tiles 029
    tileMaterial_029: new THREE.MeshStandardMaterial({
        map: textureLoader.load('assets/textures/Tiles029/Tiles029_2K-JPG_Color.jpg'),
        normalMap: textureLoader.load('assets/textures/Tiles029/Tiles029_2K-JPG_NormalGL.jpg'),
        roughnessMap: textureLoader.load('assets/textures/Tiles029/Tiles029_2K-JPG_Roughness.jpg'),
        metalness: 0.0,
        roughness: 1.0,
        color: new THREE.Color(0x888888),
    }),

    // WoodFloor048
    woodFloorMaterial_048: new THREE.MeshStandardMaterial({
        map: textureLoader.load('assets/textures/WoodFloor048/WoodFloor048_2K-JPG_Color.jpg'),
        normalMap: textureLoader.load('assets/textures/WoodFloor048/WoodFloor048_2K-JPG_NormalGL.jpg'),
        roughnessMap: textureLoader.load('assets/textures/WoodFloor048/WoodFloor048_2K-JPG_Roughness.jpg'),
        metalness: 0.0,
        roughness: 1.0,
        color: new THREE.Color(0x888888),
    }),

    // MetalWalkway010
    metalWalkwayMaterial_010: new THREE.MeshStandardMaterial({
        map: textureLoader.load('assets/textures/MetalWalkway010/MetalWalkway010_2K-JPG_Color.jpg'),
        normalMap: textureLoader.load('assets/textures/MetalWalkway010/MetalWalkway010_2K-JPG_NormalGL.jpg'),
        roughnessMap: textureLoader.load('assets/textures/MetalWalkway010/MetalWalkway010_2K-JPG_Roughness.jpg'),
        alphaMap: textureLoader.load('assets/textures/MetalWalkway010/MetalWalkway010_2K-JPG_Opacity.jpg'),
        transparent:  true,
        metalness: 0.0, 
        roughness: 1.0,
        color: new THREE.Color(0x888888),
    }),

    // wooden_garage_door
    



};

// Configure texture settings (wrapping, repeating)
Object.values(textures).forEach(material => {
    if (material.map) {
        material.map.wrapS = THREE.RepeatWrapping;
        material.map.wrapT = THREE.RepeatWrapping;
    }
    if (material.normalMap) {
        material.normalMap.wrapS = THREE.RepeatWrapping;
        material.normalMap.wrapT = THREE.RepeatWrapping;
    }
});

function configureMaterial(material, repeatX, repeatY) {
    if (material.map) {
        material.map.wrapS = THREE.RepeatWrapping;
        material.map.wrapT = THREE.RepeatWrapping;
        material.map.repeat.set(repeatX, repeatY);
        material.map.encoding = THREE.sRGBEncoding;
    }
    if (material.normalMap) {
        material.normalMap.wrapS = THREE.RepeatWrapping;
        material.normalMap.wrapT = THREE.RepeatWrapping;
        material.normalMap.repeat.set(repeatX, repeatY);
    }
    if (material.roughnessMap) {
        material.roughnessMap.wrapS = THREE.RepeatWrapping;
        material.roughnessMap.wrapT = THREE.RepeatWrapping;
        material.roughnessMap.repeat.set(repeatX, repeatY);
    }
    if (material.aoMap) {
        material.aoMap.wrapS = THREE.RepeatWrapping;
        material.aoMap.wrapT = THREE.RepeatWrapping;
        material.aoMap.repeat.set(repeatX, repeatY);
    }
    if (material.alphaMap) {
        material.alphaMap.wrapS = THREE.RepeatWrapping;
        material.alphaMap.wrapT = THREE.RepeatWrapping;
        material.alphaMap.repeat.set(repeatX, repeatY);
    }
}

configureMaterial(textures.tileMaterial_101, 0.25, 0.5);
configureMaterial(textures.PavingStonesMaterial_126A, 6, 6);
configureMaterial(textures.tileMaterial_074, 1, 2);
configureMaterial(textures.tileMaterial_081, 20, 20);
configureMaterial(textures.DiamondPlateTexture_008D, 1, 2);
configureMaterial(textures.rubberMaterial_004, 10, 10);
configureMaterial(textures.tileMaterial_075, 0.5, 1);
configureMaterial(textures.tileMaterial_029, 1, 1);
configureMaterial(textures.woodFloorMaterial_017, 5, 5);
configureMaterial(textures.woodFloorMaterial_048, 5, 5);
configureMaterial(textures.metalWalkwayMaterial_010, 10, 10);