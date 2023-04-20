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
	<div class="playlist">
		<div class="playlistImg" :style="`background-image: url(${playlist.picture_medium})`">
			<button type="button" class="chakra-button" aria-label="Écouter">
				<svg class="svg-icon svg-icon-play" focusable="false" height="1em" role="img" width="1em" viewBox="0 0 12 12" aria-hidden="true"><path fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M2.5.5v11l9-5.5z"></path>
				</svg>
			</button>
		</div>
		<div>
			<h3>{{ playlist.title }}</h3>
		</div>
	</div>
  </template>
  
  <style scoped>
  .playlistImg {
	width: 250px;
	height: 250px; /* ajustez la hauteur en fonction de vos besoins */
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	display: flex;
	flex-direction: column;
	justify-content: flex-end;
  }
  .playlist > div > h3 {
		color: white;
		margin-top: 7px;
		font-weight: 100;
		font-size: 15px;
	} 

	img {
		width: 250px;
		height: 250px;
		z-index: 0;
	}

	.chakra-button {
		border-radius: 50%;
		padding: 10px;
		margin: 10px;
		border-color: white;
		width: 40px;
	}
</style>