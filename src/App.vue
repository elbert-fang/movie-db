<template>
  <div class="max-w-screen-2xl mx-auto"
    id="app">
    <header-section />
    <movies-display />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HeaderSection from './components/HeaderSection.vue'
import MoviesDisplay from './components/MoviesDisplay.vue'

export default {
  name: 'App',
  components: {
    'header-section': HeaderSection,
    'movies-display': MoviesDisplay
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
