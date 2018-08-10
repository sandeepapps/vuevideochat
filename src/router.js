import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Room from './views/Room.vue'
import store from './store'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/room/:room',
      name: 'room',
      component: Room,
      props: true,
      beforeEnter: (to, from, next) => {
        // check if name is not set
        if (!store.getters.getState.name) {
          next({
            name: 'home',
            query: {
              room: to.params.room
            }
          })
        }
        next()
      }
    }
  ]
})
