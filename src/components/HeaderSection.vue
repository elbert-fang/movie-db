<template>
  <header class="flex justify-between px-4 lg:px-2">

    <div class="logo ">
      <img alt="Top 10 Movies Logo"
        width="100"
        src="../assets/logo.svg">
    </div>

    <div class="search">
      <input v-model="search"
        placeholder="Search movies" />
    </div>

  </header>

</template>

<script>
export default {
  name: 'HeaderSection',
  data() {
    return {
      search: ''
    }
  }
}
</script>

<style scoped>
</style>