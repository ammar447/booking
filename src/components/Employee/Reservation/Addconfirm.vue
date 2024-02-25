<template>
	<div class="row  Font1_20 content-container">
		<div class="col-md-6 col-lg-4 col-sm-10 col-12 error">
			<p class="font-bold">{{ $t('Global.Total') }} {{ConfirmData.data.total_cost  }}</p>
			<button type="button" @click="Yes" class="btn btn-success">{{ $t('Global.confirm') }}</button>
			<button type="button" @click="Close" class="btn  btn-danger">{{ $t('No') }}</button>
		</div>
	</div>
</template>

<script>
export default {
    props:['ConfirmData'],
	data() {
		return {};
	},
	methods: {
		Close() {
			this.$emit('ConfirmClose');
		},
		Yes() {
			this.$emit('ConfirmYes');
		},
	},
};
</script>

<style lang="scss">
.error {
	text-align: center;
	background-color: $secondary;
	z-index: 999;
	border: 2px solid $secondary;
	border-radius: 20px;
	padding: 25px 10px;
	box-shadow: 0px 25px 80px rgba(0, 0, 0, 0.5);
}
.error button {
	margin: 15px 10px;
	width: 25%;
	height: 40px;
}
</style>
