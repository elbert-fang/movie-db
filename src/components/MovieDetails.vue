<template>
  <div class="wrapper">
    <div class="flex justify-contenr-center align-itmes-center">
      <p>MOVIE DETAILS {{ movieInfo }}</p>
    </div>
  </div>

</template>

<script>
export default {

  data() {
    return {
      moiveInfo:{}
    }
  },

  beforeCreate(){
    this.getMovieDetails()
  },

  methods: {
      async getMovieDetails() {
        const apiKey = '9245d61880ac66dcb9d17a041a508a3c'
        const baseurl = 'https://api.themoviedb.org/3/movie/' + this.$route.params.id+ '?api_key=' + apiKey + '&language=en-US'
        console.log(baseurl)

        this.errorMsg = '' // reset the error msg
        this.loading = true

        try {
          const response = await fetch(`${baseurl}`)
          const data = await response.json()
          console.log(data)
        } catch (error) {
          this.errorMsg = 'There was an error, please try again'
          console.log(error)
        } finally {
          this.loading = false
        }
      }
    },

}
</script>