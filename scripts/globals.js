  // elements
  const cubic = document.getElementById("cubic");
  const selectedArea = document.getElementById("cubic-selected-area");
  const animateButton = document.getElementById("animate-button");
  const grabButton = document.getElementById("grab-button");

  // variables
  const MATRIX_COLORS = ['blue', 'red', 'orange', 'green', 'white', 'yellow'];
  const FACE_BY_CUBE = ['front', 'left', 'right', 'back', 'top', 'bottom'];
  const AMOUNT_MINI_CUBES = 27;
  const TRANSLATION_UNITY = 100; /*PX*/
  /* /*  const MOVES = {
       'U!',
       'U',
       'E',
       'E!',
       'D',
       'D!',
       'R',
       'R!',
       'M',
       'M!',
       'L!',
       'L',
       'E!',
       'E',
       'E!',
       'E',
       'E!', 
   } */

  let matrix = {
      front: Array.from({ length: 9 }).fill(MATRIX_COLORS[0]),
      left: Array.from({ length: 9 }).fill(MATRIX_COLORS[1]),
      right: Array.from({ length: 9 }).fill(MATRIX_COLORS[2]),
      back: Array.from({ length: 9 }).fill(MATRIX_COLORS[3]),
      top: Array.from({ length: 9 }).fill(MATRIX_COLORS[4]),
      bottom: Array.from({ length: 9 }).fill(MATRIX_COLORS[5]),
  }
  const { front, left, right, back, top: top2, bottom } = matrix;

  const miniCubeFacesPositionsAndRotations = {
      front: {
          translations: {
              x: 0,
              y: 0,
              z: 50 // px,
          },
          rotation: {
              x: 0,
              y: 0,
              z: 0,
          }
      },
      left: {
          translations: {
              x: 0,
              y: 0,
              z: 50,
          },
          rotation: {
              x: 0,
              y: -90, // degrees
              z: -90 // degrees,
          }
      },
      right: {
          translations: {
              x: 0,
              y: 0,
              z: 50,
          },
          rotation: {
              x: 0,
              y: 90,
              z: 0,
          }
      },
      back: {
          translations: {
              x: 0,
              y: 0,
              z: 50,
          },
          rotation: {
              x: 0,
              y: 180,
              z: -90,
          }
      },
      top: {
          translations: {
              x: 0,
              y: 0,
              z: 50,
          },
          rotation: {
              x: 90,
              y: 0,
              z: 0,
          }
      },
      bottom: {
          translations: {
              x: 0,
              y: 0,
              z: 50,
          },
          rotation: {
              x: -90,
              y: 0,
              z: -90,
          }
      },
  };

  let miniCubeModel = [
      [ // mini-cube-wall 1
          {
              name: 'mini-cube-1',
              faces: [
                  {id:'face-1-1', label: 'front', value: front[0], rotation: miniCubeFacesPositionsAndRotations.front.rotation },
                  {id:'face-1-2', label: 'left', value: left[2], rotation: miniCubeFacesPositionsAndRotations.left.rotation },
                  {id:'face-1-3', label: 'right', value: null, rotation: miniCubeFacesPositionsAndRotations.right.rotation },
                  {id:'face-1-4', label: 'back', value: null, rotation: miniCubeFacesPositionsAndRotations.back.rotation },
                  {id:'face-1-5', label: 'top', value: top2[6], rotation: miniCubeFacesPositionsAndRotations.top.rotation },
                  {id:'face-1-6', label: 'bottom', value: null, rotation: miniCubeFacesPositionsAndRotations.bottom.rotation }
              ],
              position: { x: 0, y: 0, z: TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-2',
              faces: [
                  {id:'face-2-1', label: 'front', value: front[1], rotation: miniCubeFacesPositionsAndRotations.front.rotation },
                  {id:'face-2-2', label: 'left', value: null, rotation: miniCubeFacesPositionsAndRotations.left.rotation },
                  {id:'face-2-3', label: 'right', value: null, rotation: miniCubeFacesPositionsAndRotations.right.rotation },
                  {id:'face-2-4', label: 'back', value: null, rotation: miniCubeFacesPositionsAndRotations.back.rotation },
                  {id:'face-2-5', label: 'top', value: top2[7], rotation: miniCubeFacesPositionsAndRotations.top.rotation },
                  {id:'face-2-6', label: 'bottom', value: null, rotation: miniCubeFacesPositionsAndRotations.bottom.rotation }
              ],
              position: { x: TRANSLATION_UNITY, y: 0, z: TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-3',
              faces: [
                  {id:'face-3-1', label: 'front', value: front[2], rotation: miniCubeFacesPositionsAndRotations.front.rotation },
                  {id:'face-3-2', label: 'left', value: null, rotation: miniCubeFacesPositionsAndRotations.left.rotation },
                  {id:'face-3-3', label: 'right', value: right[0], rotation: miniCubeFacesPositionsAndRotations.right.rotation },
                  {id:'face-3-4', label: 'back', value: null, rotation: miniCubeFacesPositionsAndRotations.back.rotation },
                  {id:'face-3-5', label: 'top', value: top2[8], rotation: miniCubeFacesPositionsAndRotations.top.rotation },
                  {id:'face-3-6', label: 'bottom', value: null, rotation: miniCubeFacesPositionsAndRotations.bottom.rotation }
              ],
              position: { x: 2 * TRANSLATION_UNITY, y: 0, z: TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-4',
              faces: [
                  {id:'face-4-1', label: 'front', value: front[3], rotation: miniCubeFacesPositionsAndRotations.front.rotation },
                  {id:'face-4-2', label: 'left', value: left[5], rotation: miniCubeFacesPositionsAndRotations.left.rotation },
                  {id:'face-4-3', label: 'right', value: null, rotation: miniCubeFacesPositionsAndRotations.right.rotation },
                  {id:'face-4-4', label: 'back', value: null, rotation: miniCubeFacesPositionsAndRotations.back.rotation },
                  {id:'face-4-5', label: 'top', value: null, rotation: miniCubeFacesPositionsAndRotations.top.rotation },
                  {id:'face-4-6', label: 'bottom', value: null, rotation: miniCubeFacesPositionsAndRotations.bottom.rotation }
              ],
              position: { x: 0, y: TRANSLATION_UNITY, z: TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-5',
              faces: [
                  {id:'face-5-1', label: 'front', value: front[4], rotation: miniCubeFacesPositionsAndRotations.front.rotation },
                  {id:'face-5-2', label: 'left', value: null, rotation: miniCubeFacesPositionsAndRotations.left.rotation },
                  {id:'face-5-3', label: 'right', value: null, rotation: miniCubeFacesPositionsAndRotations.right.rotation },
                  {id:'face-5-4', label: 'back', value: null, rotation: miniCubeFacesPositionsAndRotations.back.rotation },
                  {id:'face-5-5', label: 'top', value: null, rotation: miniCubeFacesPositionsAndRotations.top.rotation },
                  {id:'face-5-6', label: 'bottom', value: null, rotation: miniCubeFacesPositionsAndRotations.bottom.rotation }
              ],
              position: { x: TRANSLATION_UNITY, y: TRANSLATION_UNITY, z: TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-6',
              faces: [
                  {id:'face-6-1', label: 'front', value: front[5], rotation: miniCubeFacesPositionsAndRotations.front.rotation },
                  {id:'face-6-2', label: 'left', value: null, rotation: miniCubeFacesPositionsAndRotations.left.rotation },
                  {id:'face-6-3', label: 'right', value: right[3], rotation: miniCubeFacesPositionsAndRotations.right.rotation },
                  {id:'face-6-4', label: 'back', value: null, rotation: miniCubeFacesPositionsAndRotations.back.rotation },
                  {id:'face-6-5', label: 'top', value: null, rotation: miniCubeFacesPositionsAndRotations.top.rotation },
                  {id:'face-6-6', label: 'bottom', value: null, rotation: miniCubeFacesPositionsAndRotations.bottom.rotation }
              ],
              position: { x: 2 * TRANSLATION_UNITY, y: TRANSLATION_UNITY, z: TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-7',
              faces: [
                  {id:'face-7-1', label: 'front', value: front[6], rotation: miniCubeFacesPositionsAndRotations.front.rotation },
                  {id:'face-7-2', label: 'left', value: left[8], rotation: miniCubeFacesPositionsAndRotations.left.rotation },
                  {id:'face-7-3', label: 'right', value: null, rotation: miniCubeFacesPositionsAndRotations.right.rotation },
                  {id:'face-7-4', label: 'back', value: null, rotation: miniCubeFacesPositionsAndRotations.back.rotation },
                  {id:'face-7-5', label: 'top', value: null, rotation: miniCubeFacesPositionsAndRotations.top.rotation },
                  {id:'face-7-6', label: 'bottom', value: bottom[8], rotation: miniCubeFacesPositionsAndRotations.bottom.rotation }
              ],
              position: { x: 0, y: 2 * TRANSLATION_UNITY, z: TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-8',
              faces: [
                  {id:'face-8-1', label: 'front', value: front[7], rotation: miniCubeFacesPositionsAndRotations.front.rotation },
                  {id:'face-8-2', label: 'left', value: null, rotation: miniCubeFacesPositionsAndRotations.left.rotation },
                  {id:'face-8-3', label: 'right', value: null, rotation: miniCubeFacesPositionsAndRotations.right.rotation },
                  {id:'face-8-4', label: 'back', value: null, rotation: miniCubeFacesPositionsAndRotations.back.rotation },
                  {id:'face-8-5', label: 'top', value: null, rotation: miniCubeFacesPositionsAndRotations.top.rotation },
                  {id:'face-8-6', label: 'bottom', value: bottom[6], rotation: miniCubeFacesPositionsAndRotations.bottom.rotation }
              ],
              position: { x: TRANSLATION_UNITY, y: 2 * TRANSLATION_UNITY, z: TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-9',
              faces: [
                  {id:'face-9-1', label: 'front', value: front[8], rotation: miniCubeFacesPositionsAndRotations.front.rotation },
                  {id:'face-9-2', label: 'left', value: null, rotation: miniCubeFacesPositionsAndRotations.left.rotation },
                  {id:'face-9-3', label: 'right', value: right[6], rotation: miniCubeFacesPositionsAndRotations.right.rotation },
                  {id:'face-9-4', label: 'back', value: null, rotation: miniCubeFacesPositionsAndRotations.back.rotation },
                  {id:'face-9-5', label: 'top', value: null, rotation: miniCubeFacesPositionsAndRotations.top.rotation },
                  {id:'face-9-6', label: 'bottom', value: bottom[6], rotation: miniCubeFacesPositionsAndRotations.bottom.rotation }
              ],
              position: { x: 2 * TRANSLATION_UNITY, y: 2 * TRANSLATION_UNITY, z: TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
      ],

      [ // mini-cube-wall 2
          {
              name: 'mini-cube-10',
              faces: [
                  {id:'face-10-1', label: 'front', value: null, rotation: miniCubeFacesPositionsAndRotations.front.rotation },
                  {id:'face-10-2', label: 'left', value: left[1], rotation: miniCubeFacesPositionsAndRotations.left.rotation },
                  {id:'face-10-3', label: 'right', value: null, rotation: miniCubeFacesPositionsAndRotations.right.rotation },
                  {id:'face-10-4', label: 'back', value: null, rotation: miniCubeFacesPositionsAndRotations.back.rotation },
                  {id:'face-10-5', label: 'top', value: top2[3], rotation: miniCubeFacesPositionsAndRotations.top.rotation },
                  {id:'face-10-6', label: 'bottom', value: null, rotation: miniCubeFacesPositionsAndRotations.bottom.rotation }
              ],
              position: { x: 0, y: 0, z: 0 },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-11',
              faces: [
                  {id:'face-11-1', label: 'front', value: null, rotation: miniCubeFacesPositionsAndRotations.front.rotation },
                  {id:'face-11-2', label: 'left', value: null, rotation: miniCubeFacesPositionsAndRotations.left.rotation },
                  {id:'face-11-3', label: 'right', value: null, rotation: miniCubeFacesPositionsAndRotations.right.rotation },
                  {id:'face-11-4', label: 'back', value: null, rotation: miniCubeFacesPositionsAndRotations.back.rotation },
                  {id:'face-11-5', label: 'top', value: top2[4], rotation: miniCubeFacesPositionsAndRotations.top.rotation },
                  {id:'face-11-6', label: 'bottom', value: null, rotation: miniCubeFacesPositionsAndRotations.bottom.rotation }
              ],
              position: { x: TRANSLATION_UNITY, y: 0, z: 0 },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-12',
              faces: [
                  {id:'face-12-1', label: 'front', value: null, rotation: miniCubeFacesPositionsAndRotations.front.rotation },
                  {id:'face-12-2', label: 'left', value: null, rotation: miniCubeFacesPositionsAndRotations.left.rotation },
                  {id:'face-12-3', label: 'right', value: right[1], rotation: miniCubeFacesPositionsAndRotations.right.rotation },
                  {id:'face-12-4', label: 'back', value: null, rotation: miniCubeFacesPositionsAndRotations.back.rotation },
                  {id:'face-12-5', label: 'top', value: top2[5], rotation: miniCubeFacesPositionsAndRotations.top.rotation },
                  {id:'face-12-6', label: 'bottom', value: null, rotation: miniCubeFacesPositionsAndRotations.bottom.rotation }
              ],
              position: { x: 2 * TRANSLATION_UNITY, y: 0, z: 0 },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-13',
              faces: [
                  {id:'face-13-1', label: 'front', value: null, rotation: miniCubeFacesPositionsAndRotations.front.rotation },
                  {id:'face-13-2', label: 'left', value: left[4], rotation: miniCubeFacesPositionsAndRotations.left.rotation },
                  {id:'face-13-3', label: 'right', value: null, rotation: miniCubeFacesPositionsAndRotations.right.rotation },
                  {id:'face-13-4', label: 'back', value: null, rotation: miniCubeFacesPositionsAndRotations.back.rotation },
                  {id:'face-13-5', label: 'top', value: null, rotation: miniCubeFacesPositionsAndRotations.top.rotation },
                  {id:'face-13-6', label: 'bottom', value: null, rotation: miniCubeFacesPositionsAndRotations.bottom.rotation }
              ],
              position: { x: 0, y: TRANSLATION_UNITY, z: 0 },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-14',
              faces: [
                  {id:'face-14-1', label: 'front', value: null, rotation: miniCubeFacesPositionsAndRotations.front.rotation },
                  {id:'face-14-2', label: 'left', value: null, rotation: miniCubeFacesPositionsAndRotations.left.rotation },
                  {id:'face-14-3', label: 'right', value: null, rotation: miniCubeFacesPositionsAndRotations.right.rotation },
                  {id:'face-14-4', label: 'back', value: null, rotation: miniCubeFacesPositionsAndRotations.back.rotation },
                  {id:'face-14-5', label: 'top', value: null, rotation: miniCubeFacesPositionsAndRotations.top.rotation },
                  {id:'face-14-6', label: 'bottom', value: null, rotation: miniCubeFacesPositionsAndRotations.bottom.rotation }
              ],
              position: { x: TRANSLATION_UNITY, y: TRANSLATION_UNITY, z: 0 },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-15',
              faces: [
                  {id:'face-15-1', label: 'front', value: null, rotation: miniCubeFacesPositionsAndRotations.front.rotation },
                  {id:'face-15-2', label: 'left', value: null, rotation: miniCubeFacesPositionsAndRotations.left.rotation },
                  {id:'face-15-3', label: 'right', value: right[4], rotation: miniCubeFacesPositionsAndRotations.right.rotation },
                  {id:'face-15-4', label: 'back', value: null, rotation: miniCubeFacesPositionsAndRotations.back.rotation },
                  {id:'face-15-5', label: 'top', value: null, rotation: miniCubeFacesPositionsAndRotations.top.rotation },
                  {id:'face-15-6', label: 'bottom', value: null, rotation: miniCubeFacesPositionsAndRotations.bottom.rotation }
              ],
              position: { x: 2 * TRANSLATION_UNITY, y: TRANSLATION_UNITY, z: 0 },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-16',
              faces: [
                  {id:'face-16-1', label: 'front', value: null, rotation: miniCubeFacesPositionsAndRotations.front.rotation },
                  {id:'face-16-2', label: 'left', value: left[7], rotation: miniCubeFacesPositionsAndRotations.left.rotation },
                  {id:'face-16-3', label: 'right', value: null, rotation: miniCubeFacesPositionsAndRotations.right.rotation },
                  {id:'face-16-4', label: 'back', value: null, rotation: miniCubeFacesPositionsAndRotations.back.rotation },
                  {id:'face-16-5', label: 'top', value: null, rotation: miniCubeFacesPositionsAndRotations.top.rotation },
                  {id:'face-16-6', label: 'bottom', value: bottom[5], rotation: miniCubeFacesPositionsAndRotations.bottom.rotation }
              ],
              position: { x: 0, y: 2 * TRANSLATION_UNITY, z: 0 },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-17',
              faces: [
                  {id:'face-17-1', label: 'front', value: null, rotation: miniCubeFacesPositionsAndRotations.front.rotation },
                  {id:'face-17-2', label: 'left', value: null, rotation: miniCubeFacesPositionsAndRotations.left.rotation },
                  {id:'face-17-3', label: 'right', value: null, rotation: miniCubeFacesPositionsAndRotations.right.rotation },
                  {id:'face-17-4', label: 'back', value: null, rotation: miniCubeFacesPositionsAndRotations.back.rotation },
                  {id:'face-17-5', label: 'top', value: null, rotation: miniCubeFacesPositionsAndRotations.top.rotation },
                  {id:'face-17-6', label: 'bottom', value: bottom[4], rotation: miniCubeFacesPositionsAndRotations.bottom.rotation }
              ],
              position: { x: TRANSLATION_UNITY, y: 2 * TRANSLATION_UNITY, z: 0 },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-18',
              faces: [
                  {id:'face-18-1', label: 'front', value: null, rotation: miniCubeFacesPositionsAndRotations.front.rotation },
                  {id:'face-18-2', label: 'left', value: null, rotation: miniCubeFacesPositionsAndRotations.left.rotation },
                  {id:'face-18-3', label: 'right', value: right[7], rotation: miniCubeFacesPositionsAndRotations.right.rotation },
                  {id:'face-18-4', label: 'back', value: null, rotation: miniCubeFacesPositionsAndRotations.back.rotation },
                  {id:'face-18-5', label: 'top', value: null, rotation: miniCubeFacesPositionsAndRotations.top.rotation },
                  {id:'face-18-6', label: 'bottom', value: bottom[3], rotation: miniCubeFacesPositionsAndRotations.bottom.rotation }
              ],
              position: { x: 2 * TRANSLATION_UNITY, y: 2 * TRANSLATION_UNITY, z: 0 },
              rotation: { x: 0, y: 0, z: 0 }
          },
      ],

      [ // mini-cube-wall 3
          {
              name: 'mini-cube-19',
              faces: [
                  {id:'face-19-1', label: 'front', value: null, rotation: miniCubeFacesPositionsAndRotations.front.rotation },
                  {id:'face-19-2', label: 'left', value: left[0], rotation: miniCubeFacesPositionsAndRotations.left.rotation },
                  {id:'face-19-3', label: 'right', value: null, rotation: miniCubeFacesPositionsAndRotations.right.rotation },
                  {id:'face-19-4', label: 'back', value: back[2], rotation: miniCubeFacesPositionsAndRotations.back.rotation },
                  {id:'face-19-5', label: 'top', value: top2[0], rotation: miniCubeFacesPositionsAndRotations.top.rotation },
                  {id:'face-19-6', label: 'bottom', value: null, rotation: miniCubeFacesPositionsAndRotations.bottom.rotation }
              ],
              position: { x: 0, y: 0, z: -TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-20',
              faces: [
                  {id:'face-20-1', label: 'front', value: null, rotation: miniCubeFacesPositionsAndRotations.front.rotation },
                  {id:'face-20-2', label: 'left', value: null, rotation: miniCubeFacesPositionsAndRotations.left.rotation },
                  {id:'face-20-3', label: 'right', value: null, rotation: miniCubeFacesPositionsAndRotations.right.rotation },
                  {id:'face-20-4', label: 'back', value: back[1], rotation: miniCubeFacesPositionsAndRotations.back.rotation },
                  {id:'face-20-5', label: 'top', value: top2[1], rotation: miniCubeFacesPositionsAndRotations.top.rotation },
                  {id:'face-20-6', label: 'bottom', value: null, rotation: miniCubeFacesPositionsAndRotations.bottom.rotation }
              ],
              position: { x: TRANSLATION_UNITY, y: 0, z: -TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-21',
              faces: [
                  {id:'face-21-1', label: 'front', value: null, rotation: miniCubeFacesPositionsAndRotations.front.rotation },
                  {id:'face-21-2', label: 'left', value: null, rotation: miniCubeFacesPositionsAndRotations.left.rotation },
                  {id:'face-21-3', label: 'right', value: right[2], rotation: miniCubeFacesPositionsAndRotations.right.rotation },
                  {id:'face-21-4', label: 'back', value: back[0], rotation: miniCubeFacesPositionsAndRotations.back.rotation },
                  {id:'face-21-5', label: 'top', value: top2[2], rotation: miniCubeFacesPositionsAndRotations.top.rotation },
                  {id:'face-21-6', label: 'bottom', value: null, rotation: miniCubeFacesPositionsAndRotations.bottom.rotation }
              ],
              position: { x: 2 * TRANSLATION_UNITY, y: 0, z: -TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-22',
              faces: [
                  {id:'face-22-1', label: 'front', value: null, rotation: miniCubeFacesPositionsAndRotations.front.rotation },
                  {id:'face-22-2', label: 'left', value: left[3], rotation: miniCubeFacesPositionsAndRotations.left.rotation },
                  {id:'face-22-3', label: 'right', value: null, rotation: miniCubeFacesPositionsAndRotations.right.rotation },
                  {id:'face-22-4', label: 'back', value: back[5], rotation: miniCubeFacesPositionsAndRotations.back.rotation },
                  {id:'face-22-5', label: 'top', value: null, rotation: miniCubeFacesPositionsAndRotations.top.rotation },
                  {id:'face-22-6', label: 'bottom', value: null, rotation: miniCubeFacesPositionsAndRotations.bottom.rotation }
              ],
              position: { x: 0, y: TRANSLATION_UNITY, z: -TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-23',
              faces: [
                  {id:'face-23-1', label: 'front', value: null, rotation: miniCubeFacesPositionsAndRotations.front.rotation },
                  {id:'face-23-2', label: 'left', value: null, rotation: miniCubeFacesPositionsAndRotations.left.rotation },
                  {id:'face-23-3', label: 'right', value: null, rotation: miniCubeFacesPositionsAndRotations.right.rotation },
                  {id:'face-23-4', label: 'back', value: back[4], rotation: miniCubeFacesPositionsAndRotations.back.rotation },
                  {id:'face-23-5', label: 'top', value: null, rotation: miniCubeFacesPositionsAndRotations.top.rotation },
                  {id:'face-23-6', label: 'bottom', value: null, rotation: miniCubeFacesPositionsAndRotations.bottom.rotation }
              ],
              position: { x: TRANSLATION_UNITY, y: TRANSLATION_UNITY, z: -TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-24',
              faces: [
                  {id:'face-24-1', label: 'front', value: null, rotation: miniCubeFacesPositionsAndRotations.front.rotation },
                  {id:'face-24-2', label: 'left', value: null, rotation: miniCubeFacesPositionsAndRotations.left.rotation },
                  {id:'face-24-3', label: 'right', value: right[5], rotation: miniCubeFacesPositionsAndRotations.right.rotation },
                  {id:'face-24-4', label: 'back', value: back[3], rotation: miniCubeFacesPositionsAndRotations.back.rotation },
                  {id:'face-24-5', label: 'top', value: null, rotation: miniCubeFacesPositionsAndRotations.top.rotation },
                  {id:'face-24-6', label: 'bottom', value: null, rotation: miniCubeFacesPositionsAndRotations.bottom.rotation }
              ],
              position: { x: 2 * TRANSLATION_UNITY, y: TRANSLATION_UNITY, z: -TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-25',
              faces: [
                  {id:'face-25-1', label: 'front', value: null, rotation: miniCubeFacesPositionsAndRotations.front.rotation },
                  {id:'face-25-2', label: 'left', value: left[6], rotation: miniCubeFacesPositionsAndRotations.left.rotation },
                  {id:'face-25-3', label: 'right', value: null, rotation: miniCubeFacesPositionsAndRotations.right.rotation },
                  {id:'face-25-4', label: 'back', value: back[8], rotation: miniCubeFacesPositionsAndRotations.back.rotation },
                  {id:'face-25-5', label: 'top', value: null, rotation: miniCubeFacesPositionsAndRotations.top.rotation },
                  {id:'face-25-6', label: 'bottom', value: bottom[2], rotation: miniCubeFacesPositionsAndRotations.bottom.rotation }
              ],
              position: { x: 0, y: 2 * TRANSLATION_UNITY, z: -TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-26',
              faces: [
                  {id:'face-26-1', label: 'front', value: null, rotation: miniCubeFacesPositionsAndRotations.front.rotation },
                  {id:'face-26-2', label: 'left', value: null, rotation: miniCubeFacesPositionsAndRotations.left.rotation },
                  {id:'face-26-3', label: 'right', value: null, rotation: miniCubeFacesPositionsAndRotations.right.rotation },
                  {id:'face-26-4', label: 'back', value: back[7], rotation: miniCubeFacesPositionsAndRotations.back.rotation },
                  {id:'face-26-5', label: 'top', value: null, rotation: miniCubeFacesPositionsAndRotations.top.rotation },
                  {id:'face-26-6', label: 'bottom', value: bottom[1], rotation: miniCubeFacesPositionsAndRotations.bottom.rotation }
              ],
              position: { x: TRANSLATION_UNITY, y: 2 * TRANSLATION_UNITY, z: -TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-27',
              faces: [
                  {id:'face-27-1', label: 'front', value: null, rotation: miniCubeFacesPositionsAndRotations.front.rotation },
                  {id:'face-27-2', label: 'left', value: null, rotation: miniCubeFacesPositionsAndRotations.left.rotation },
                  {id:'face-27-3', label: 'right', value: right[8], rotation: miniCubeFacesPositionsAndRotations.right.rotation },
                  {id:'face-27-4', label: 'back', value: back[6], rotation: miniCubeFacesPositionsAndRotations.back.rotation },
                  {id:'face-27-5', label: 'top', value: null, rotation: miniCubeFacesPositionsAndRotations.top.rotation },
                  {id:'face-27-6', label: 'bottom', value: bottom[0], rotation: miniCubeFacesPositionsAndRotations.bottom.rotation }
              ],
              position: { x: 2 * TRANSLATION_UNITY, y: 2 * TRANSLATION_UNITY, z: -TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
      ]
  ]


  let isGrabbing = false;
  let isSpining = false;