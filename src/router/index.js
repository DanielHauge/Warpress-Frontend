import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/LoginPage'
import MainPage from '@/components/MainPage'
import Home from '@/components/Home'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'Index',
			component: LoginPage
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
		},
		{
			path: '/Main',
			name: 'Main',
			component: MainPage
		}
	]
})
