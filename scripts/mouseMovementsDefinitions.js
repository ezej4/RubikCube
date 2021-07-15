const MOUSE_MOVEMENTS = [
  {
    xAngle: 0,
    yAngle: 0,
    value: [
      {
        miniCube: [0, 0],
        proximityMoves: {
          left: { right: "U", left: "U!", top: "R", bottom: "R!" },
          front: { right: "U", left: "U!", top: "F!", bottom: "F" },
          top: { right: "F", left: "F!", top: "R", bottom: "R!" },
        },
      },
      {
        miniCube: [0, 1],
        proximityMoves: {
          front: { right: "U", left: "U!", top: "S!", bottom: "S" },
          top: { right: "S", left: "S!", top: "R", bottom: "R!" },
        },
      },
      {
        miniCube: [0, 2],
        proximityMoves: {
          front: { right: "U", left: "U!", top: "B!", bottom: "B" },
          top: { right: "B", left: "B!", top: "R", bottom: "R!" },
        },
      },
      {
        miniCube: [0, 3],
        proximityMoves: {
          front: { right: "E", left: "E!", top: "F!", bottom: "F" },
          left: { right: "E", left: "E!", top: "R", bottom: "R!" },
        },
      },
      {
        miniCube: [0, 4],
        proximityMoves: {
          front: { right: "E", left: "E!", top: "S!", bottom: "S" },
        },
      },
      {
        miniCube: [0, 5],
        proximityMoves: {
          front: { right: "E", left: "E!", top: "B!", bottom: "B" },
        },
      },
      {
        miniCube: [0, 6],
        proximityMoves: {
          front: { right: "D", left: "D!", top: "F!", bottom: "F" },
          left: { right: "D", left: "D!", top: "R", bottom: "R!" },
        },
      },
      {
        miniCube: [0, 7],
        proximityMoves: {
          front: { right: "D", left: "D!", top: "S!", bottom: "S" },
        },
      },
      {
        miniCube: [0, 8],
        proximityMoves: {
          front: { right: "D", left: "D!", top: "B!", bottom: "B" },
        },
      },
      {
        miniCube: [1, 0],
        proximityMoves: {
          left: { right: "U", left: "U!", top: "M", bottom: "M!" },
          top: { right: "F", left: "F!", top: "M", bottom: "M!" },
        },
      },
      {
        miniCube: [1, 1],
        proximityMoves: {
          top: { right: "S", left: "S!", top: "M", bottom: "M!" },
        },
      },
      {
        miniCube: [1, 2],
        proximityMoves: {
          top: { right: "B", left: "B!", top: "M", bottom: "M!" },
        },
      },
      {
        miniCube: [1, 3],
        proximityMoves: {
          left: { right: "E", left: "E!", top: "M", bottom: "M!" },
        },
      },
      {
        miniCube: [1, 6],
        proximityMoves: {
          left: { right: "D", left: "D!", top: "M", bottom: "M!" },
        },
      },
      {
        miniCube: [2, 0],
        proximityMoves: {
          left: { right: "U", left: "U!", top: "L", bottom: "L!" },
          top: { right: "F", left: "F!", top: "L", bottom: "L!" },
        },
      },
      {
        miniCube: [2, 1],
        proximityMoves: {
          top: { right: "S", left: "S!", top: "L", bottom: "L!" },
        },
      },
      {
        miniCube: [2, 2],
        proximityMoves: {
          top: { right: "B", left: "B!", top: "L", bottom: "L!" },
        },
      },
      {
        miniCube: [2, 3],
        proximityMoves: {
          left: { right: "E", left: "E!", top: "L", bottom: "L!" },
        },
      },
      {
        miniCube: [2, 6],
        proximityMoves: {
          left: { right: "D", left: "D!", top: "L", bottom: "L!" },
        },
      },
    ],
  },
  {
    xAngle: 0,
    yAngle: 270,
    value: [
      {
        miniCube: [0, 0],
        proximityMoves: {
          front: { right: "U", left: "U!", top: "F!", bottom: "F" },
          top: { right: "R", left: "R!", top: "F!", bottom: "F", invertedZ: true },
        },
      },
      {
        miniCube: [0, 1],
        proximityMoves: {
          front: { right: "U", left: "U!", top: "S!", bottom: "S" },
          top: { right: "R", left: "R!", top: "S!", bottom: "S", invertedZ: true },
        },
      },
      {
        miniCube: [0, 2],
        proximityMoves: {
          front: { right: "U", left: "U!", top: "B!", bottom: "B" },
          top: { right: "R", left: "R!", top: "B!", bottom: "B", invertedZ: true },
          right: { right: "U", left: "U!", top: "R!", bottom: "R", invertedZ: true },
        },
      },
      {
        miniCube: [0, 3],
        proximityMoves: {
          front: { right: "E", left: "E!", top: "F!", bottom: "F" },
        },
      },
      {
        miniCube: [0, 4],
        proximityMoves: {
          front: { right: "E", left: "E!", top: "S!", bottom: "S" },
        },
      },
      {
        miniCube: [0, 5],
        proximityMoves: {
          front: { right: "E", left: "E!", top: "B!", bottom: "B" },
          right: { right: "E", left: "E!", top: "R!", bottom: "R", invertedZ: true },
        },
      },
      {
        miniCube: [0, 6],
        proximityMoves: {
          front: { right: "D", left: "D!", top: "F!", bottom: "F" },
          left: { right: "D", left: "D!", top: "R", bottom: "R!" },
        },
      },
      {
        miniCube: [0, 7],
        proximityMoves: {
          front: { right: "D", left: "D!", top: "S!", bottom: "S" },
        },
      },
      {
        miniCube: [0, 8],
        proximityMoves: {
          front: { right: "D", left: "D!", top: "B!", bottom: "B" },
          right: { right: "D", left: "D!", top: "R!", bottom: "R", invertedZ: true },
        },
      },
      {
        miniCube: [1, 0],
        proximityMoves: {
          top: { right: "M", left: "M!", top: "F!", bottom: "F", invertedZ: true },
        },
      },
      {
        miniCube: [1, 1],
        proximityMoves: {
          top: { right: "M", left: "M!", top: "S!", bottom: "S", invertedZ: true },
        },
      },
      {
        miniCube: [1, 2],
        proximityMoves: {
          top: { right: "M", left: "M!", top: "B!", bottom: "B", invertedZ: true },
          right: { right: "U", left: "U!", top: "M!", bottom: "M", invertedZ: true },
        },
      },
      {
        miniCube: [1, 5],
        proximityMoves: {
          right: { right: "E", left: "E!", top: "M!", bottom: "M", invertedZ: true },
        },
      },
      {
        miniCube: [1, 8],
        proximityMoves: {
          right: { right: "D", left: "D!", top: "M!", bottom: "M", invertedZ: true },
        },
      },
      {
        miniCube: [2, 0],
        proximityMoves: {
          top: { right: "L", left: "L!", top: "F!", bottom: "F", invertedZ: true },
        },
      },
      {
        miniCube: [2, 1],
        proximityMoves: {
          top: { right: "M", left: "M!", top: "S!", bottom: "S", invertedZ: true },
        },
      },
      {
        miniCube: [2, 2],
        proximityMoves: {
          top: { right: "L", left: "L!", top: "B!", bottom: "B", invertedZ: true },
          right: { right: "U", left: "U!", top: "L!", bottom: "L", invertedZ: true },
        },
      },
      {
        miniCube: [2, 5],
        proximityMoves: {
          right: { right: "E", left: "E!", top: "L!", bottom: "L", invertedZ: true },
        },
      },
      {
        miniCube: [2, 8],
        proximityMoves: {
          right: { right: "D", left: "D!", top: "L!", bottom: "L", invertedZ: true },
        },
      },
    ],
  },
  {
    xAngle: 0,
    yAngle: 180,
    value: [
      {
        miniCube: [0, 0],
        proximityMoves: {
          top: { right: "F!", left: "F", top: "R!", bottom: "R", invertedY: true, invertedZ: true },
        },
      },
      {
        miniCube: [0, 1],
        proximityMoves: {
          top: { right: "S!", left: "S", top: "R!", bottom: "R", invertedY: true, invertedZ: true },
        },
      },
      {
        miniCube: [0, 2],
        proximityMoves: {
          top: { right: "B!", left: "B", top: "R!", bottom: "R", invertedY: true, invertedZ: true },
          right: { right: "U", left: "U!", top: "R!", bottom: "R", invertedZ: true },
        },
      },
      {
        miniCube: [0, 5],
        proximityMoves: {
          right: { right: "E", left: "E!", top: "R!", bottom: "R", invertedZ: true },
        },
      },
      {
        miniCube: [0, 8],
        proximityMoves: {
          right: { right: "D", left: "D!", top: "R!", bottom: "R", invertedZ: true },
        },
      },
      {
        miniCube: [1, 1],
        proximityMoves: {
          top: { right: "S!", left: "S", top: "M!", bottom: "M", invertedY: true, invertedZ: true },
        },
      },
      {
        miniCube: [1, 2],
        proximityMoves: {
          top: { right: "B!", left: "B", top: "R!", bottom: "R", invertedY: true, invertedZ: true },
          right: { right: "U", left: "U!", top: "M!", bottom: "M", invertedZ: true },
        },
      },
      {
        miniCube: [1, 5],
        proximityMoves: {
          right: { right: "E", left: "E!", top: "M!", bottom: "M", invertedZ: true },
        },
      },
      {
        miniCube: [1, 8],
        proximityMoves: {
          right: { right: "D", left: "D!", top: "M!", bottom: "M", invertedZ: true },
        },
      },
      {
        miniCube: [2, 0],
        proximityMoves: {
          top: { right: "F!", left: "F", top: "L!", bottom: "L", invertedY: true, invertedZ: true },
        },
      },
      {
        miniCube: [2, 1],
        proximityMoves: {
          top: { right: "S!", left: "S", top: "L!", bottom: "L", invertedY: true, invertedZ: true },
          back: { right: "U", left: "U!", top: "S", bottom: "S!", invertedY: true },
        },
      },
      {
        miniCube: [2, 2],
        proximityMoves: {
          top: { right: "B!", left: "B", top: "L!", bottom: "L", invertedY: true, invertedZ: true },
          right: { right: "U", left: "U!", top: "L!", bottom: "L", invertedZ: true },
          back: { right: "U", left: "U!", top: "B", bottom: "B!", invertedY: true },
        },
      },
      {
        miniCube: [2, 3],
        proximityMoves: {
          back: { right: "E", left: "E!", top: "F", bottom: "F!", invertedY: true },
        },
      },
      {
        miniCube: [2, 4],
        proximityMoves: {
          back: { right: "E", left: "E!", top: "S", bottom: "S!", invertedY: true },
        },
      },
      {
        miniCube: [2, 5],
        proximityMoves: {
          back: { right: "E", left: "E!", top: "B", bottom: "B!", invertedY: true },
        },
      },
      {
        miniCube: [2, 6],
        proximityMoves: {
          back: { right: "D", left: "D!", top: "F", bottom: "F!", invertedY: true },
        },
      },
      {
        miniCube: [2, 7],
        proximityMoves: {
          back: { right: "D", left: "D!", top: "S", bottom: "S!", invertedY: true },
        },
      },
      {
        miniCube: [2, 8],
        proximityMoves: {
          back: { right: "D", left: "D!", top: "B", bottom: "B!", invertedY: true },
          right: { right: "D", left: "D!", top: "L!", bottom: "L",  invertedZ: true},

        },
      },
    ],
  },
  {
    xAngle: 0,
    yAngle: 90,
    value: [
      {
        miniCube: [0, 0],
        proximityMoves: {
          top: { right: "F!", left: "F", top: "R!", bottom: "R", invertedY: true, invertedZ: true },
        },
      },
      {
        miniCube: [0, 1],
        proximityMoves: {
          top: { right: "S!", left: "S", top: "R!", bottom: "R", invertedY: true, invertedZ: true },
        },
      },
      {
        miniCube: [0, 2],
        proximityMoves: {
          top: { right: "B!", left: "B", top: "R!", bottom: "R", invertedY: true, invertedZ: true },
          right: { right: "U", left: "U!", top: "R!", bottom: "R", invertedZ: true },
        },
      },
      {
        miniCube: [0, 5],
        proximityMoves: {
          right: { right: "E", left: "E!", top: "R!", bottom: "R", invertedZ: true },
        },
      },
      {
        miniCube: [0, 8],
        proximityMoves: {
          right: { right: "D", left: "D!", top: "R!", bottom: "R", invertedZ: true },
        },
      },
      {
        miniCube: [1, 1],
        proximityMoves: {
          top: { right: "S!", left: "S", top: "M!", bottom: "M", invertedY: true, invertedZ: true },
        },
      },
      {
        miniCube: [1, 2],
        proximityMoves: {
          top: { right: "B!", left: "B", top: "R!", bottom: "R", invertedY: true, invertedZ: true },
          right: { right: "U", left: "U!", top: "M!", bottom: "M", invertedZ: true },
        },
      },
      {
        miniCube: [1, 5],
        proximityMoves: {
          right: { right: "E", left: "E!", top: "M!", bottom: "M", invertedZ: true },
        },
      },
      {
        miniCube: [1, 8],
        proximityMoves: {
          right: { right: "D", left: "D!", top: "M!", bottom: "M", invertedZ: true },
        },
      },
      {
        miniCube: [2, 0],
        proximityMoves: {
          top: { right: "F!", left: "F", top: "L!", bottom: "L", invertedY: true, invertedZ: true },
        },
      },
      {
        miniCube: [2, 1],
        proximityMoves: {
          top: { right: "S!", left: "S", top: "L!", bottom: "L", invertedY: true, invertedZ: true },
          back: { right: "U", left: "U!", top: "S", bottom: "S!", invertedY: true },
        },
      },
      {
        miniCube: [2, 2],
        proximityMoves: {
          top: { right: "B!", left: "B", top: "L!", bottom: "L", invertedY: true, invertedZ: true },
          right: { right: "U", left: "U!", top: "L!", bottom: "L", invertedZ: true },
          back: { right: "U", left: "U!", top: "B", bottom: "B!", invertedY: true },
        },
      },
      {
        miniCube: [2, 3],
        proximityMoves: {
          back: { right: "E", left: "E!", top: "F", bottom: "F!", invertedY: true },
        },
      },
      {
        miniCube: [2, 4],
        proximityMoves: {
          back: { right: "E", left: "E!", top: "S", bottom: "S!", invertedY: true },
        },
      },
      {
        miniCube: [2, 5],
        proximityMoves: {
          back: { right: "E", left: "E!", top: "B", bottom: "B!", invertedY: true },
        },
      },
      {
        miniCube: [2, 6],
        proximityMoves: {
          back: { right: "D", left: "D!", top: "F", bottom: "F!", invertedY: true },
        },
      },
      {
        miniCube: [2, 7],
        proximityMoves: {
          back: { right: "D", left: "D!", top: "S", bottom: "S!", invertedY: true },
        },
      },
      {
        miniCube: [2, 8],
        proximityMoves: {
          right: { right: "U", left: "U!", top: "L!", bottom: "L", invertedZ: true },
        },
      },
    ],
  },
];
