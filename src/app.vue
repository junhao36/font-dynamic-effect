<template>
  <div id="app">
    <container v-for="(page, index) in pageData" :key="index" :backgroundColor="page.bgColor" :text="page.text" :rect="page.rect" :index="index"></container>
  </div>
</template>

<script>
import container from './components/container'

export default {
  name: 'app',
  components: {
    container
  },
  data() {
    return {
      pageData: [
       {
         bgColor: '#9ba5b5',
         text: {
           effect: 'fadeIn',
           options: {text: 'Hello world', anchor: [0.5, 0.5], pos: [300, 300], font: 'bold 64px Arial', fillColor: '#fff', zIndex: 2}
         },
         rect: {
           effect: 'verticalDeployment',
           options: {anchor: [0.5, 0.5], pos: [300, 300], size: [520, 75], bgcolor: 'rgba(0, 0, 0, 0.7)', zIndex: 1}
         }
       },
       {
         bgColor: 'rgb(151, 81, 175)',
         text: {
           effect: 'fadeIn',
           options: {text: 'Hello Spritejs!', anchor: [0.5, 0.5], pos: [300, 300], font: 'bold 64px Arial', fillColor: '#fff', zIndex: 2}
         },
         rect: {
           effect: 'rotateHorizontalDeployment',
           options: {anchor: [0.5, 0.5], pos: [300, 300], size: [520, 75], bgcolor: '#00dfb0', zIndex: 1}
         }
       },
       {
         bgColor: '#e8c3b9',
         text: {
           effect: 'orderFadeIn',
           options: {text: 'Sunny morinings', anchor: [0, 0.5], pos: [40, 300], font: 'bold 64px Arial', fillColor: '#fff'}
         }
       },
       {
         bgColor: '#224a54',
         text: {
           effect: 'bounceIn',
           options: {text: 'Great Thinker', anchor: [0.5, 0.5], pos: [300, 300], font: 'bold 64px Arial', fillColor: '#fff'}
         }
       },
       {
         bgColor: '#1a1a1a',
         text: {
           effect: 'zoomIn',
           options: {text: 'Beautiful Questions', anchor: [0.5, 0.5], pos: [300, 300], font: 'bold 64px Arial', fillColor: '#fff'}
         }
       },
       {
         bgColor: '#f3e9c6',
         text: {
           effect: 'swing',
           options: {text: 'Reality is broken', anchor: [0.5, 0.5], pos: [300, 300], font: 'bold 64px Arial', fillColor: '#fff'}
         }
       },
       {
         bgColor: '#c1605c',
         text: {
           effect: 'rubberBand',
           options: {text: 'Coffee mornings', anchor: [0.5, 0.5], pos: [300, 300], font: 'bold 64px Arial', fillColor: '#fff'}
         }
       },
       {
         bgColor: '#45383c',
         text: {
           effect: 'shake',
           options: {text: 'Domino Dreams', anchor: [0.5, 0.5], pos: [300, 300], font: 'bold 64px Arial', fillColor: '#fff'}
         }
       },
       {
         bgColor: '#98bec8',
         text: {
           effect: 'flash',
           options: {text: 'A new production', anchor: [0.5, 0.5], pos: [300, 300], font: 'bold 64px Arial', fillColor: '#fff'}
         }
       },
       {
         bgColor: '#1a1a1a',
         text: {
           effect: 'pulse',
           options: {text: 'Hello Goodbye', anchor: [0.5, 0.5], pos: [300, 300], font: 'bold 64px Arial', fillColor: '#fff'}
         }
       },
       {
         bgColor: '#224a54',
         text: {
           effect: 'tada',
           options: {text: 'Rising Strong', anchor: [0.5, 0.5], pos: [300, 300], font: 'bold 64px Arial', fillColor: '#fff'}
         }
       }
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
  #app {
    height: 100%;
  }
</style>
