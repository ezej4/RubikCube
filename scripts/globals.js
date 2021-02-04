  // elements
  const $cubic = document.getElementById("cubic");
  const $cubicPlain = document.getElementById("cubic-plain")
  const selectedArea = document.getElementById("cubic-selected-area");
  const animateButton = document.getElementById("animate-button");
  const grabButton = document.getElementById("grab-button");

  // variables
  const MATRIX_COLORS = ['blue', 'red', 'orange', 'green', 'white', 'yellow'];
  const FACE_BY_CUBE = ['front', 'left', 'right', 'back', 'top', 'bottom'];
  const AMOUNT_MINI_CUBES = 27;
  const TRANSLATION_UNITY = 100; /*PX*/

  let matrix = {
      front: Array.from({ length: 9 }).fill(MATRIX_COLORS[0]),
      left: Array.from({ length: 9 }).fill(MATRIX_COLORS[1]),
      right: Array.from({ length: 9 }).fill(MATRIX_COLORS[2]),
      back: Array.from({ length: 9 }).fill(MATRIX_COLORS[3]),
      top: Array.from({ length: 9 }).fill(MATRIX_COLORS[4]),
      bottom: Array.from({ length: 9 }).fill(MATRIX_COLORS[5]),
  }
  const { front, left, right, back, top: top2, bottom } = matrix;

  let ACTUAL_MOVEMENT;

  let miniCubeModel = [
      [ // mini-cube-wall 1
          {
              name: 'mini-cube-1',
              faces: [
                  { id: 'face-1-1', label: 'front', value: front[0], },
                  { id: 'face-1-2', label: 'left', value: left[2], },
                  { id: 'face-1-3', label: 'right', value: null, },
                  { id: 'face-1-4', label: 'back', value: null, },
                  { id: 'face-1-5', label: 'top', value: top2[6], },
                  { id: 'face-1-6', label: 'bottom', value: null, }
              ],
              position: { x: 0, y: 0, z: TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-2',
              faces: [
                  { id: 'face-2-1', label: 'front', value: front[1], },
                  { id: 'face-2-2', label: 'left', value: null, },
                  { id: 'face-2-3', label: 'right', value: null, },
                  { id: 'face-2-4', label: 'back', value: null, },
                  { id: 'face-2-5', label: 'top', value: top2[7], },
                  { id: 'face-2-6', label: 'bottom', value: null, }
              ],
              position: { x: TRANSLATION_UNITY, y: 0, z: TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-3',
              faces: [
                  { id: 'face-3-1', label: 'front', value: front[2], },
                  { id: 'face-3-2', label: 'left', value: null, },
                  { id: 'face-3-3', label: 'right', value: right[0], },
                  { id: 'face-3-4', label: 'back', value: null, },
                  { id: 'face-3-5', label: 'top', value: top2[8], },
                  { id: 'face-3-6', label: 'bottom', value: null, }
              ],
              position: { x: 2 * TRANSLATION_UNITY, y: 0, z: TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-4',
              faces: [
                  { id: 'face-4-1', label: 'front', value: front[3], },
                  { id: 'face-4-2', label: 'left', value: left[5], },
                  { id: 'face-4-3', label: 'right', value: null, },
                  { id: 'face-4-4', label: 'back', value: null, },
                  { id: 'face-4-5', label: 'top', value: null, },
                  { id: 'face-4-6', label: 'bottom', value: null, }
              ],
              position: { x: 0, y: TRANSLATION_UNITY, z: TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-5',
              faces: [
                  { id: 'face-5-1', label: 'front', value: front[4], },
                  { id: 'face-5-2', label: 'left', value: null, },
                  { id: 'face-5-3', label: 'right', value: null, },
                  { id: 'face-5-4', label: 'back', value: null, },
                  { id: 'face-5-5', label: 'top', value: null, },
                  { id: 'face-5-6', label: 'bottom', value: null, }
              ],
              position: { x: TRANSLATION_UNITY, y: TRANSLATION_UNITY, z: TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-6',
              faces: [
                  { id: 'face-6-1', label: 'front', value: front[5], },
                  { id: 'face-6-2', label: 'left', value: null, },
                  { id: 'face-6-3', label: 'right', value: right[3], },
                  { id: 'face-6-4', label: 'back', value: null, },
                  { id: 'face-6-5', label: 'top', value: null, },
                  { id: 'face-6-6', label: 'bottom', value: null, }
              ],
              position: { x: 2 * TRANSLATION_UNITY, y: TRANSLATION_UNITY, z: TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-7',
              faces: [
                  { id: 'face-7-1', label: 'front', value: front[6], },
                  { id: 'face-7-2', label: 'left', value: left[8], },
                  { id: 'face-7-3', label: 'right', value: null, },
                  { id: 'face-7-4', label: 'back', value: null, },
                  { id: 'face-7-5', label: 'top', value: null, },
                  { id: 'face-7-6', label: 'bottom', value: bottom[8], }
              ],
              position: { x: 0, y: 2 * TRANSLATION_UNITY, z: TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-8',
              faces: [
                  { id: 'face-8-1', label: 'front', value: front[7], },
                  { id: 'face-8-2', label: 'left', value: null, },
                  { id: 'face-8-3', label: 'right', value: null, },
                  { id: 'face-8-4', label: 'back', value: null, },
                  { id: 'face-8-5', label: 'top', value: null, },
                  { id: 'face-8-6', label: 'bottom', value: bottom[6], }
              ],
              position: { x: TRANSLATION_UNITY, y: 2 * TRANSLATION_UNITY, z: TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-9',
              faces: [
                  { id: 'face-9-1', label: 'front', value: front[8], },
                  { id: 'face-9-2', label: 'left', value: null, },
                  { id: 'face-9-3', label: 'right', value: right[6], },
                  { id: 'face-9-4', label: 'back', value: null, },
                  { id: 'face-9-5', label: 'top', value: null, },
                  { id: 'face-9-6', label: 'bottom', value: bottom[6], }
              ],
              position: { x: 2 * TRANSLATION_UNITY, y: 2 * TRANSLATION_UNITY, z: TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
      ],

      [ // mini-cube-wall 2
          {
              name: 'mini-cube-10',
              faces: [
                  { id: 'face-10-1', label: 'front', value: null, },
                  { id: 'face-10-2', label: 'left', value: left[1], },
                  { id: 'face-10-3', label: 'right', value: null, },
                  { id: 'face-10-4', label: 'back', value: null, },
                  { id: 'face-10-5', label: 'top', value: top2[3], },
                  { id: 'face-10-6', label: 'bottom', value: null, }
              ],
              position: { x: 0, y: 0, z: 0 },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-11',
              faces: [
                  { id: 'face-11-1', label: 'front', value: null, },
                  { id: 'face-11-2', label: 'left', value: null, },
                  { id: 'face-11-3', label: 'right', value: null, },
                  { id: 'face-11-4', label: 'back', value: null, },
                  { id: 'face-11-5', label: 'top', value: top2[4], },
                  { id: 'face-11-6', label: 'bottom', value: null, }
              ],
              position: { x: TRANSLATION_UNITY, y: 0, z: 0 },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-12',
              faces: [
                  { id: 'face-12-1', label: 'front', value: null, },
                  { id: 'face-12-2', label: 'left', value: null, },
                  { id: 'face-12-3', label: 'right', value: right[1], },
                  { id: 'face-12-4', label: 'back', value: null, },
                  { id: 'face-12-5', label: 'top', value: top2[5], },
                  { id: 'face-12-6', label: 'bottom', value: null, }
              ],
              position: { x: 2 * TRANSLATION_UNITY, y: 0, z: 0 },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-13',
              faces: [
                  { id: 'face-13-1', label: 'front', value: null, },
                  { id: 'face-13-2', label: 'left', value: left[4], },
                  { id: 'face-13-3', label: 'right', value: null, },
                  { id: 'face-13-4', label: 'back', value: null, },
                  { id: 'face-13-5', label: 'top', value: null, },
                  { id: 'face-13-6', label: 'bottom', value: null, }
              ],
              position: { x: 0, y: TRANSLATION_UNITY, z: 0 },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-14',
              faces: [
                  { id: 'face-14-1', label: 'front', value: null, },
                  { id: 'face-14-2', label: 'left', value: null, },
                  { id: 'face-14-3', label: 'right', value: null, },
                  { id: 'face-14-4', label: 'back', value: null, },
                  { id: 'face-14-5', label: 'top', value: null, },
                  { id: 'face-14-6', label: 'bottom', value: null, }
              ],
              position: { x: TRANSLATION_UNITY, y: TRANSLATION_UNITY, z: 0 },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-15',
              faces: [
                  { id: 'face-15-1', label: 'front', value: null, },
                  { id: 'face-15-2', label: 'left', value: null, },
                  { id: 'face-15-3', label: 'right', value: right[4], },
                  { id: 'face-15-4', label: 'back', value: null, },
                  { id: 'face-15-5', label: 'top', value: null, },
                  { id: 'face-15-6', label: 'bottom', value: null, }
              ],
              position: { x: 2 * TRANSLATION_UNITY, y: TRANSLATION_UNITY, z: 0 },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-16',
              faces: [
                  { id: 'face-16-1', label: 'front', value: null, },
                  { id: 'face-16-2', label: 'left', value: left[7], },
                  { id: 'face-16-3', label: 'right', value: null, },
                  { id: 'face-16-4', label: 'back', value: null, },
                  { id: 'face-16-5', label: 'top', value: null, },
                  { id: 'face-16-6', label: 'bottom', value: bottom[5], }
              ],
              position: { x: 0, y: 2 * TRANSLATION_UNITY, z: 0 },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-17',
              faces: [
                  { id: 'face-17-1', label: 'front', value: null, },
                  { id: 'face-17-2', label: 'left', value: null, },
                  { id: 'face-17-3', label: 'right', value: null, },
                  { id: 'face-17-4', label: 'back', value: null, },
                  { id: 'face-17-5', label: 'top', value: null, },
                  { id: 'face-17-6', label: 'bottom', value: bottom[4], }
              ],
              position: { x: TRANSLATION_UNITY, y: 2 * TRANSLATION_UNITY, z: 0 },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-18',
              faces: [
                  { id: 'face-18-1', label: 'front', value: null, },
                  { id: 'face-18-2', label: 'left', value: null, },
                  { id: 'face-18-3', label: 'right', value: right[7], },
                  { id: 'face-18-4', label: 'back', value: null, },
                  { id: 'face-18-5', label: 'top', value: null, },
                  { id: 'face-18-6', label: 'bottom', value: bottom[3], }
              ],
              position: { x: 2 * TRANSLATION_UNITY, y: 2 * TRANSLATION_UNITY, z: 0 },
              rotation: { x: 0, y: 0, z: 0 }
          },
      ],

      [ // mini-cube-wall 3
          {
              name: 'mini-cube-19',
              faces: [
                  { id: 'face-19-1', label: 'front', value: null, },
                  { id: 'face-19-2', label: 'left', value: left[0], },
                  { id: 'face-19-3', label: 'right', value: null, },
                  { id: 'face-19-4', label: 'back', value: back[2], },
                  { id: 'face-19-5', label: 'top', value: top2[0], },
                  { id: 'face-19-6', label: 'bottom', value: null, }
              ],
              position: { x: 0, y: 0, z: -TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-20',
              faces: [
                  { id: 'face-20-1', label: 'front', value: null, },
                  { id: 'face-20-2', label: 'left', value: null, },
                  { id: 'face-20-3', label: 'right', value: null, },
                  { id: 'face-20-4', label: 'back', value: back[1], },
                  { id: 'face-20-5', label: 'top', value: top2[1], },
                  { id: 'face-20-6', label: 'bottom', value: null, }
              ],
              position: { x: TRANSLATION_UNITY, y: 0, z: -TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-21',
              faces: [
                  { id: 'face-21-1', label: 'front', value: null, },
                  { id: 'face-21-2', label: 'left', value: null, },
                  { id: 'face-21-3', label: 'right', value: right[2], },
                  { id: 'face-21-4', label: 'back', value: back[0], },
                  { id: 'face-21-5', label: 'top', value: top2[2], },
                  { id: 'face-21-6', label: 'bottom', value: null, }
              ],
              position: { x: 2 * TRANSLATION_UNITY, y: 0, z: -TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-22',
              faces: [
                  { id: 'face-22-1', label: 'front', value: null, },
                  { id: 'face-22-2', label: 'left', value: left[3], },
                  { id: 'face-22-3', label: 'right', value: null, },
                  { id: 'face-22-4', label: 'back', value: back[5], },
                  { id: 'face-22-5', label: 'top', value: null, },
                  { id: 'face-22-6', label: 'bottom', value: null, }
              ],
              position: { x: 0, y: TRANSLATION_UNITY, z: -TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-23',
              faces: [
                  { id: 'face-23-1', label: 'front', value: null, },
                  { id: 'face-23-2', label: 'left', value: null, },
                  { id: 'face-23-3', label: 'right', value: null, },
                  { id: 'face-23-4', label: 'back', value: back[4], },
                  { id: 'face-23-5', label: 'top', value: null, },
                  { id: 'face-23-6', label: 'bottom', value: null, }
              ],
              position: { x: TRANSLATION_UNITY, y: TRANSLATION_UNITY, z: -TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-24',
              faces: [
                  { id: 'face-24-1', label: 'front', value: null, },
                  { id: 'face-24-2', label: 'left', value: null, },
                  { id: 'face-24-3', label: 'right', value: right[5], },
                  { id: 'face-24-4', label: 'back', value: back[3], },
                  { id: 'face-24-5', label: 'top', value: null, },
                  { id: 'face-24-6', label: 'bottom', value: null, }
              ],
              position: { x: 2 * TRANSLATION_UNITY, y: TRANSLATION_UNITY, z: -TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-25',
              faces: [
                  { id: 'face-25-1', label: 'front', value: null, },
                  { id: 'face-25-2', label: 'left', value: left[6], },
                  { id: 'face-25-3', label: 'right', value: null, },
                  { id: 'face-25-4', label: 'back', value: back[8], },
                  { id: 'face-25-5', label: 'top', value: null, },
                  { id: 'face-25-6', label: 'bottom', value: bottom[2], }
              ],
              position: { x: 0, y: 2 * TRANSLATION_UNITY, z: -TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-26',
              faces: [
                  { id: 'face-26-1', label: 'front', value: null, },
                  { id: 'face-26-2', label: 'left', value: null, },
                  { id: 'face-26-3', label: 'right', value: null, },
                  { id: 'face-26-4', label: 'back', value: back[7], },
                  { id: 'face-26-5', label: 'top', value: null, },
                  { id: 'face-26-6', label: 'bottom', value: bottom[1], }
              ],
              position: { x: TRANSLATION_UNITY, y: 2 * TRANSLATION_UNITY, z: -TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
          {
              name: 'mini-cube-27',
              faces: [
                  { id: 'face-27-1', label: 'front', value: null, },
                  { id: 'face-27-2', label: 'left', value: null, },
                  { id: 'face-27-3', label: 'right', value: right[8], },
                  { id: 'face-27-4', label: 'back', value: back[6], },
                  { id: 'face-27-5', label: 'top', value: null, },
                  { id: 'face-27-6', label: 'bottom', value: bottom[0], }
              ],
              position: { x: 2 * TRANSLATION_UNITY, y: 2 * TRANSLATION_UNITY, z: -TRANSLATION_UNITY },
              rotation: { x: 0, y: 0, z: 0 }
          },
      ]
  ]

  let isCubeMoving = false;
  let isGrabbing = false;
  let isSpining = false;