<script lang='ts' setup>
	import { usePlaylist, usePlaylistbyUser, usePlaylists } from '../hooks';
	import Playlist from '../components/Playlist.vue';
	import Header from '../components/Header.vue';

	const { playlistsByUSer } = usePlaylistbyUser(1970053982);
	const { playlistsByDeezer } = usePlaylists();

	function nextSlide(id) {
		var carousel = document.getElementById(id);
		console.log('====================================');
		console.log(carousel);
		console.log('====================================');
		if (carousel != null){
			console.log('carousel != null');
			var currentPosition = parseFloat(carousel.style.transform.slice(11));
			console.log('currentPosition :' + currentPosition);
			var slideWidth = carousel.offsetWidth;
			var newPosition = currentPosition - slideWidth;
			carousel.style.transform = 'translateX(' + newPosition + 'px)';
		}
		
	}

	function previousSlide(id){
		var carousel = document.getElementById(id);
		if (carousel != null){
			var currentPosition = parseFloat(carousel.style.transform.slice(11));
			var slideWidth = carousel.offsetWidth;
			var newPosition = currentPosition + slideWidth;
			carousel.style.transform = 'translateX(' + newPosition + 'px)';
		}
	}

	// function ChangeSlide(sens) {
	// 	var numero = numero + sens;
	// 	if (numero < 0)
	// 		numero = slide.length - 1;
	// 	if (numero > slide.length - 1)
	// 		numero = 0;
	// 	document.getElementById("slide").src = slide[numero];
	// }
</script>

<template>
	<div class='container'>
		<Header />

		<main>
			<!--			<section class='flow'>-->
			<!--				<h2>Mixes inspired by...</h2>-->
			<!--				<p>Discover new tracks similar to your favourites</p>-->
			<!--				<MixInspiredBy />-->
			<!--			</section>-->


			<section class='for-you'>
				<div class="headerContainer">
					<div >
						<h2>Pour toi</h2>
					</div>
					<div class="btnCarousel">
						<button @click="previousSlide('YourPlaylist')"><i class="fas fa-arrow-left"></i></button>
						<button @click="nextSlide('YourPlaylist')"><i class="fas fa-arrow-right"></i></button>
					</div>
				</div>
				
				<ul class="containerCarousel" id="YourPlaylist">
					<RouterLink v-for='playlist in playlistsByUSer.data' :to='`/playlist/${playlist.id}`' :key='playlist.id' class="containerLien">
						<li>
							<Playlist :playlist='playlist' />
						</li>
					</RouterLink>
				</ul>
			</section>


			<section class='playlist-by-deezer'>
				<div  class="headerContainer">
					<div>
						<h2>Popular playlists</h2>
					</div>
					<div class="btnCarousel">
						<button @click="previousSlide('popularPlaylist')" id="precedent"><i class="fas fa-arrow-left"></i></button>
						<button @click="nextSlide('popularPlaylist')" id="suivant"><i class="fas fa-arrow-right"></i></button>
					</div>
				</div>
				
				<ul class="containerCarousel" id="popularPlaylist">
					<RouterLink v-for='playlist in playlistsByDeezer.data' :to='`/playlist/${playlist.id}`' :key='playlist.id' class="containerLien">
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

	main {
		font-family: "Open Sans",Helvetica,Arial,sans-serif;
	}
	.headerContainer {
		margin-left: auto;
		margin-right: auto;   
	}

	#popularPlaylist, #YourPlaylist{
		transform: translateX(0px);
	}
	section h2 {
		padding-left: 35px;
	}

	.btnCarousel i {
		color: white;
	}
	.btnCarousel button{
		background-color: #121216;
		border: none;
	}

	.containerCarousel {
		display: flex;
		overflow: hidden;
		flex-wrap: nowrap;
		width: 81vw; 
		margin-left: auto;
		margin-right: auto;
	}

	.for-you {
		
	}

	section > div {
		width: 80vw;
		display: flex;
		justify-content: space-between;
	}
	.container {
		display: grid;
		grid-template-areas: 'header' 'main';
		grid-template-columns: 1fr;
		grid-template-rows: 50px 1fr;
		height: 86vh;
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
		font-size: 22px;
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

	.containerLien {
		padding: 5px;
	}

	
</style>
