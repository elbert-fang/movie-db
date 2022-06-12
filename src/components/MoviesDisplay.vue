<template>
  <div class="wrapper">

    <div class="flex">
      <p>10 movie boxes here</p>
      <button class="rounded-full"
        @click="getMovies">LOAD</button>
    </div>

    <div>
      <ol>
        <li v-for="movie in movies"
          :key="movie.id">
          {{movie.title}}
          {{movie.vote_average}}
        </li>
      </ol>
    </div>

  </div>

</template>

<script>

export default {

  data() {
    return {
      errorMsg: '',
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
        const response = await fetch(`${baseurl}`)
        const data = await response.json()
        console.log(data.results)
        this.movies = data.results.slice(0, 10)
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
