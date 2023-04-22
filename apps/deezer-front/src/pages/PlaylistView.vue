<script setup>
	import { defineProps, ref } from 'vue';
	import { usePlaylist } from '../hooks';
	import { useRoute } from 'vue-router';
	import Track from '../components/Track.vue';

	const route = useRoute();

	const { playlist, isLoading } = usePlaylist(+route.params.id);

	function convertDuration(duration) {
		const hours = Math.floor(duration / 3600);
		const minutes = Math.floor((duration % 3600) / 60);
		return `${hours > 0 ? hours + ' hrs ' : ''}${minutes} min`;
	}

	const musiqueRef = ref(null);

	function handleMouseOver() {
		console.log(musiqueRef.value)
		musiqueRef.value.style.backgroundColor  = "red";
	}

	function handleMouseOut() {
		console.log('degage');
		musiqueRef.value.style.backgroundColor = "#121216;";
	}

</script>

<template>
	<div class='playlist-view'>
		<p v-if='isLoading'>Loading...</p>
		<div v-else>
			<div class='header-playlist'>

				<img :src='playlist.picture' alt='Playlist cover'>
				<div class='playlist-data'>
					<h1>{{ playlist.title }}</h1>
					<div class='user-playlist'>
						<p>{{ playlist.creator.name }}</p>
					</div>
					<div class='data'>
						<p>{{ playlist.nb_tracks }} tracks - {{ convertDuration(playlist.duration) }}</p>
					</div>
					<div class='buttons'>

						<button class='btn btn-play'>
							<i class="fas fa-play triangle" ></i>
							<h3>Écouter</h3>
						</button>
						<button class='background-hearth'>
							<i class="fas fa-heart hearth" ></i>
						</button>
						<button class='background-share'>
							<i class="fas fa-share share"></i>
						</button>
						<button class='background-point'>
							<i class="fas fa-ellipsis-h points"></i>
						</button>
					</div>
				</div>

			</div>


			<table>
				<tr class='header-table'>
					<th>TITRE</th>
					<th>ARTIST</th>
					<th>ALBUM</th>
					<th>AJOUTÉ</th>
					<th><i class="fas fa-clock"></i></th>
					<th><input type="radio" name="radio"></th>
				</tr>
				<tr v-for='track in playlist.tracks.data' @mouseover="handleMouseOver" @mouseout="handleMouseOut"  class="trDatas" >
					<Track :track='track' :playlistData='playlist' v-bind:ref="musiqueRef"/>
				</tr>
			</table>
		</div>
	</div>
</template>

<style scoped>

	.trDatas {
		background-color: #121216;
	}
	.header-table > th {
		font-size: 12px;
		font-weight: 100;
		color: #bebec7;
	}
	.buttons {
		display: flex;
	}
	.buttons > button:not(:first-child) {
		border-radius: 50%;
		background-color: #121216;
		border: 1px solid rgba(255, 255, 255, 0.3);
	}
	
	button {
		margin-left: 10px;
	}
	.buttons > button:not(:first-child) > i {
		padding: 8px 5px 8px 5px;
	}
	.buttons .hearth {
		color: #EF5466
	}

	.buttons .share, .buttons .points {
		color: white;
	}
	
	.playlist-view {
		color: #fff;
		padding: 24px;
		margin-left: 85px;
		margin-right: 80px;
	}

	p {
		margin: 0;
	}

	table {
		margin-top: 10px;
		width: 100%;
	}

	.header-table {
		border-bottom: 1px solid hsl(240, 9%, 22%);
	}

	.btn-play {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.625rem 2.5rem;
		border-radius: 9999px;
		background-color: #EF5466;
		color: #FFFFFF;
		font-weight: bold;
		font-size: 0.75rem;
		text-transform: uppercase;
		border: none;
		cursor: pointer;
		transition: all 0.2s ease-in-out;
	}

	.btn-play > i {
		margin-right: 15px;
	}

	.btn-play:hover {
		background-color: hsl(0, 56%, 53%);
	}

	h1 {
		font-size: 2rem;
		margin-top: 20px;
		margin-bottom: 10px;
	}

	table {
		border-collapse: collapse;
		width: 100%;
	}

	th, td {
		text-align: left;
		padding: 8px;
	}

	th {
		font-weight: bold;
	}

	.header-playlist {
		display: flex;
		align-items: center;
	}

	.header-playlist img {
		width: 250px;
		height: 250px;
		border-radius: 5px;
	}

	.playlist-data {
		margin-left: 20px;
	}

	.user-playlist {
		display: flex;
		align-items: center;
	}

	.data {
		margin-top: 10px;
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
