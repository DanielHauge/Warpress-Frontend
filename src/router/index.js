import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/LoginPage'
import MainPage from '@/components/MainPage'
import GuildPage from '@/components/GuildPage'
import ProfilePage from '@/components/ProfilePage'
import RegisterGuild from '@/components/RegisterGuild'
import Home from '@/components/Home'
import Register from '@/components/Register'
import HovPage from '@/components/HovPage'

Vue.use(Router)

export default new Router({
    mode: 'hash',
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
			name: 'Main',
			component: MainPage
        },
        {
			path: '/guild',
			name: 'Guild',
			component: GuildPage
        },
        {
			path: '/registerguild',
			name: 'RegisterGuild',
			component: RegisterGuild
        },
        {
			path: '/inspect/:realm/:name',
			name: 'Profile',
            component: ProfilePage,
            props: true
        },
        {
			path: '/hov',
			name: 'Error',
			component: HovPage
		}
	]
})
