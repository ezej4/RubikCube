const MOUSE_MOVEMENTS = [{
    xAngle: 0,
    yAngle: 0,
    value: [{
            miniCube: [0, 0],
            proximityMoves: {
                left: {
                    right: 'U',
                    left: 'U!',
                    top: 'R',
                    bottom: 'R!',
                },
                front: {
                    right: 'U',
                    left: 'U!',
                    top: 'F!',
                    bottom: 'F',
                },
                top: {
                    right: 'F',
                    left: 'F!',
                    top: 'R!',
                    bottom: 'R',
                }
            },
        },
        {
            miniCube: [0, 1],
            proximityMoves: {
                front: {
                    right: 'U',
                    left: 'U!',
                    top: 'S!',
                    bottom: 'S',
                },
                top: {
                    right: 'S',
                    left: 'S!',
                    top: 'R',
                    bottom: 'R!',
                }
            },
        },
        {
            miniCube: [0, 2],
            proximityMoves: {
                front: {
                    right: 'U',
                    left: 'U!',
                    top: 'B!',
                    bottom: 'B',
                },
                top: {
                    right: 'B',
                    left: 'B!',
                    top: 'R',
                    bottom: 'R!',
                }
            },
        },
        {
            miniCube: [0, 3],
            proximityMoves: {
                front: {
                    right: 'E',
                    left: 'E!',
                    top: 'F!',
                    bottom: 'F',
                },
                left: {
                    right: 'E',
                    left: 'E!',
                    top: 'R',
                    bottom: 'R!',
                }
            },
        },
        {
            miniCube: [0, 4],
            proximityMoves: {
                front: {
                    right: 'E',
                    left: 'E!',
                    top: 'S!',
                    bottom: 'S',
                },
            },
        },
        {
            miniCube: [0, 5],
            proximityMoves: {
                front: {
                    right: 'E',
                    left: 'E!',
                    top: 'B!',
                    bottom: 'B',
                },
            },
        },
        {
            miniCube: [0, 6],
            proximityMoves: {
                front: {
                    right: 'D',
                    left: 'D!',
                    top: 'F!',
                    bottom: 'F',
                },
                left: {
                    right: 'D',
                    left: 'D!',
                    top: 'R',
                    bottom: 'R!',
                }
            },
        },
        {
            miniCube: [0, 7],
            proximityMoves: {
                front: {
                    right: 'D',
                    left: 'D!',
                    top: 'S!',
                    bottom: 'S',
                },
            
            },
        },
        {
            miniCube: [0, 8],
            proximityMoves: {
                front: {
                    right: 'D',
                    left: 'D!',
                    top: 'B!',
                    bottom: 'B',
                },
            },
        },

    ]
}]