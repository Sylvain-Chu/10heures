import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Application from './App.vue';
import { createPinia } from 'pinia';

const router = createRouter({
	routes: [
		{ path: '/', component: () => import('./pages/Home.vue') },
		{ path: '/albums', component: () => import('./pages/AlbumsListView.vue') },
		{ path: '/playlists', component: () => import('./pages/PlaylistListView.vue') },
		{ path: '/playlist/:id', component: () => import('./pages/PlaylistView.vue') },
		{ path: '/artist/:id', component: () => import('./pages/ArtistView.vue') },
		{ path: '/channels/charts', component: () => import('./pages/ChartView.vue') },

		{ path: '/podcasts', component: () => import('./pages/PodcastsListView.vue') },
	],
	history: createWebHistory(import.meta.env.BASE_URL),
});

const pinia = createPinia();
const application = createApp(Application);
application.use(router);
application.use(pinia);
application.mount('#app');
