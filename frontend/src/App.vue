<template>
	<h1>
		<router-link to="/">АП_ПОРТАЛ</router-link>
	</h1>

	<router-view></router-view>
	
	<dock :sections="sections"></dock>
</template>

<script>
import arch from './assets/linux-arch.svg'
import ubuntu from './assets/linux-ubuntu.svg'
import linux from './assets/linux.svg'
import vita from './assets/vita.svg'
import anydo from './assets/anydo.svg'
import Dock from './components/AppDock.vue'

export default {
	components: { Dock },
	
	data() {
		return {
			sections: [
				{
					icon: arch,
					link: '/arch',
					tooltip: "Arch Linux (и его производные)"
				},
				{
					icon: ubuntu,
					link: '/ubuntu',
					tooltip: "Ubuntu (и его производные)"
				},
				{
					icon: linux,
					link: '/linux',
					tooltip: "Общие настройки Linux"
				},
				{
					icon: vita,
					link: '/vita',
					tooltip: "Vita"
				},
				{
					icon: anydo,
					link: '/todo',
					tooltip: "ToDo"
				},
			],
		}
	},
}
</script>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
	font-family: Arial, Helvetica, sans-serif;
	color: #FAF4D3;
}

body {
	background:#004643;
}

h1 {
	text-align: center;
	width: 65%;
	margin: 20px auto;
	font-size: 40px;
	border-bottom: 2px solid #FAF4D3;
}

h2 {
	width: 90%;
	text-align: left;
	margin: 0 auto 12px;
	font-size: 30px;
	border-color: transparent;
}

a {
	text-decoration: none;
}

.content {
	position: relative;
	top: -2px;
	width: 90%;
	margin: 0 auto;
	min-height: 200px;
	height: 620px;
	border-top-color: transparent;
	box-sizing: border-box;
	padding: 10px;
	overflow-y: scroll;
	box-shadow: 0 0 15px #0C1618;
	border-radius: 12px;
}
</style>
