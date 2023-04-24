<script lang="ts" setup>
	import { useQueryProvider } from 'vue-query';

	import Player from './components/Player.vue';
	import SideMenu from './components/SideMenu.vue';
	import Header from './components/Header.vue';

	useQueryProvider();
</script>

<template>
	<div>
		<div class="container">
			<aside>
			<SideMenu />
		</aside>
		<main>
			<header>
				<Header />
			</header>
			<RouterView />
		</main>
		</div>
		
		<footer>
			<Player />
		</footer>
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
		height: calc(100vh - var(--height--header));
		display: flex;
		flex-direction: column;
		width: var(--width-RouerView);
		overflow-x: hidden;
	}

	header {
		border-bottom: 1px solid var(--light-grey);
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: var(--height--header);
	}

	aside {
		border-right: 1px solid var(--light-grey);
		width: 245px;
		background-color: hsl(240, 14%, 11%);
	}

	footer {
		width: 100vw;
		height: 80px;
		background-color: #23232d;
		position: fixed;
		bottom: 0;
	}

	// @media screen and (min-width: 1800px) {
	// 	main {
	// 		width: 89vw;
	// 	}

	// 	aside {
	// 		width: 11vw;
	// 	}
	// }
</style>
