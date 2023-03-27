import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Application from './App.vue';

const router = createRouter({
	routes: [
		{	path: '/', component: () => import('./pages/Home.vue') },
		{ path: '/artists', component: () => import('./pages/ArtistsListView.vue') },
		{ path: '/albums', component: () => import('./pages/AlbumsListView.vue') },
		{ path: '/playlists', component: () => import('./pages/PlaylistListView.vue') },
		{ path: '/playlist/:id', component: () => import('./pages/PlaylistView.vue') },
	],
	history: createWebHistory(import.meta.env.BASE_URL),
});

const application = createApp(Application);
application.use(router);
application.mount('#app');
