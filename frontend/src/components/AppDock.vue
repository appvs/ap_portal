<template>
	<div class="dock">
		<div v-for="(section, idx) in sections" :key="idx">
			<router-link :to="section.link" class="icon">
				<span>{{section.tooltip}}</span>
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
	box-sizing: border-box;
	padding: 20px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border-top: 2px solid #1D2125;
	border-bottom: 2px solid #1D2125;

	span {
		color: #1D2125;
		font-size: 36px;
		font-weight: 600;
		margin: 0 10px;
		border-bottom: 2px solid transparent;
		transition: all .22s ease;

		&:hover {
			border-color: #1D2125;
			// font-size: 40px;
		}
	}
}
</style>