import spritejs from 'spritejs'
import keyframes from './keyframes'

const {Layer, Label, Sprite} = spritejs 

const addLabel = (context, effect, options) => {
  const label = new Label(options)
  addAnimate(label, effect)
  const layer = new Layer({context})
  layer.append(label)
}

const addAnimate = (label, effect) => {
  label.animate(keyframes[effect], {
    duration: 1200,
    iterations: Infinity,
    easing: 'ease-in-out'
  })
}

export default addLabel