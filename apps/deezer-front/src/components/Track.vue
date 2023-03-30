<script lang='ts' setup>

	import { defineProps } from 'vue';

	const props = defineProps({
		track: {
			type: Object,
			required: true,
		},
	});

	function convertTimestampToDate(timestamp: number) {
		const date = new Date(timestamp * 1000); // Le timestamp est en secondes, donc on le multiplie par 1000 pour l'obtenir en millisecondes
		return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear().toString()}`;
	}

	function convertSecondsToMinutes(seconds: number) {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;
		return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
	}
</script>

<template>
	<td class='title'>
		<img :src='track.album.cover_small' alt='track' />
		<h3>{{ track.title }}</h3>
	</td>
	<td class="ArtistName">
		<RouterLink :to="`/artist/${track.artist.id}`">
			{{ track.artist.name.length > 20 ? track.artist.name.slice(0, 20) + '...' : track.artist.name }}
		</RouterLink>
	</td>
	<td>
		{{ track.album.title.length > 20 ? track.album.title.slice(0, 20) + '...' : track.album.title }}
	</td>
	<td>{{ convertTimestampToDate(track.time_add) }}</td>
	<td>{{ convertSecondsToMinutes(track.duration) }}</td>
	<td><input type="radio" name="radio"></td>
</template>

<style lang='scss'>
	.title {
		display: flex;
		align-items: center;
		font-size: 14px;
	}

	td{
		padding: 10px;
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

	.ArtistName a{
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

	input[type="radio"] {
		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		border-radius: 3px;
		width: 18px;
		height: 18px;
		border: 2px solid grey;
		opacity: 0.5;
	}

	input[type="radio"]:checked {
		background-color: #ffffff;
	}


</style>