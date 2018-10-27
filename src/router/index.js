import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/LoginPage'
import MainPage from '@/components/MainPage'
import Home from '@/components/Home'
import Register from '@/components/Register'
import HovPage from '@/components/HovPage'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'Index',
			component: MainPage
		},
		{
			path: '/login',
			name: 'Login',
			component: LoginPage,
		},
		{
			path: '/register',
			name: 'Register',
			component: Register
		},
		{
			path: '/main',
			name: 'main',
			component: MainPage
        },
        {
			path: '/guild',
			name: 'guild',
			component: MainPage
        },
        {
			path: '/hov',
			name: 'Error',
			component: HovPage
		}
	]
})
