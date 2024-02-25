<template>
	<button class="F2_20">
		{{ First }}
	</button>
</template>

<script>
export default {
	props: ['First'],
};
</script>

<style lang="scss" scoped>
button {
	color: $t_secondary;
	background-color: $Fifth;
	border: 1px solid $Fifth;

	padding: 1px;
    margin: 0 auto;

	width: 90%;
	display: flex;
	justify-content: center;
	border-radius: 5px;
}
</style>
