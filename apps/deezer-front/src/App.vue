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
		<main>
			<header>
				<Header />
			</header>
			<RouterView />
			<footer>
				<Player />
			</footer>
		</main>
	</div>
</template>

<style lang="scss" scoped>
	* {
		margin: 0;
	}

	.container {
		display: flex;
		max-height: 100vh;
		max-width: 100vw;
	}

	main {
		background-color: hsl(240, 10%, 8%);
		max-height: 100vh;
		display: flex;
		flex-direction: column;
		width: 80%;
	}

	header {
		border-bottom: 1px solid var(--light-grey);
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 56px;
	}

	aside {
		border-right: 1px solid var(--light-grey);
		width: 20%;
		background-color: hsl(240, 14%, 11%);
	}

	footer {
		width: 100vw;
	}
</style>
