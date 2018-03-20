import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/views/HomeView'
import LoginView from '@/views/LoginView'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',

      name: 'HomeView',

      component: HomeView
    },

    {
      path: '/login',

      name: 'LoginView',

      component: LoginView
    }
  ]
})
