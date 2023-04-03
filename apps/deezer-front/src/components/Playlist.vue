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
	.playlist > div > h3 {
		color: white;
		margin-top: 7px;
		font-weight: 100;
		font-size: 15px;
	} 

	img {
		width: 250px;
		height: 250px;
	}
</style>