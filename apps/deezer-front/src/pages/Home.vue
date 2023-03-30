<script lang='ts' setup>
	import { usePlaylistbyUser } from '../hooks';
	import Playlist from '../components/Playlist.vue';

	const { playlists, isLoading } = usePlaylistbyUser(1970053982);
</script>

<template>
	<div class='container'>
		<header>

		</header>
		<main>
			<!--			<section class='flow'>-->
			<!--				<h2>Mixes inspired by...</h2>-->
			<!--				<p>Discover new tracks similar to your favourites</p>-->
			<!--				<MixInspiredBy />-->
			<!--			</section>-->

			<section class='for-you'>
				<h2>Your playlist</h2>
				<p v-if='isLoading'>Loading...</p>
				<ul v-else>
					<RouterLink v-for='playlist in playlists.data' :to='`/playlist/${playlist.id}`' :key='playlist.id'>
						<li class="tumecasseslescouilles">
							<Playlist :playlist='playlist' />
						</li>
					</RouterLink>
				</ul>
			</section>

<!--			<section class='for-you'>-->
<!--				<h2>Your playlist</h2>-->
<!--				<p v-if='isLoading'>Loading...</p>-->
<!--				<ul v-else>-->
<!--					<RouterLink v-for='playlist in playlists.data' :to='`/playlist/${playlist.id}`' :key='playlist.id'>-->
<!--						<li>-->
<!--							<Playlist :playlist='playlist' />-->
<!--						</li>-->
<!--					</RouterLink>-->
<!--				</ul>-->
<!--			</section>-->

			<!--			<section class='for-you'>-->
			<!--				<h2>Made for you</h2>-->

			<!--			</section>-->

			<!--			<section class='new-release'>-->
			<!--				<h2>New releases for you</h2>-->
			<!--			</section>-->

			<!--			<section class='popular'>-->
			<!--				<h2>Popular playlist</h2>-->
			<!--			</section>-->

		</main>
	</div>
</template>

<style lang='scss' scoped>
	.container {
		display: grid;
		grid-template-areas: 'header' 'main';
		grid-template-columns: 1fr;
		grid-template-rows: 50px 1fr;
		height: 86vh;
	}

	header {
		grid-area: header;
	}

	main {
		grid-area: main;
		position: relative;
		height: 100%;
		max-height: calc(100vh - 10px);
		overflow-y: auto;

	}

	main section {
		padding-left: 2rem;
		padding-right: 2rem;
		margin-top: 2rem;
		min-width: 800px;
		width: 100%;
	}

	main section h2 {
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 1rem;
		color: white;
	}

	main section p {
		color: white;
		margin-bottom: 1rem;
	}

	main section ul {
		display: flex;
		flex-wrap: wrap;
	}

	main section ul li {
		margin-right: 1rem;
		margin-bottom: 1rem;
	}

	main section ul li a {
		color: white;
	}

	main section ul li a:hover {
		color: var(--light-grey);
	}

	.section {
		display: flex;
		flex-direction: column;
		padding-inline: 8px;
		height: 100%;
	}

	.tumecasseslescouilles {
		text-decoration: none !important;
	}


	main::-webkit-scrollbar {
		width: 0.4rem;
	}

	main::-webkit-scrollbar-track {
		background: hsl(240, 14%, 11%);
	}

	main::-webkit-scrollbar-thumb {
		background: hsl(240, 6%, 34%);
		border-radius: 0.5rem;
	}
</style>
