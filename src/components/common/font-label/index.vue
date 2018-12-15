<template>
  
</template>

<script>
  import spritejs from 'spritejs'
  export default {
    props: ['canvasContext', 'text'],
    data() {
      return {
        layer: null,
        sprite: null,
        label: null
      }
    },
    watch: {
      canvasContext(val) {
        if (val) {
          const {Layer, Label, Sprite} = spritejs
          this.layer = new Layer({context: val})
          this.label = new Label(this.text)
          this.label.attr({
            anchor: [0, 0.5],
            pos: [40, 300],
            font: 'bold 64px Arial',
            fillColor: '#fff',
          })
          this.label.animate([
            {
              opacity: 0,
              width: 0
            },
            {
              opacity: 1,
              width: 520
            }
          ], {
            duration: 1200,
            iterations: Infinity,
            easing: 'ease-out'
          })
          this.layer.append(this.label)
        }
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
