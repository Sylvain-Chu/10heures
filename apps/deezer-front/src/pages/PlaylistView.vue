<script setup>
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
			<div class="search">
				<div class="containerInput">
					<i class="fa-solid fa-magnifying-glass"></i>
					<input type="text" placeholder="Rechercher parmi les titres" id="">
				</div>
				
			</div>

			<table>
				<tr class='header-table'>
					<th>TITRE</th>
					<th>ARTIST</th>
					<th>ALBUM</th>
					<th>AJOUTÉ</th>
					<th><i class="fas fa-clock"></i></th>
					<th><div class="inputDiv"><input type="radio" name="radio"></div></th>
				</tr>
				<tr v-for='track in playlist.tracks.data' class="trDatas" >
					<Track :track='track' :playlistData='playlist'/>
				</tr>
			</table>
		</div>
	</div>
</template>

<style scoped>

	.containerInput {
		margin-top: 15px;
		background-color: #32323D;
		filter: brightness(0.7);
		width: 40%;
		padding: 4px 4px 4px 8px;
		border-radius: 5px;
		border: 1px solid rgba(255, 255, 255, 0.3);
	}

	.containerInput:hover {
		border: 1px solid rgba(228, 225, 225, 1);
	}
	.containerInput input {
		background-color: #32323D;
		outline: none;
		border: none;
		font-size: 14px;
		color: white;
		line-height: 1.15;
		width: 90%;
		
		
	}

	.containerInput input::placeholder {
		color: rgba(255, 255, 255, 0.8);
		letter-spacing: 0.5px; /* Ajouter de l'espace ici */
	}
	.containerInput i  {
		color: gray;
		margin-right: 10px;
	}

	.trDatas {
		background-color: #121216;
	}
	.trDatas:hover {
		background-color: #191922;
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
		padding-right: 125px;
		max-height: calc(100vh - var(--height--header));
		width: calc(var(--width-RouerView) - 85px);
		overflow-y: auto;
	}

	.playlist-view::-webkit-scrollbar {
		width: 0.4rem;
	}

	.playlist-view::-webkit-scrollbar-track {
		background: hsl(240, 14%, 11%);
	}

	.playlist-view::-webkit-scrollbar-thumb {
		background: hsl(240, 6%, 34%);
		border-radius: 0.5rem;
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
		background-color: var(--deezer-red-hearth);
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
		margin-left: 30px;
		height: 250px;
	}

	.playlist-data h1 {
		font-size: 32px;
		margin: 0 0 10px 0;
	}

	.playlist-data p {
		font-size: 14px;
	}

	.playlist-data .data p {
		color: #A2A2AD;
		margin-bottom: 4px;
	}

	.inputDiv {
		display: flex;
    	justify-content: center;
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
