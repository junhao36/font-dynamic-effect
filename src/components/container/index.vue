<template>
  <div class="container" :id="`container-${index}`" :style="containerStyle">
    <canvas ref="containerCanvas" width="600" height="600"></canvas>
    <!-- <font-label :canvasContext="canvasContext" :text="'Sunny morinings'"></font-label> -->
  </div>
</template>

<script>
  // import fontLabel from '../common/font-label'
  import addElement from '../../utils/font-effect'
  export default {
    props: ['backgroundColor', 'text' , 'rect', 'index'],
    components: {
      // fontLabel
    },
    data() {
      return {
        canvasContext: null,
        layer: null,
        animate: null
      }
    },
    computed: {
      containerStyle() {
        return {
          backgroundColor: this.backgroundColor
        }
      }
    },
    methods: {
      async addEffect() {
        this.canvasContext = this.$refs.containerCanvas.getContext('2d')
        let result
        if (this.rect) {
          result = addElement(this.canvasContext, this.rect.effect, this.rect.options)
          this.layer = result.layer
          this.animate = result.animate
          await this.animate.finished
        }
        result = addElement(this.canvasContext, this.text.effect, this.text.options, this.layer)
        this.layer = result.layer
        this.animate = result.animate
        await this.animate.finished
        this.layer = null
        this.animate = null
        this.addEffect()
      }
    },
    mounted() {
      this.addEffect()
    }
  }
</script>

<style lang="less" scoped>
  .container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
