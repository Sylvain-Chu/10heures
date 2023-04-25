<script lang="ts" setup>
	import { defineProps } from 'vue';

	const props = defineProps({
		track: {
			type: Object,
			required: true,
		},
	});

	function convertTimestampToDate(timestamp: number) {
		const date = new Date(timestamp * 1000); // Le timestamp est en secondes, donc on le multiplie par 1000 pour l'obtenir en millisecondes
		return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date
			.getFullYear()
			.toString()}`;
	}

	function convertSecondsToMinutes(seconds: number) {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;
		return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
	}
</script>

<template>
	<td class="title">
		<div class="tileGauche">
			<img :src="track.album.cover_small" alt="track" />
			<h3>{{ track.title }}</h3>
		</div>
		<div class="tileDroite">
			<i class="fas fa-microphone"></i>
			<i class="fas fa-heart"></i>
			<i class="fas fa-ellipsis-h points"></i>
		</div>
	</td>
	<td class="ArtistName">
		<RouterLink :to="`/artist/${track.artist.id}`">
			{{ track.artist.name.length > 9 ? track.artist.name.slice(0, 9) + '...' : track.artist.name }}
		</RouterLink>
	</td>
	<td class="album">
		{{ track.album.title.length > 9 ? track.album.title.slice(0, 9) + '...' : track.album.title }}
	</td>
	<td class="add">{{ convertTimestampToDate(track.time_add) }}</td>
	<td class="time">{{ convertSecondsToMinutes(track.duration) }}</td>
	<td>
		<div class="inputDiv"><input type="radio" name="radio" /></div>
	</td>
</template>

<style lang="scss">
	.ArtistName,
	.album,
	.title {
		font-size: 14px;
	}

	.add,
	.time {
		font-size: 12px;
		font-weight: 100;
		color: #bebec7;
	}

	.title {
		display: flex;
		justify-content: space-between;
	}

	.tileGauche {
		display: flex;
		align-items: center;
		font-size: 14px;
	}

	.tileDroite {
		width: 150px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-size: 14px;
	}

	.fa-heart {
		color: var(--deezer-red-hearth);
	}

	.title img {
		margin-right: 10px;
		padding: 5px;
		width: 50px;
		height: 50px;
		object-fit: cover;
	}

	.info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex: 1;
	}

	.ArtistName a {
		color: white;
	}

	.title {
		margin: 0;
		font-size: 1.2rem;
		font-weight: bold;
	}

	.artist {
		margin: 0;
		font-size: 1rem;
		font-weight: normal;
	}

	.inputDiv {
		display: flex;
		justify-content: center;
	}

	input[type='radio'] {
		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		border-radius: 3px;
		width: 18px;
		height: 18px;
		border: 2px solid grey;
		opacity: 0.5;
	}

	input[type='radio']:checked {
		background-color: #ffffff;
	}
</style>
