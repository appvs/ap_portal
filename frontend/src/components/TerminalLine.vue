<template>
	<div class="lines">
		<h3>{{ title }}</h3>
		<div class="copy-line" v-for="line in lines" :key="line">
			<span>~</span>
			{{ line }}
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: String,
		lines: Array
	}
}
</script>

<style lang="scss" scoped>
.lines {
	width: 95%;
	margin: 0 auto 20px auto;
}

.copy-line {
	margin: 5px auto 5px auto;
	background: #DEE4EA;
	border-radius: 12px;
	font-size: 22px;

	&:last-child {
		margin-bottom: 50px;
	}

	span {
		color: teal;
		font-weight: 600;
	}
}
</style>