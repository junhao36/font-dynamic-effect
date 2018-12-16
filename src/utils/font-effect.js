import spritejs from 'spritejs'
import keyframes from './keyframes'

const {Layer, Label, Sprite} = spritejs 

const addElement = (context, effect, options, layer) => {
  const element = options.text ? new Label(options) : new Sprite(options)
  const animate = addAnimate(element, effect)
  const _layer = layer || new Layer({context})
  element.on('click', (evt) => {
    element.attr('border', [4, 'blue']);
  })
  _layer.append(element)
  return {layer: _layer, animate, element}
}

const addAnimate = (label, effect) => {
  const animate = label.animate(keyframes[effect], {
    duration: 1000,
    iterations: 1,
    easing: 'ease-in-out'
  })
  return animate
}

export default addElement