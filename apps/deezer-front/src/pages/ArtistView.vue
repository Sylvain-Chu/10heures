<script setup>
	import { useArtist } from '../hooks';
	import { useRoute } from 'vue-router';
	import Artist from '../components/Artist.vue';

	const route = useRoute();

	const { artist, isLoading } = useArtist(+route.params.id);
</script>

<template>
	<Artist :artist='artist' />
</template>


<style scoped>

</style>