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

  let miniCubeModel = [
      [ // mini-cube-wall 1
          {
              name: 'mini-cube-1',
              faces: [
                  { label: 'front', value: front[0] },
                  { label: 'left', value: left[2] },
                  { label: 'right', value: null },
                  { label: 'back', value: null },
                  { label: 'top', value: top2[6] },
                  { label: 'bottom', value: null }
              ],
              position: { x: 0, y: 0, z: TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-2',
              faces: [
                  { label: 'front', value: front[1] },
                  { label: 'left', value: null },
                  { label: 'right', value: null },
                  { label: 'back', value: null },
                  { label: 'top', value: top2[7] },
                  { label: 'bottom', value: null }
              ],
              position: { x: TRANSLATION_UNITY, y: 0, z: TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-3',
              faces: [
                  { label: 'front', value: front[2] },
                  { label: 'left', value: null },
                  { label: 'right', value: right[0] },
                  { label: 'back', value: null },
                  { label: 'top', value: top2[8] },
                  { label: 'bottom', value: null }
              ],
              position: { x: 2 * TRANSLATION_UNITY, y: 0, z: TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-4',
              faces: [
                  { label: 'front', value: front[3] },
                  { label: 'left', value: left[5] },
                  { label: 'right', value: null },
                  { label: 'back', value: null },
                  { label: 'top', value: null },
                  { label: 'bottom', value: null }
              ],
              position: { x: 0, y: TRANSLATION_UNITY, z: TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-5',
              faces: [
                  { label: 'front', value: front[4] },
                  { label: 'left', value: null },
                  { label: 'right', value: null },
                  { label: 'back', value: null },
                  { label: 'top', value: null },
                  { label: 'bottom', value: null }
              ],
              position: { x: TRANSLATION_UNITY, y: TRANSLATION_UNITY, z: TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-6',
              faces: [
                  { label: 'front', value: front[5] },
                  { label: 'left', value: null },
                  { label: 'right', value: right[3] },
                  { label: 'back', value: null },
                  { label: 'top', value: null },
                  { label: 'bottom', value: null }
              ],
              position: { x: 2 * TRANSLATION_UNITY, y: TRANSLATION_UNITY, z: TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-7',
              faces: [
                  { label: 'front', value: front[6] },
                  { label: 'left', value: left[8] },
                  { label: 'right', value: null },
                  { label: 'back', value: null },
                  { label: 'top', value: null },
                  { label: 'bottom', value: bottom[8] }
              ],
              position: { x: 0, y: 2 * TRANSLATION_UNITY, z: TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-8',
              faces: [
                  { label: 'front', value: front[7] },
                  { label: 'left', value: null },
                  { label: 'right', value: null },
                  { label: 'back', value: null },
                  { label: 'top', value: null },
                  { label: 'bottom', value: bottom[6] }
              ],
              position: { x: TRANSLATION_UNITY, y: 2 * TRANSLATION_UNITY, z: TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-9',
              faces: [
                  { label: 'front', value: front[8] },
                  { label: 'left', value: null },
                  { label: 'right', value: right[6] },
                  { label: 'back', value: null },
                  { label: 'top', value: null },
                  { label: 'bottom', value: bottom[6] }
              ],
              position: { x: 2 * TRANSLATION_UNITY, y: 2 * TRANSLATION_UNITY, z: TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
      ],

      [ // mini-cube-wall 2
          {
              name: 'mini-cube-10',
              faces: [
                  { label: 'front', value: null },
                  { label: 'left', value: left[1] },
                  { label: 'right', value: null },
                  { label: 'back', value: null },
                  { label: 'top', value: top2[3] },
                  { label: 'bottom', value: null }
              ],
              position: { x: 0, y: 0, z: 0 },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-11',
              faces: [
                  { label: 'front', value: null },
                  { label: 'left', value: null },
                  { label: 'right', value: null },
                  { label: 'back', value: null },
                  { label: 'top', value: top2[4] },
                  { label: 'bottom', value: null }
              ],
              position: { x: TRANSLATION_UNITY, y: 0, z: 0 },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-12',
              faces: [
                  { label: 'front', value: null },
                  { label: 'left', value: null },
                  { label: 'right', value: right[1] },
                  { label: 'back', value: null },
                  { label: 'top', value: top2[5] },
                  { label: 'bottom', value: null }
              ],
              position: { x: 2 * TRANSLATION_UNITY, y: 0, z: 0 },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-13',
              faces: [
                  { label: 'front', value: null },
                  { label: 'left', value: left[4] },
                  { label: 'right', value: null },
                  { label: 'back', value: null },
                  { label: 'top', value: null },
                  { label: 'bottom', value: null }
              ],
              position: { x: 0, y: TRANSLATION_UNITY, z: 0 },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-14',
              faces: [
                  { label: 'front', value: null },
                  { label: 'left', value: null },
                  { label: 'right', value: null },
                  { label: 'back', value: null },
                  { label: 'top', value: null },
                  { label: 'bottom', value: null }
              ],
              position: { x: TRANSLATION_UNITY, y: TRANSLATION_UNITY, z: 0 },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-15',
              faces: [
                  { label: 'front', value: null },
                  { label: 'left', value: null },
                  { label: 'right', value: right[4] },
                  { label: 'back', value: null },
                  { label: 'top', value: null },
                  { label: 'bottom', value: null }
              ],
              position: { x: 2 * TRANSLATION_UNITY, y: TRANSLATION_UNITY, z: 0 },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-16',
              faces: [
                  { label: 'front', value: null },
                  { label: 'left', value: left[7] },
                  { label: 'right', value: null },
                  { label: 'back', value: null },
                  { label: 'top', value: null },
                  { label: 'bottom', value: bottom[5] }
              ],
              position: { x: 0, y: 2 * TRANSLATION_UNITY, z: 0 },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-17',
              faces: [
                  { label: 'front', value: null },
                  { label: 'left', value: null },
                  { label: 'right', value: null },
                  { label: 'back', value: null },
                  { label: 'top', value: null },
                  { label: 'bottom', value: bottom[4] }
              ],
              position: { x: TRANSLATION_UNITY, y: 2 * TRANSLATION_UNITY, z: 0 },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-18',
              faces: [
                  { label: 'front', value: null },
                  { label: 'left', value: null },
                  { label: 'right', value: right[7] },
                  { label: 'back', value: null },
                  { label: 'top', value: null },
                  { label: 'bottom', value: bottom[3] }
              ],
              position: { x: 2 * TRANSLATION_UNITY, y: 2 * TRANSLATION_UNITY, z: 0 },
              rotation: { x: 0, y: 0, z: 0 }
          },
      ],

      [ // mini-cube-wall 3
          {
              name: 'mini-cube-19',
              faces: [
                  { label: 'front', value: null },
                  { label: 'left', value: left[0] },
                  { label: 'right', value: null },
                  { label: 'back', value: back[2] },
                  { label: 'top', value: top2[0] },
                  { label: 'bottom', value: null }
              ],
              position: { x: 0, y: 0, z: -TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-20',
              faces: [
                  { label: 'front', value: null },
                  { label: 'left', value: null },
                  { label: 'right', value: null },
                  { label: 'back', value: back[1] },
                  { label: 'top', value: top2[1] },
                  { label: 'bottom', value: null }
              ],
              position: { x: TRANSLATION_UNITY, y: 0, z: -TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-21',
              faces: [
                  { label: 'front', value: null },
                  { label: 'left', value: null },
                  { label: 'right', value: right[2] },
                  { label: 'back', value: back[0] },
                  { label: 'top', value: top2[2] },
                  { label: 'bottom', value: null }
              ],
              position: { x: 2 * TRANSLATION_UNITY, y: 0, z: -TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-22',
              faces: [
                  { label: 'front', value: null },
                  { label: 'left', value: left[3] },
                  { label: 'right', value: null },
                  { label: 'back', value: back[5] },
                  { label: 'top', value: null },
                  { label: 'bottom', value: null }
              ],
              position: { x: 0, y: TRANSLATION_UNITY, z: -TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-23',
              faces: [
                  { label: 'front', value: null },
                  { label: 'left', value: null },
                  { label: 'right', value: null },
                  { label: 'back', value: back[4] },
                  { label: 'top', value: null },
                  { label: 'bottom', value: null }
              ],
              position: { x: TRANSLATION_UNITY, y: TRANSLATION_UNITY, z: -TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-24',
              faces: [
                  { label: 'front', value: null },
                  { label: 'left', value: null },
                  { label: 'right', value: right[5] },
                  { label: 'back', value: back[3] },
                  { label: 'top', value: null },
                  { label: 'bottom', value: null }
              ],
              position: { x: 2 * TRANSLATION_UNITY, y: TRANSLATION_UNITY, z: -TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-25',
              faces: [
                  { label: 'front', value: null },
                  { label: 'left', value: left[6] },
                  { label: 'right', value: null },
                  { label: 'back', value: back[8] },
                  { label: 'top', value: null },
                  { label: 'bottom', value: bottom[2] }
              ],
              position: { x: 0, y: 2 * TRANSLATION_UNITY, z: -TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-26',
              faces: [
                  { label: 'front', value: null },
                  { label: 'left', value: null },
                  { label: 'right', value: null },
                  { label: 'back', value: back[7] },
                  { label: 'top', value: null },
                  { label: 'bottom', value: bottom[1] }
              ],
              position: { x: TRANSLATION_UNITY, y: 2 * TRANSLATION_UNITY, z: -TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-27',
              faces: [
                  { label: 'front', value: null },
                  { label: 'left', value: null },
                  { label: 'right', value: right[8] },
                  { label: 'back', value: back[6] },
                  { label: 'top', value: null },
                  { label: 'bottom', value: bottom[0] }
              ],
              position: { x: 2 * TRANSLATION_UNITY, y: 2 * TRANSLATION_UNITY, z: -TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
      ]
  ]


  let isGrabbing = false;
  let isSpining = false;