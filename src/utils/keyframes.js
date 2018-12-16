const keyframes = {
  fadeIn: [
    {opacity: 0},
    {opacity: 1}
  ],
  orderFadeIn: [
    {opacity: 0,width: 0},
    {opacity: 1, width: 520}
  ],
  bounceIn: [
    {scale: 0.3},
    {scale: 1.1},
    {scale: 0.9},
    {scale: 1.03},
    {scale: 0.97},
    {scale: 1}
  ],
  zoomIn: [
    {scale: 0},
    {scale: 1}
  ],
  swing: [
    {rotate: '15deg'},
    {rotate: '-10deg'},
    {rotate: '5deg'},
    {rotate: '-5deg'},
    {rotate: '0deg'}
  ],
  rubberBand: [
    {scale: [1, 1]},
    {scale: [1.25, 0.75]},
    {scale: [0.75, 1.25]},
    {scale: [1.15, 0.85]},
    {scale: [0.95, 1.05]},
    {scale: [1.05, 0.95]},
    {scale: [1, 1]}
  ],
  shake: [
    {translate: [0, 0]},
    {translate: [-10, 0]},
    {translate: [10, 0]},
    {translate: [-10, 0]},
    {translate: [10, 0]},
    {translate: [-10, 0]},
    {translate: [10, 0]},
    {translate: [-10, 0]},
    {translate: [10, 0]},
    {translate: [-10, 0]},
    {translate: [0, 0]}
  ],
  flash: [
    {opacity: 1},
    {opacity: 0},
    {opacity: 1},
    {opacity: 0},
    {opacity: 1},
  ],
  pulse: [
    {scale: 1},
    {scale: 1.1},
    {scale: 1},
  ],
  tada: [
    {scale: 1, rotate: '0deg'},
    {scale: 0.9, rotate: '-3deg'},
    {scale: 0.9, rotate: '-3deg'},
    {scale: 1.1, rotate: '3deg'},
    {scale: 1.1, rotate: '-3deg'},
    {scale: 1.1, rotate: '3deg'},
    {scale: 1.1, rotate: '-3deg'},
    {scale: 1.1, rotate: '3deg'},
    {scale: 1.1, rotate: '-3deg'},
    {scale: 1.1, rotate: '3deg'},
    {scale: 1, rotate: '0deg'}
  ],
  verticalDeployment: [
    {height: 0},
    {height:75}
  ],
  rotateHorizontalDeployment: [
    {rotate: '0deg', width: 75},
    {rotate: '-60deg', width: 75},
    {rotate: '-120deg', width: 75},
    {rotate: '-180deg', width: 75},
    {rotate: '-180deg', width: 75},
    {rotate: '-180deg', width: 520}
  ]
}

export default keyframes