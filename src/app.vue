<template>
  <div id="app">
    <container v-for="(page, index) in pageData" :key="index" :backgroundColor="page.bgColor" :effect="page.effect" :labelOptions="page.labelOptions"></container>
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
         effect: 'fadeIn',
         labelOptions: {text: 'Hello world', anchor: [0.5, 0.5], pos: [300, 300], font: 'bold 64px Arial', fillColor: '#fff'},
       },
       {
         bgColor: '#e8c3b9',
         effect: 'orderFadeIn',
         labelOptions: {text: 'Sunny morinings', anchor: [0, 0.5], pos: [40, 300], font: 'bold 64px Arial', fillColor: '#fff'},
       },
       {
         bgColor: '#224a54',
         effect: 'bounceIn',
         labelOptions: {text: 'Great Thinker', anchor: [0.5, 0.5], pos: [300, 300], font: 'bold 64px Arial', fillColor: '#fff'},
       },
       {
         bgColor: '#1a1a1a',
         effect: 'zoomIn',
         labelOptions: {text: 'Beautiful Questions', anchor: [0.5, 0.5], pos: [300, 300], font: 'bold 64px Arial', fillColor: '#fff'},
       },
       {
         bgColor: '#f3e9c6',
         effect: 'swing',
         labelOptions: {text: 'Reality is broken', anchor: [0.5, 0.5], pos: [300, 300], font: 'bold 64px Arial', fillColor: '#fff'},
       },
       {
         bgColor: '#c1605c',
         effect: 'rubberBand',
         labelOptions: {text: 'Coffee mornings', anchor: [0.5, 0.5], pos: [300, 300], font: 'bold 64px Arial', fillColor: '#fff'},
       },
       {
         bgColor: '#45383c',
         effect: 'shake',
         labelOptions: {text: 'Domino Dreams', anchor: [0.5, 0.5], pos: [300, 300], font: 'bold 64px Arial', fillColor: '#fff'},
       },
       {
         bgColor: '#98bec8',
         effect: 'flash',
         labelOptions: {text: 'A new production', anchor: [0.5, 0.5], pos: [300, 300], font: 'bold 64px Arial', fillColor: '#fff'},
       },
       {
         bgColor: '#1a1a1a',
         effect: 'pulse',
         labelOptions: {text: 'Hello Goodbye', anchor: [0.5, 0.5], pos: [300, 300], font: 'bold 64px Arial', fillColor: '#fff'},
       },
       {
         bgColor: '#224a54',
         effect: 'tada',
         labelOptions: {text: 'Rising Strong', anchor: [0.5, 0.5], pos: [300, 300], font: 'bold 64px Arial', fillColor: '#fff'},
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
