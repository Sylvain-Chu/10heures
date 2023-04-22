<script lang="ts" setup>
	import { useQueryProvider } from 'vue-query';

	import Player from './components/Player.vue';
	import SideMenu from './components/SideMenu.vue';
	import Header from './components/Header.vue';

	useQueryProvider();
</script>

<template>
	<div class="container">
		<aside>
			<SideMenu />
		</aside>
		<header>
			<Header />
		</header>
		<main>
			<RouterView />
		</main>
		<footer>
			<Player />
		</footer>
	</div>
</template>

<style lang="scss" scoped>
	.container {
		display: grid;
		grid-template-columns: 225px 1fr;
		grid-template-rows: 56px 1fr 80px;
		grid-column-gap: 0;
		grid-row-gap: 0;
		height: 100vh;
		max-height: 100vh;
		max-width: 100vw;
	}

	main {
		background-color: hsl(240, 10%, 8%);
		grid-area: 2 / 2 / 3 / 3;
		max-height: 100vh;
	}

	header {
		grid-area: 1 / 2 / 2 / 3;
		border-bottom: 1px solid var(--light-grey);
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 56px;
	}

	aside {
		border-right: 1px solid var(--light-grey);
		grid-area: 1 / 1 / 3 / 2;
		background-color: hsl(240, 14%, 11%);
		width: 100%;
	}

	footer {
		width: 100vw;
		grid-area: 3 / 1 / 4 / 3;
		z-index: 999;
	}
</style>
