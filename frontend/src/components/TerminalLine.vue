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
	padding: 7px 10px;
	background: #2C333A;
	border-radius: 12px;

	span {
		color: teal;
		font-weight: 600;
	}
}
</style>