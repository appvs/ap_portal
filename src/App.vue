<template>
	<h1>АП_ПОРТАЛ</h1>
	<div class="dock">
		<a href="#" class="icon" v-for="(section, idx) in sections" :key="idx">
			<span class="tooltip">{{section.tooltip}}</span>
			<img :src="section.icon">
		</a>
	</div>
</template>

<script>
import arch from './assets/linux-arch.svg'
import ubuntu from './assets/linux-ubuntu.svg'
import linux from './assets/linux.svg'
import vita from './assets/vita.svg'
import anydo from './assets/anydo.svg'
// import img5 from './assets/'
// import img6 from './assets/'
// import img7 from './assets/'
// import img8 from './assets/'

export default {
	data() {
		return {
			sections: [
				{
					icon: arch,
					tooltip: "Arch Linux (и его производные)"
				},
				{
					icon: ubuntu,
					tooltip: "Ubuntu (и его производные)"
				},
				{
					icon: linux,
					tooltip: "Общие настройки Linux"
				},
				{
					icon: vita,
					tooltip: "Vita"
				},
				{
					icon: anydo,
					tooltip: "ToDo"
				},
			],
		}
	}
}
</script>

<style lang="scss">
// #ead0a8
// #b69f66
// #6b5428
// #76552b
// #402905
* {
	margin: 0;
	padding: 0;
	font-family: Arial, Helvetica, sans-serif;
}

body {
	background:#ead0a8;
	color: #402905;
}

h1 {
	text-align: center;
	margin: 20px 0;
	font-size: 44px;
	border-bottom: 2px solid #402905;
}

.dock {
	max-width: 75%;
	padding: 5px 10px;
	background-color: rgba($color: #402905, $alpha: .5);
	position: fixed;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	margin-bottom: 10px;
	border-radius: 12px;
	display: flex;
	align-items: center;
	justify-content: center;

	a.icon {
		display: block;
		width: 64px;
		height: 64px;
		margin: 0 10px;
		transition: all .2s ease-in-out;
		color: #dedede;
		text-decoration: none;
		position: relative;
		
		.tooltip {
			display: none;
			position: absolute;
			font-size: 10px;
			width: 200%;
			top: -40px;
			left: 50%;
			transform: translateX(-50%);
			text-align: center;
			background: #000;
			padding: 5px 0;
			border-radius: 12px;

			&::after {
				content: "";
				width: 0;
				position: absolute;
				display: block;
				border: 15px solid #000;
				border-left-color: transparent;
				border-right-color: transparent;
				border-bottom-color: transparent;
				bottom: -25px;
				left: 50%;
				transform: translateX(-50%);
			}
		}

		img {
			width: 100%;
		}

		&:hover {
			transform: scale(1.6) translateY(-10px);

			.tooltip {
				// display: block;
			}
		}
	}
}
</style>
