import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieDetails from '@/components/MovieDetails.vue'
import MoviesDisplay from '@/components/MoviesDisplay.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: MoviesDisplay },
  { path: '/movie/:id', component: MovieDetails }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
