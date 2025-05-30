// Coordinates all the walls and connectors in the maze

export const entryCoords = [
    { x: 3, y: 0, z: 1 },
    { x: 3, y: 0, z: 2 },
    { x: 3, y: 0, z: 3 },
    { x: 4, y: 0, z: 4 },
    { x: 5, y: 0, z: 4 },
    { x: 6, y: 0, z: 4 },
    { x: 7, y: 0, z: 3 },
    { x: 7, y: 0, z: 2 },
    { x: 7, y: 0, z: 1 },
]
export const wallCoords_1 = [
    //wall_1
    { x:0 , y:0 , z:0  },
    { x:0 , y:0 , z:-1  },
    { x:0 , y:0 , z:-2  },
    { x:0 , y:0 , z:-3  },
    { x:0 , y:0 , z:-4  },
    { x:0 , y:0 , z:-5  },
    { x:0 , y:0 , z:-6  },
    { x:0 , y:0 , z:-7  },
    { x:0 , y:0 , z:-8  },
    { x:0 , y:0 , z:-9  },
    { x:0 , y:0 , z:-10 },
    { x:0 , y:0 , z:-11 },
    { x:0 , y:0 , z:-12 },
    { x:0 , y:0 , z:-13 },
    { x:0 , y:0 , z:-14 },
    { x:0 , y:0 , z:-15 },
    { x:0 , y:0 , z:-16 },
    { x:0 , y:0 , z:-17 },
    { x:0 , y:0 , z:-18 },
    { x:0 , y:0 , z:-19 },
    //wall_2
    { x:1, y:0 , z:0 },
    { x:2, y:0 , z:0 },
    { x:3, y:0 , z:0 },
    { x:4, y:0 , z:0 },
    // { x:5, y:0 , z:0 },
    { x:6, y:0 , z:0 },
    { x:7, y:0 , z:0 },
    { x:8, y:0 , z:0 },
    { x:9, y:0 , z:0 },
    { x:10, y:0 , z:0 },
    { x:11, y:0 , z:0 },
    { x:12, y:0 , z:0 },
    { x:13, y:0 , z:0 },
    { x:14, y:0 , z:0 },
    { x:15, y:0 , z:0 },
    { x:16, y:0 , z:0 },
    { x:17, y:0 , z:0 },
    { x:18, y:0 , z:0 },
    { x:19 , y:0 , z:0 },
    //wall_3
    { x:1, y:0 , z:-19 },
    { x:2, y:0 , z:-19 },
    { x:3, y:0 , z:-19 },
    { x:4, y:0 , z:-19 },
    { x:5, y:0 , z:-19 },
    { x:6, y:0 , z:-19 },
    { x:7, y:0 , z:-19 },
    { x:8, y:0 , z:-19 },
    { x:9, y:0 , z:-19 },
    { x:10, y:0 , z:-19 },
    { x:11, y:0 , z:-19 },
    { x:12, y:0 , z:-19 },
    { x:13, y:0 , z:-19 },
    { x:14, y:0 , z:-19 },
    // { x:15, y:0 , z:-19 },
    { x:16, y:0 , z:-19 },
    { x:17, y:0 , z:-19 },
    { x:18, y:0 , z:-19 },
    { x:19, y:0 , z:-19 },
    //wall_4
    { x:19, y:0 , z:-1},
    { x:19, y:0 , z:-2 },
    { x:19, y:0 , z:-3 },
    { x:19, y:0 , z:-4 },
    { x:19, y:0 , z:-5 },
    { x:19, y:0 , z:-6 },
    { x:19, y:0 , z:-7 },
    { x:19, y:0 , z:-8 },
    { x:19, y:0 , z:-9 },
    { x:19, y:0 , z:-10 },
    { x:19, y:0 , z:-11},
    { x:19, y:0 , z:-12 },
    { x:19, y:0 , z:-13 },
    { x:19, y:0 , z:-14 },
    { x:19, y:0 , z:-15 },
    { x:19, y:0 , z:-16 },
    { x:19, y:0 , z:-17 },
    { x:19, y:0 , z:-18 },
    { x:19, y:0 , z:-19 }, 
    //wall_5
    { x:2 , y:0 , z:-3 },
    { x:2 , y:0 , z:-4 },
    { x:2 , y:0 , z:-5 },
    { x:2 , y:0 , z:-6 },
    { x:2 , y:0 , z:-7 },
    { x:2 , y:0 , z:-8 },
    { x:2 , y:0 , z:-9 },
    { x:1 , y:0 , z:-9 },
    //wall_6
    { x:4 , y:0 , z:-1 },
    { x:4 , y:0 , z:-2 },
    //wall_7
    { x:6 , y:0 , z:-1 },
    { x:6 , y:0 , z:-2 },
    { x:6 , y:0 , z:-3 },
    { x:6 , y:0 , z:-4 },
    // { x:5 , y:0 , z:-4 },
    { x:7 , y:0 , z:-4 },
    { x:8 , y:0 , z:-4 },
    { x:8 , y:0 , z:-3 },
    { x:8 , y:0 , z:-2 },
    { x:9 , y:0 , z:-2 },
    { x:10 , y:0 , z:-2 },
    { x:11 , y:0 , z:-2 },
    { x:12 , y:0 , z:-2 },
    //wall_8
    { x:15 , y:0 , z:-1 },
    { x:15 , y:0 , z:-2 },
    { x:15 , y:0 , z:-3 },
    { x:15 , y:0 , z:-4 },
    { x:15 , y:0 , z:-5 },
    { x:15 , y:0 , z:-6 },
    { x:16 , y:0 , z:-6 },
    { x:17 , y:0 , z:-6 },
    { x:17 , y:0 , z:-5 },
    { x:17 , y:0 , z:-4 },
    { x:17 , y:0 , z:-3 },
    //wall_9
    { x:1 , y:0 , z:-13 },
    { x:2 , y:0 , z:-13 },
    //wall_10
    { x:1 , y:0 , z:-15 },
    { x:2 , y:0 , z:-15 },
    { x:3 , y:0 , z:-15 },
    { x:4 , y:0 , z:-15 },
    { x:4 , y:0 , z:-14 },
    { x:4 , y:0 , z:-13 },
    { x:4 , y:0 , z:-12 },
    { x:4 , y:0 , z:-11 },
    { x:4 , y:0 , z:-10 },
    { x:4 , y:0 , z:-9 },
    { x:3 , y:0 , z:-11 },
    { x:2 , y:0 , z:-11 },
    //wall_11
    { x:5 , y:0 , z:-13 },
    { x:6 , y:0 , z:-13 },
    { x:6 , y:0 , z:-12 },
    { x:6 , y:0 , z:-11 },
    { x:6 , y:0 , z:-10 },
    { x:6 , y:0 , z:-9 },
    { x:6 , y:0 , z:-8 },
    { x:6 , y:0 , z:-7 },
    { x:5 , y:0 , z:-7 },
    { x:7 , y:0 , z:-7 },
    { x:8 , y:0 , z:-7 },
    { x:9 , y:0 , z:-7 },
    { x:10 , y:0 , z:-7 },
    { x:10 , y:0 , z:-8 },
    { x:7 , y:0 , z:-11 },
    { x:8 , y:0 , z:-11 },
    { x:9 , y:0 , z:-11 },
    { x:10 , y:0 , z:-11 },
    { x:11 , y:0 , z:-11 },
    { x:8 , y:0 , z:-10 },
    { x:8 , y:0 , z:-9 },
    { x:12 , y:0 , z:-10 },
    { x:12 , y:0 , z:-9 },
    { x:12 , y:0 , z:-8 },
    { x:12 , y:0 , z:-7 },
    { x:12 , y:0 , z:-6 },
    { x:12 , y:0 , z:-5 },
    { x:11 , y:0 , z:-5 },
    { x:10 , y:0 , z:-5 },  
    { x:13 , y:0 , z:-9 },
    { x:14 , y:0 , z:-9 }, 
    //wall_12
    { x:4 , y:0 , z:-18 },
    { x:3 , y:0 , z:-17 },
    { x:4 , y:0 , z:-17 },
    { x:5 , y:0 , z:-17 }, 
    { x:6 , y:0 , z:-17 },
    { x:6 , y:0 , z:-16 },
    { x:6 , y:0 , z:-15 },
    { x:7 , y:0 , z:-15 },
    { x:8 , y:0 , z:-14 },
    { x:8 , y:0 , z:-13 },
    //wall_13
    { x:9 , y:0 , z:-17 },
    { x:10 , y:0 , z:-17 },
    { x:11 , y:0 , z:-17 },
    { x:12 , y:0 , z:-17 },
    { x:13 , y:0 , z:-17 },
    { x:14 , y:0 , z:-17 },
    { x:14 , y:0 , z:-18 },
    //wall_14
    { x:18 , y:0 , z:-9 },
    { x:17 , y:0 , z:-9 },
    { x:16 , y:0 , z:-9 },
    { x:16 , y:0 , z:-10 },
    { x:16 , y:0 , z:-11 },
    { x:15 , y:0 , z:-11 },
    { x:14 , y:0 , z:-11 },
    { x:14 , y:0 , z:-12 },
    { x:14 , y:0 , z:-13 },
    { x:13 , y:0 , z:-13 },
    { x:12 , y:0 , z:-13 },
    { x:11 , y:0 , z:-13 },
    { x:11 , y:0 , z:-14 },
    { x:11 , y:0 , z:-15 },
    { x:12 , y:0 , z:-15 },
    { x:13 , y:0 , z:-15 },
    { x:14 , y:0 , z:-15 },
    { x:15 , y:0 , z:-15 },
    { x:16 , y:0 , z:-15 },
    //wall_15
    { x:16 , y:0 , z:-17 },
    { x:16 , y:0 , z:-18 },
    //wall_16
    { x:17 , y:0 , z:-13 },
    { x:18 , y:0 , z:-13 },
];

