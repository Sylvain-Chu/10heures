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

						<button class='btn btn-play'>Listen</button>
						<button class='btn btn-edit'>
							<!--							<svg viewBox='0 0 16 16' focusable='false' class='chakra-icon css-1yk3h4a e1k4it830'-->
							<!--									 data-testid='PencilIcon' aria-hidden='true'>-->
							<!--								<path-->
							<!--									d='M11.427 6.031 9.969 4.573 2 12.543V14h1.458l7.969-7.969zM3.872 15H1v-2.872L12.128 1 15 3.872 3.872 15zm9.714-11.128-1.458-1.458-1.452 1.452 1.458 1.458 1.452-1.452z'></path>-->
							<!--							</svg>-->
						</button>
						<button class='btn btn-share'>
							<!--							<svg viewBox="0 0 16 16" focusable="false" class="chakra-icon css-1yk3h4a e1k4it830" data-testid="ShareIcon" aria-hidden="true"><path d="M8 14.26v-4.195c-1.34.182-2.54.719-3.478 1.283-.576.347-1.038.694-1.354.953a8.783 8.783 0 0 0-.44.387l-.019.017-.002.002L.358 15.06l.662-3.259L2 12s.516-.518 1.404-1.123C4.478 10.145 6.096 9.284 8 9.057A8.051 8.051 0 0 1 9 9v3l2.553-2.32L14 7.5 9 3v2c-3.738.451-5.58 3.303-6.408 5.225C2.154 11.243 2 12 2 12l-.98-.199v-.004l.002-.007.005-.02a4.953 4.953 0 0 1 .073-.3 12.354 12.354 0 0 1 1.407-3.24C3.533 6.579 5.257 4.775 8 4.159V.755l7.499 6.748-3.277 2.92L8 14.26z"></path></svg>-->
						</button>
						<button class='btn btn-parameters'>
							<!--							<svg viewBox="0 0 16 16" focusable="false" class="chakra-icon css-1yk3h4a e1k4it830" data-testid="EllipsisIcon" aria-hidden="true"><path d="M5 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm3.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path></svg>-->
						</button>
					</div>
				</div>

			</div>


			<table>
				<tr class='header-table'>
					<th>Track</th>
					<th>Artist</th>
					<th>Album</th>
					<th>Added</th>
					<th>Time</th>
				</tr>
				<tr v-for='track in playlist.tracks.data'>
					<Track :track='track' :playlistData='playlist' />
				</tr>
			</table>
		</div>
	</div>
</template>

<style scoped>
	.playlist-view {
		color: #fff;
		padding: 24px;
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
		display: inline-block;
		padding: 0.625rem 1.5rem;
		border-radius: 9999px;
		background-color: hsl(357, 63%, 60%);
		color: #FFFFFF;
		font-weight: bold;
		font-size: 0.75rem;
		text-transform: uppercase;
		border: none;
		cursor: pointer;
		transition: all 0.2s ease-in-out;
	}

	.btn-play:hover {
		background-color: hsl(0, 56%, 53%);
	}


	img {
		max-width: 100%;
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
		width: 172px;
		height: 172px;
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
</style>
