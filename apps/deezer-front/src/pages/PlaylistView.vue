<script setup>

	import { usePlaylist } from '../hooks';
	import { useRoute } from 'vue-router';
	import Track from '../components/Track.vue';

	const route = useRoute();



	const { playlist, isLoading } = usePlaylist(+route.params.id);

	console.log(playlist);
</script>

<template>
	<div class="playlist-view">
		<p v-if="isLoading">Loading...</p>
		<template v-else>
			<h1>{{ playlist.title }}</h1>
			<ul>
				<li v-for="track in playlist.tracks.data">
					<Track :track="track" />
				</li>
			</ul>
		</template>
	</div>
</template>


<style scoped>

</style>