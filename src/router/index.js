import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Login
    },
    {
      path: '/Login/:id',
      name: 'Login',
      component: Home,
      props: true
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    }
  ]
})
