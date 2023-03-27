<script lang='ts' setup>
	// import { useFlow } from '../hooks';
	//
	// const { flow, isLoading } = useFlow();
import MixInspiredBy from '../components/MixInspiredBy.vue';
</script>

<template>
	<div class='container'>
		<header>

		</header>
		<main>
			<section class='flow'>
				<h2>Mixes inspired by...</h2>
				<p>Discover new tracks similar to your favourites</p>
				<MixInspiredBy />
			</section>

			<section class='for-you'>
				<h2>Made for you</h2>

			</section>

			<section class='new-release'>
				<h2>New releases for you</h2>
			</section>

			<section class='popular'>
				<h2>Popular playlist</h2>
			</section>

		</main>
	</div>


	<!--	<p v-if="isLoading">Loading...</p>-->
	<!--	<ul v-else>-->
	<!--		<li v-for="playlist in flow.data">-->
	<!--			<RouterLink :to="`/track/${playlist.id}`">{{ playlist.title }}</RouterLink>-->
	<!--		</li>-->
	<!--	</ul>-->
</template>

<style lang='scss' scoped>
	.container {
		display: grid;
		grid-template-areas: 'header' 'main';
		grid-template-columns: 1fr;
		grid-template-rows: 50px 1fr;
		height: 87vh;
	}

	header {
		grid-area: header;
		background-color: red;
	}

	main {
		grid-area: main;
		background-color: blue;
	}

	main section {
		padding-left: 2rem;
		padding-right: 2rem;
		margin-top: 2rem;
		min-width: 800px;
		width: 100%;

	}
</style>
