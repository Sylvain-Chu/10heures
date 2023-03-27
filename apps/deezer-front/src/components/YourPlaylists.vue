<script>
	import { useFlow } from '../hooks';

	const { playlists, isLoading } = useFlow();
</script>

<template>
	<div class='container'>
		<p v-if="isLoading">Loading...</p>
		<ul v-else>
			<li v-for="playlist in playlists.data">
				<RouterLink :to="`/playlist/${playlist.id}`">{{ playlist.title }}</RouterLink>
			</li>
		</ul>
	</div>
</template>



<style scoped>

</style>