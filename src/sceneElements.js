const sceneElements = {
    sceneGraph: null,
    // camera: null,
    // control: null,
    renderer: null,
    collidableObjects: [],
    collidableObjectsMap: new Map(),
    BOUNDARIES: {
    x: { min: -3.5, max: 22.5 },
    y: { min: 0.5, max: 26.5 },
    z: { min: -22.5, max: 3.5 },},
};

export default sceneElements;
