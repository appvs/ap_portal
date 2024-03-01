<template>
	<div class="dock">
		<div v-for="(section, idx) in sections" :key="idx">
			<router-link :to="section.link" class="icon">
				<span class="tooltip">{{section.tooltip}}</span>
				<img :src="section.icon">
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		sections: Array
	}
}
</script>

<style lang="scss" scoped>
.dock {
	max-width: 75%;
	padding: 5px 10px;
	background-color: rgba($color: #0C1618, $alpha: .5);
	position: fixed;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	margin-bottom: 10px;
	border-radius: 12px;
	display: flex;
	align-items: center;
	justify-content: center;

	.icon {
		display: block;
		width: 64px;
		height: 64px;
		margin: 0 10px;
		transition: all .2s ease-in-out;
		color: #dedede;
		text-decoration: none;
		cursor: pointer;
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