export const wallCoords_2 = [
    //wall_1
    { x:0 , y:0 , z:0 },
    { x:1 , y:0 , z:0 },
    { x:2 , y:0 , z:0 },
    { x:3 , y:0 , z:0 },
    { x:4 , y:0 , z:0 },
    { x:5 , y:0 , z:0 },
    { x:6 , y:0 , z:0 },
    { x:7 , y:0 , z:0 },
    { x:8 , y:0 , z:0 },
    { x:9 , y:0 , z:0 },
    { x:10 , y:0 , z:0 },
    { x:11, y:0 , z:0 },
    { x:12 , y:0 , z:0 },
    { x:13 , y:0 , z:0 },
    { x:14 , y:0 , z:0 },
    { x:15 , y:0 , z:0 },
    { x:16 , y:0 , z:0 },
    { x:17 , y:0 , z:0 },
    { x:18 , y:0 , z:0 },
    { x:19 , y:0 , z:0 },

    //wall_2
    { x:0 , y:0 , z:-1 },
    { x:0 , y:0 , z:-2 },
    { x:0 , y:0 , z:-3 },
    { x:0 , y:0 , z:-4 },
    { x:0 , y:0 , z:-5 },
    { x:0 , y:0 , z:-6 },
    { x:0 , y:0 , z:-7 },
    { x:0 , y:0 , z:-8 },
    { x:0 , y:0 , z:-11},
    { x:0 , y:0 , z:-12},
    { x:0 , y:0 , z:-13},
    { x:0 , y:0 , z:-14},
    { x:0 , y:0 , z:-15},
    { x:0 , y:0 , z:-16},
    { x:0 , y:0 , z:-17},
    { x:0 , y:0 , z:-18},

    //wall_3
    { x:0 , y:0 , z:-19},
    { x:1 , y:0 , z:-19},
    { x:2 , y:0 , z:-19},
    { x:3 , y:0 , z:-19},
    { x:4 , y:0 , z:-19},
    { x:5 , y:0 , z:-19},
    { x:6 , y:0 , z:-19},
    { x:7 , y:0 , z:-19},
    { x:8 , y:0 , z:-19},
    { x:9 , y:0 , z:-19},
    { x:10 , y:0 , z:-19},
    { x:11 , y:0 , z:-19},
    { x:12 , y:0 , z:-19},
    { x:13 , y:0 , z:-19},
    { x:14 , y:0 , z:-19},
    { x:15 , y:0 , z:-19},
    { x:16 , y:0 , z:-19},
    { x:17 , y:0 , z:-19},
    // { x:18 , y:0 , z:-19},
    { x:19 , y:0 , z:-19},

    //wall_4
    { x:19 , y:0 , z:-1},
    { x:19 , y:0 , z:-2},
    { x:19 , y:0 , z:-3},
    { x:19 , y:0 , z:-4},
    { x:19 , y:0 , z:-5},
    { x:19 , y:0 , z:-6},
    { x:19 , y:0 , z:-7},
    { x:19 , y:0 , z:-8},
    { x:19 , y:0 , z:-9},
    { x:19 , y:0 , z:-10},
    { x:19 , y:0 , z:-11},
    { x:19 , y:0 , z:-12},
    { x:19 , y:0 , z:-13},
    { x:19 , y:0 , z:-14},
    { x:19 , y:0 , z:-15},
    { x:19 , y:0 , z:-16},
    { x:19 , y:0 , z:-17},
    { x:19 , y:0 , z:-18},

    //wall_5
    { x:1 , y:0 , z:-13},
    { x:2 , y:0 , z:-13},
    { x:3 , y:0 , z:-13},
    { x:4 , y:0 , z:-13},
    { x:5 , y:0 , z:-13},
    { x:5 , y:0 , z:-12},

    //wall_6
    { x:2 , y:0 , z:-15},
    { x:2 , y:0 , z:-16},
    { x:2 , y:0 , z:-17},
    { x:3 , y:0 , z:-17},
    { x:4 , y:0 , z:-17},
    { x:4 , y:0 , z:-16},
    { x:4 , y:0 , z:-15},
    { x:5 , y:0 , z:-15},
    { x:6 , y:0 , z:-15},

    //wall_7
    { x:2 , y:0 , z:-5},
    { x:2 , y:0 , z:-4},
    { x:2 , y:0 , z:-3},
    { x:3 , y:0 , z:-3},
    { x:4 , y:0 , z:-3},
    { x:4 , y:0 , z:-2},
    { x:4 , y:0 , z:-1},

    //wall_8
    { x:2 , y:0 , z:-8},
    { x:2 , y:0 , z:-9},
    { x:2 , y:0 , z:-10},
    { x:3 , y:0 , z:-10},
    { x:4 , y:0 , z:-10},
    { x:5 , y:0 , z:-10},
    { x:5 , y:0 , z:-9},
    { x:5 , y:0 , z:-8},
    { x:5 , y:0 , z:-7},
    { x:5 , y:0 , z:-6},
    { x:5 , y:0 , z:-5},
    { x:6 , y:0 , z:-5},
    { x:6 , y:0 , z:-4},
    { x:6 , y:0 , z:-3},
    { x:6 , y:0 , z:-2},
    { x:6 , y:0 , z:-1},

    //wall_9
    { x:7 , y:0 , z:-7},
    { x:7 , y:0 , z:-6},
    { x:7 , y:0 , z:-9},
    { x:7 , y:0 , z:-10},
    { x:7 , y:0 , z:-11},
    { x:7 , y:0 , z:-12},
    { x:7 , y:0 , z:-13},
    { x:7 , y:0 , z:-14},
    { x:7 , y:0 , z:-15},
    { x:7 , y:0 , z:-16},
    { x:7 , y:0 , z:-17},
    { x:7 , y:0 , z:-18},
    
    //wall_10
    { x:10 , y:0 , z:-17},
    { x:10 , y:0 , z:-16},
    { x:10 , y:0 , z:-15},
    { x:10 , y:0 , z:-14},
    { x:10 , y:0 , z:-13},
    { x:9 , y:0 , z:-13},
    { x:9 , y:0 , z:-12},
    { x:9 , y:0 , z:-11},
    { x:9 , y:0 , z:-10},
    { x:10 , y:0 , z:-10},
    { x:10 , y:0 , z:-9},
    { x:10 , y:0 , z:-8},
    { x:10 , y:0 , z:-7},
    { x:10 , y:0 , z:-6},
    { x:10 , y:0 , z:-5},
    { x:9 , y:0 , z:-5},
    { x:8 , y:0 , z:-5},
    { x:8 , y:0 , z:-4},
    { x:8 , y:0 , z:-3},
    { x:8 , y:0 , z:-2},
    { x:9 , y:0 , z:-2},
    { x:10 , y:0 , z:-2},
    { x:10 , y:0, z:-3},

    //wall_11
    {x:12, y:0, z:-17},
    {x:12, y:0, z:-16},
    {x:12, y:0, z:-15},
    {x:12, y:0, z:-14},
    {x:12, y:0, z:-13},
    {x:12, y:0, z:-12},
    {x:12, y:0, z:-11},
    {x:12, y:0, z:-10},
    {x:12, y:0, z:-9},
    {x:12, y:0, z:-8},
    {x:12, y:0, z:-7},
    {x:12, y:0, z:-6},
    {x:12, y:0, z:-5},
    {x:12, y:0, z:-4},
    {x:12, y:0, z:-3},
    {x:12, y:0, z:-2},

    //wall_12
    {x:13, y:0, z:-14},
    {x:14, y:0, z:-14},
    {x:14, y:0, z:-15},
    {x:14, y:0, z:-16},
    {x:14, y:0, z:-17},
    {x:14, y:0, z:-18},

    //wall_13
    {x:13, y:0, z:-4},
    {x:14, y:0, z:-4},
    {x:14, y:0, z:-3},
    {x:15, y:0, z:-3},
    {x:16, y:0, z:-3},
    {x:17, y:0, z:-3},
    {x:17, y:0, z:-4},
    
    //wall_14
    {x:14, y:0, z:-6},
    {x:14, y:0, z:-7},
    {x:14, y:0, z:-8},
    {x:14, y:0, z:-9},
    {x:14, y:0, z:-10},
    {x:14, y:0, z:-11},
    {x:14, y:0, z:-12},
    {x:15, y:0, z:-12},
    {x:16, y:0, z:-12},
    {x:17, y:0, z:-12},
    {x:17, y:0, z:-11},
    {x:17, y:0, z:-10},
    {x:17, y:0, z:-9},
    {x:17, y:0, z:-8},
    {x:17, y:0, z:-7},
    {x:17, y:0, z:-6},
    {x:16, y:0, z:-13},
    {x:16, y:0, z:-14},
    {x:16, y:0, z:-15},
    {x:16, y:0, z:-16},
    {x:16, y:0, z:-17},
    
    {x:18, y:0, z:-8},
];

