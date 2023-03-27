import fastify from 'fastify';
import fastifyCors from 'fastify-cors';
import got from 'got';

const app = fastify();
app.register(fastifyCors, {
	origin: true,
});

const token = '85dffd8fdad46ee1818ba7fa58b75ba1';
const userId = '1970053982';

app.get('/flow', async (req, res) => {
	try {

		const response = await got(
			`https://api.deezer.com/user/${userId}/flow`,
			{
				responseType: 'json',
			},
		);
		res.send(response.body);
	} catch (error) {
		console.error(error);
		res.status(500).send('Internal Server Error');
	}
});


app.listen(8000).then(r => console.log('Server started'));
