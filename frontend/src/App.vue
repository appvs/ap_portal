<template>
	<div>
		<h1><router-link to="/">АП_ПОРТАЛ</router-link></h1>
		<dock :sections="sections"></dock>

		<router-view></router-view>
	</div>
</template>

<script>
import dock from './components/AppDock.vue'
import axios from 'axios'

export default {
	components: { dock },
	
	data() {
		return {
			sections: [
				{
					link: '/arch',
					tooltip: "Manjaro"
				},
				// {
				// 	link: '/ubuntu',
				// 	tooltip: "Pop!_OS"
				// },
				{
					link: '/dev',
					tooltip: "Dev"
				},
				{
					link: '/vita',
					tooltip: "Vita"
				},
				{
					link: '/todo',
					tooltip: "ToDo"
				},
			],
		}
	},

	mounted() {
		// this.testGet()
	},

	methods: {
		async testGet() {
			axios.get('http://localhost:8000')
			.then( response => {
				return response.data
			})
		}
	}
}
</script>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
	font-family: Arial, Helvetica, sans-serif;
	color: #1D2125;
}

body {
	background:#DEE4EA;
}

h1 {
	text-align: center;
	width: 75%;
	margin: 20px auto 20px auto;
	font-size: 70px;
}

h2 {
	text-align: center;
	margin: 20px auto 12px;
	font-size: 46px;
	border-color: transparent;
}

h3 {
	font-size: 40px;
}

a {
	text-decoration: none;
}

.content {
	position: relative;
	width: 100%;
	border-top-color: transparent;
	box-sizing: border-box;
	padding: 10px;
}
</style>