export const wallCoords_3 = [
    //wall_1
    {x:0 , y:0 , z:-2 },
    {x:0 , y:0 , z:-3 },
    {x:0 , y:0 , z:-4 },
    {x:0 , y:0 , z:-5 },
    {x:0 , y:0 , z:-6 },
    {x:0 , y:0 , z:-7 },
    {x:0 , y:0 , z:-8 },
    {x:0 , y:0 , z:-9 },
    {x:0 , y:0 , z:-10},
    {x:0 , y:0 , z:-11 },
    {x:0 , y:0 , z:-12 },
    {x:0 , y:0 , z:-13 },
    {x:0 , y:0 , z:-14 },
    {x:0 , y:0 , z:-15 },
    {x:0 , y:0 , z:-16},
    {x:0 , y:0 , z:-17 },
    {x:0 , y:0 , z:-18 },

    //wall_2
    {x:0 , y:0 , z:-19 },
    {x:1 , y:0 , z:-19 },
    {x:2 , y:0 , z:-19 },
    {x:3 , y:0 , z:-19 },
    {x:4 , y:0 , z:-19 },
    {x:5 , y:0 , z:-19 },
    {x:6 , y:0 , z:-19 },
    {x:7 , y:0 , z:-19 },
    {x:8 , y:0 , z:-19 },
    {x:9 , y:0 , z:-19 },
    {x:10 , y:0 , z:-19 },
    {x:11 , y:0 , z:-19 },
    {x:12 , y:0 , z:-19 },
    {x:13 , y:0 , z:-19 },
    {x:14 , y:0 , z:-19 },
    {x:15 , y:0 , z:-19 },
    {x:16 , y:0 , z:-19 },
    {x:17 , y:0 , z:-19 },
    {x:18 , y:0 , z:-19 },
    {x:19 , y:0 , z:-19  },

    //wall_3
    {x:0 , y:0 , z:0 },
    {x:1 , y:0 , z:0 },  
    {x:2 , y:0 , z:0 },
    {x:3 , y:0 , z:0 },
    {x:4 , y:0 , z:0 },
    {x:5 , y:0 , z:0 },
    {x:6 , y:0 , z:0 },
    {x:7 , y:0 , z:0 },
    {x:8 , y:0 , z:0 },
    {x:9 , y:0 , z:0 },
    {x:10 , y:0 , z:0 },
    {x:11 , y:0 , z:0 },
    {x:12 , y:0 , z:0 },
    {x:13 , y:0 , z:0 },
    {x:14 , y:0 , z:0 },
    {x:15 , y:0 , z:0 },
    {x:16 , y:0 , z:0 },
    {x:17 , y:0 , z:0 },
    {x:18 , y:0 , z:0 },
    {x:19 , y:0 , z:0  },

    //wall_4
    {x:19 , y:0 , z:-1 },
    {x:19 , y:0 , z:-2 },
    {x:19 , y:0 , z:-3 },
    {x:19 , y:0 , z:-4 },
    {x:19 , y:0 , z:-5 },
    {x:19 , y:0 , z:-6 },
    {x:19 , y:0 , z:-7 },
    {x:19 , y:0 , z:-8 },
    {x:19 , y:0 , z:-9 },
    {x:19 , y:0 , z:-10 },
    {x:19 , y:0 , z:-11 },
    {x:19 , y:0 , z:-12 },
    {x:19 , y:0 , z:-13 },
    {x:19 , y:0 , z:-14 },
    {x:19 , y:0 , z:-15 },
    {x:19 , y:0 , z:-16 },
    {x:19 , y:0 , z:-17 },

    //wall_5
    {x:1 , y:0 , z:-17 },
    {x:2 , y:0 , z:-17 },
    {x:2 , y:0 , z:-16 },
    {x:2, y:0 , z:-15 },
    {x:2 , y:0 , z:-14 },
    {x:2 , y:0 , z:-13 },
    {x:3 , y:0 , z:- 13 },
    {x:4 , y:0 , z:-13 },
    {x:4 , y:0 , z:-12 },
    {x:4, y:0 , z:-11 },
    {x:5, y:0 , z:-11 },
    {x:3 , y:0 , z:-11 },
    {x:2 , y:0 , z:-11 },
    {x:2 , y:0 , z:-10 },
    {x:2 , y:0 , z:-9 },
    {x:2 , y:0 , z:-8 },
    {x:3 , y:0 , z:-8 },
    
    //wall_6
    {x:1 , y:0 , z:-6 },
    {x:2 , y:0 , z:-6 },
    {x:3 , y:0 , z:-6 },
    {x:4 , y:0 , z:-6 },

    //wall_7
    {x:3 , y:0 , z:-4},
    {x:2 , y:0 , z:-4},
    {x:2 , y:0 , z:-3},
    {x:2 , y:0 , z:-2},
    {x:3 , y:0 , z:-2},
    {x:4 , y:0 , z:-2},
    {x:5 , y:0 , z:-2},    

    //wall_8
    {x:6 , y:0 , z:-4},
    {x:6 , y:0 , z:-5},

    //wall_9
    {x:6 , y:0 , z:-18},
    {x:6 , y:0 , z:-17},
    {x:7 , y:0 , z:-17},
    {x:8 , y:0 , z:-17},
    
    //wall_10
    {x:8 , y:0 , z:-2},
    {x:8 , y:0 , z:-3},
    {x:8 , y:0 , z:-4},
    {x:8 , y:0 , z:-5},
    {x:8 , y:0 , z:-6},
    {x:9, y:0 , z:-6},
    {x:10, y:0 , z:-6},
    {x:10 , y:0 , z:-5},
    {x:10 , y:0 , z:-4},

    //wall_11
    {x:8 , y:0 , z:-8},
    {x:8 , y:0 , z:-9},
    {x:8 , y:0 , z:-10},
    {x:8 , y:0 , z:-11},
    {x:5 , y:0 , z:-9},
    {x:6 , y:0 , z:-9},
    {x:7 , y:0 , z:-9},

    //wall_12
    {x:4 , y:0 , z:-17},
    {x:4 , y:0 , z:-16},
    {x:4 , y:0 , z:-15},
    {x:5 , y:0 , z:-15},
    {x:6 , y:0 , z:-15},
    {x:6 , y:0 , z:-14},
    {x:7 , y:0 , z:-14},
    {x:8 , y:0 , z:-14},
    {x:9 , y:0 , z:-14},
    {x:9 , y:0 , z:-13},
    {x:9 , y:0 , z:-12},
    {x:9 , y:0 , z:-15},
    {x:10 , y:0 , z:-15},
    {x:11 , y:0 , z:-15},
    {x:12 , y:0 , z:-15},
    {x:13 , y:0 , z:-15},
    {x:14 , y:0 , z:-15},
    {x:15 , y:0 , z:-15},
    {x:11 , y:0 , z:-16},
    {x:11 , y:0 , z:-17},

    //wall_13
    {x:10 , y:0 , z:-2},
    {x:11 , y:0 , z:-2},
    {x:11 , y:0 , z:-1},

    //wall_14
    {x:13 , y:0 , z:-18},
    {x:13 , y:0 , z:-17},
    {x:14 , y:0 , z:-17},
    {x:15 , y:0 , z:-17},
    {x:16 , y:0 , z:-17},
    {x:17 , y:0 , z:-17},


    //wall_15
    {x:12 , y:0 , z:-7},
    {x:13 , y:0 , z:-7},
    {x:13 , y:0 , z:-8},
    {x:13 , y:0 , z:-9},
    {x:13 , y:0 , z:-10},
    {x:13 , y:0 , z:-11},

    //wall_16
    {x:10 , y:0 , z:-9},
    {x:11 , y:0 , z:-9},
    {x:11 , y:0 , z:-10},
    {x:11 , y:0 , z:-11},
    {x:11 , y:0 , z:-12},
    {x:11 , y:0 , z:-13},
    {x:12 , y:0 , z:-13},
    {x:13 , y:0 , z:-13},
    {x:14 , y:0 , z:-13},
    {x:15 , y:0 , z:-13},
    {x:16 , y:0 , z:-13},
    {x:17 , y:0 , z:-13},
    {x:15 , y:0 , z:-12},
    {x:15 , y:0 , z:-11},
    {x:17 , y:0 , z:-14},
    {x:17 , y:0 , z:-15},
    {x:18 , y:0 , z:-15},

    //wall_17
    {x:13 , y:0 , z:-4},
    {x:13 , y:0 , z:-3},
    {x:13 , y:0 , z:-2},
    {x:14 , y:0 , z:-2},
    {x:15 , y:0 , z:-2},
    {x:15 , y:0 , z:-3},
    {x:15 , y:0 , z:-4},
    {x:16 , y:0 , z:-4},
    {x:17 , y:0 , z:-4},
    {x:18 , y:0 , z:-4},

    //wall_18
    {x:17 , y:0 , z:-1},
    {x:17 , y:0 , z:-2},

    //wall_19
    {x:17 , y:0 , z:-6},
    {x:17 , y:0 , z:-7},
    {x:17 , y:0 , z:-8},
    {x:17 , y:0 , z:-9},
    {x:18 , y:0 , z:-9},
]

