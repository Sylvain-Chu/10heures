<script lang="ts" setup>
    import { usePlaylist, usePlaylistbyUser, usePlaylists } from '../hooks';
	import Playlist from './components/Playlist.vue';

    const props = defineProps({
		playlists: {
			type: Object,
			required: true,
		},
        title : {
            type: String,
			required: true,
		}
	});

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
</script>

<template>
	<section class='for-you'> 
        <div class="headerContainer">
            <div >
                <h2>{{ title }}</h2>
            </div>
            <div class="btnCarousel">
                <button @click="previousSlide('YourPlaylist')"><i class="fas fa-arrow-left"></i></button>
                <button @click="nextSlide('YourPlaylist')"><i class="fas fa-arrow-right"></i></button>
            </div>
        </div>
        
        <ul class="containerCarousel" id="YourPlaylist">
            <RouterLink v-for='playlist in playlists.data' :to='`/playlist/${playlist.id}`' :key='playlist.id' class="containerLien">
                <li>
                    <Playlist :playlist='playlist' />
                </li>
            </RouterLink>
        </ul>
    </section>
</template>



<style scoped>

</style>