<template>
  <div class="max-w-screen-2xl mx-auto"
    id="app">
    <header-section />
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HeaderSection from './components/HeaderSection.vue'


export default {
  name: 'App',
  components: {
    'header-section': HeaderSection,
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