export const connector1_2_coords = [
    { x:16 , y:1 , z:-20 },
    { x:16 , y:0 , z:-21 },
    { x:16 , y:0 , z:-22 },
    { x:16 , y:0 , z:-23 },
    // { x:15 , y:0 , z:-23 },
    // { x:14 , y:0 , z:-23 },
    // { x:13 , y:0 , z:-23 },
    // { x:12 , y:0 , z:-23 },
    // { x:11 , y:0 , z:-23 },

    { x:8 , y:0 , z:-20 },
    { x:8 , y:0 , z:-21 },
    { x:8 , y:0 , z:-22 },
    { x:8 , y:0 , z:-23 },
]


export const connector2_3_coords = [   
    { x:3 , y:0 , z:-2 },
    { x:2 , y:0 , z:-2 },
    { x:1 , y:0 , z:-2 },


    { x:3 , y:0 , z:0 },
    { x:2 , y:0 , z:0 },
    { x:1 , y:0 , z:0 },
]

export const connector3_4_coords = [
    { x:0 , y:0 , z:-1 },
    { x:0 , y:0 , z:-2 },
    { x:0 , y:0 , z:-3 },
    { x:0 , y:0 , z:-4 },

    { x:7 , y:0 , z:-1 },
    { x:7 , y:0 , z:-2 },
    { x:7 , y:0 , z:-3 },
    { x:7 , y:0 , z:-4 },
]

export const connector4_5_coords = [
    {x:0, y:0,z:0},
    {x:0, y:0,z:1},
    {x:0, y:0,z:2},
    {x:0, y:0,z:3},

    {x:19, y:0,z:0},
    {x:19, y:0,z:1},
    {x:19, y:0,z:2},
    {x:19, y:0,z:3},
]

export const connector5_6_coords = [
    // {x:0, y:0,z:1},
    {x:0, y:0,z:2},
    {x:0, y:0,z:3},
    {x:0, y:0,z:4},

    // {x:3, y:0,z:1},
    {x:3, y:0,z:2},
    {x:3, y:0,z:3},
    {x:3, y:0,z:4},
]