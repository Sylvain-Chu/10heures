<script setup>
	import { defineProps } from 'vue';

	const props = defineProps({
		playlist: {
			type: Object,
			required: true,
		},
	});

</script>

<template>
	<div class='playlist'>
		<img :src='playlist.picture_medium' />
		<div>
			<h3>{{ playlist.title }}</h3>
		</div>
	</div>

</template>


<style scoped>

</style>