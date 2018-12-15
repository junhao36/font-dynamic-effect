<template>
  <div class="container" :style="containerStyle">
    <canvas ref="containerCanvas" width="600" height="600"></canvas>
    <!-- <font-label :canvasContext="canvasContext" :text="'Sunny morinings'"></font-label> -->
  </div>
</template>

<script>
  // import fontLabel from '../common/font-label'
  import addLabel from '../../utils/font-effect'
  export default {
    props: ['backgroundColor', 'labelOptions' , 'effect'],
    components: {
      // fontLabel
    },
    data() {
      return {
        canvasContext: null 
      }
    },
    computed: {
      containerStyle() {
        return {
          backgroundColor: this.backgroundColor
        }
      }
    },
    mounted() {
      this.canvasContext = this.$refs.containerCanvas.getContext('2d')
      addLabel(this.canvasContext, this.effect, this.labelOptions)
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
