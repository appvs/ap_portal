import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import("./views/AppHome.vue")
		},
		{
			path: '/arch',
			name: 'arch',
			component: () => import("./views/AppArch.vue")
		},
		{
			path: '/ubuntu',
			name: 'ubuntu',
			component: () => import("./views/AppUbuntu.vue")
		},
		{
			path: '/linux',
			name: 'linux',
			component: () => import("./views/AppDev.vue")
		},
		{
			path: '/vita',
			name: 'vita',
			component: () => import("./views/AppVita.vue")
		},
		{
			path: '/todo',
			name: 'todo',
			component: () => import("./views/AppToDo.vue")
		}
	]
})

export default router