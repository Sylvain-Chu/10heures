<script lang='ts' setup>
	import { useQueryProvider } from 'vue-query';

	import Player from './components/Player.vue';
	import SideMenu from './components/SideMenu.vue';
	import Header from './components/Header.vue';


	useQueryProvider();
</script>

<template>
	<div class='container'>
		<aside>
			<SideMenu />
		</aside>
		<main>
			<Header />
			<RouterView />
		</main>
		<footer>
			<Player />
		</footer>
	</div>
</template>

<style lang='scss' scoped>
	.container {
		display: grid;
		grid-template-areas: 'aside main' 'footer footer';
		grid-template-columns: 225px 1fr;
		grid-template-rows: 1fr 80px;
		height: 100vh;
		max-height: 100vh;
		max-width: 100vw;
	}

	main {
		background-color: hsl(240, 10%, 8%);
		grid-area: main;
		max-height: 100vw;
	}

	footer {
		width: 100vw;
	}

	aside {
		border-right: 1px solid var(--light-grey);
		grid-area: aside;
		background-color: hsl(240, 14%, 11%);
		width: 100%;
	}
</style>
