import fastify from 'fastify';
import fastifyCors from 'fastify-cors';
import got from 'got';

const app = fastify();
app.register(fastifyCors, {
	origin: true,
});

app.get('/playlists', async (request, reply) => {
	const response = await got('https://api.deezer.com/chart/0/playlists?limit=12');
	reply.send(response.body);
});

app.get('/user/:id/playlists', async (request, reply) => {
	const response = await got(`https://api.deezer.com/user/${request.params.id}/playlists`);
	reply.send(response.body);
});

app.get('/playlists/:id', async (request, reply) => {
	const response = await got(`https://api.deezer.com/playlist/${request.params.id}`);
	reply.send(response.body);
});

app.get('/artist/:id', async (request, reply) => {
	const response = await got(`https://api.deezer.com/artist/${request.params.id}`);
	reply.send(response.body);
});

app.get('/artist/:id/top', async (request, reply) => {
	const response = await got(`https://api.deezer.com/artist/${request.params.id}/top?limit=50`);
	reply.send(response.body);
});

app.get('/artist/:id/last', async (request, reply) => {
	const response = await got(`https://api.deezer.com/artist/${request.params.id}/albums?order=release_date&limit=1`);
	reply.send(response.body);
});

app.listen(8000);
