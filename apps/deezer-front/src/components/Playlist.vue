<script setup>
	import { defineProps, ref } from 'vue';

	const props = defineProps({
		playlist: {
			type: Object,
			required: true,
		},
	});

	const triangleRef = ref(null);
	const pointsRef = ref(null);

	function handleMouseOver() {
		triangleRef.value.style.opacity = '1';
		pointsRef.value.style.opacity = '1';
	}

	function handleMouseOut() {
		triangleRef.value.style.opacity = '0';
		pointsRef.value.style.opacity = '0';
	}
</script>

<template>
	<div class="playlist">
		<div
			class="playlistImg"
			:style="`background-image: url(${playlist.picture_medium})`"
			@mouseover="handleMouseOver"
			@mouseout="handleMouseOut"
		>
			<button class="blanc">
				<i class="fas fa-play triangle"></i>
			</button>
			<button class="blanc backgroundHearth" ref="triangleRef">
				<i class="fas fa-heart hearth"></i>
			</button>
			<button class="blanc backgroundPoints" ref="pointsRef">
				<i class="fas fa-ellipsis-h points"></i>
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
		align-items: end;
	}

	.playlistImg:hover {
		background-color: rgb(0, 0, 0);
		filter: brightness(0.9);
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

	.blanc {
		margin: 0px 0px 10px 5px;
		width: 40px;
		background-color: white;
		border-radius: 50%;
	}

	.hearth,
	.triangle,
	.points {
		margin: 10px 0px 10px 0px;
		color: black;
	}

	button {
		border: none;
	}

	button:hover {
		filter: brightness(0.8);
		cursor: pointer;
	}

	.hearth {
		color: var(--deezer-red-hearth);
	}

	.triangle {
		display: block;
	}

	.backgroundHearth,
	.backgroundPoints {
		display: block;
		opacity: 0;
		transition: opacity 0.2s;
	}

	.points {
		display: block;
	}
</style>
