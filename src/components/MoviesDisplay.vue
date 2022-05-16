<template>
  <div class="flex">54
    <p>10 movie boxes here</p>
    <button class="rounded-full"
      @click="getMovies">LOAD</button>
  </div>

</template>

<script>

export default {

  data() {
    return {
      loading: false,
      movies: []
    }
  },

  methods: {
    async getMovies() {
      const apiKey = '9245d61880ac66dcb9d17a041a508a3c'
      const baseurl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + apiKey + '&language=en-US&page=1'

      this.errorMsg = '' // reset the error msg
      this.loading = true

      try {
        const result = await fetch(`${baseurl}`)
        console.log(result)
        const json = await result.json()
        console.log(json)
        this.moives = json.results
      } catch (error) {
        this.errorMsg = 'There was an error, please try again'
        console.log(error)
      } finally {
        this.loading = false
      }
    }
  }

}

</script>
