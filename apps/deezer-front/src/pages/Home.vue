<script lang='ts' setup>
	import { usePlaylist, usePlaylistbyUser, usePlaylists } from '../hooks';
	import Playlist from '../components/Playlist.vue';

	const { playlistsByUSer } = usePlaylistbyUser(1970053982);
	const { playlistsByDeezer } = usePlaylists();
</script>

<template>
	<div class='container'>
		<header>
			<div class='headerGauche'>
				<i class='fa-solid fa-magnifying-glass'></i>
				<input type='text' name='search' id='searchHeader' placeholder='Rechercher'>
			</div>
			<div class='headerDroite'>
				<i class='fa-solid fa-bell fa-lg'></i>
				<img src='../../public/img/profil.png' alt='profil image'>
			</div>
		</header>
		<main>
			<!--			<section class='flow'>-->
			<!--				<h2>Mixes inspired by...</h2>-->
			<!--				<p>Discover new tracks similar to your favourites</p>-->
			<!--				<MixInspiredBy />-->
			<!--			</section>-->

			<section class='for-you'>
				<ul>
					<li><h2>Your playlist</h2></li>
				</ul>
				<ul>
					<RouterLink v-for='playlist in playlistsByUSer.data' :to='`/playlist/${playlist.id}`' :key='playlist.id'>
						<li class='tumecasseslescouilles'>
							<Playlist :playlist='playlist' />
						</li>
					</RouterLink>
				</ul>
			</section>


			<section class='playlist-by-deezer'>
				<h2>Popular playlists</h2>
				<ul>
					<RouterLink v-for='playlist in playlistsByDeezer.data' :to='`/playlist/${playlist.id}`' :key='playlist.id'>
						<li>
							<Playlist :playlist='playlist' />
						</li>
					</RouterLink>
				</ul>
			</section>

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
		border-bottom: 1px solid var(--light-grey);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.headerGauche > i {
		color: white;
		opacity: 0.25;
		margin-left: 25px;
		margin-right: 10px;
	}

	.headerDroite {
		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 7vw;
	}

	.headerDroite > i {
		color: white;
	}

	.headerDroite > img {
		width: 2vw;
		border-radius: 50vw;
	}

	#searchHeader {
		background-color: #121216;
		color: white;
		border: none;
		width: 25vw;
	}

	#searchHeader:focus {
		border-color: #121216;
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

	ul > li > h2 {
		font-size: 22px;
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
