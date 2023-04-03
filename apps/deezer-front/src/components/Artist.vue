<script setup>
	import { defineProps } from 'vue';
	import { useLastAlbum, useTopTrack } from '../hooks';
	import { useRoute } from 'vue-router';

	const props = defineProps({
		artist: {
			type: Object,
			required: true,
		},
	});

	const route = useRoute();

	const { tracks } = useTopTrack(+route.params.id);

	const { album } = useLastAlbum(+route.params.id);
	//console.log(album);
</script>

<template>
	<div class='artist'>
		<img :src='artist.picture_medium' />
		<div>
			<h3>{{ artist.name }}</h3>
			<p>{{ artist.nb_fan }} fans</p>
		</div>

		<h2>Top tracks</h2>
		<div v-for='track in tracks.data'>
			<h3>{{ track.title }}</h3>
		</div>

<!--		<h2>Latest release</h2>-->
<!--		<h3>{{ album.title }}</h3>-->
<!--		<img :src='album.cover_medium' />-->

	</div>
</template>


<style scoped>

</style>