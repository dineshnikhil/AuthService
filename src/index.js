const express = require('express');

const { PORT } = require('./config/serverConfig');

const createAndProcessServer = () => {
	const app = express();

	app.listen(PORT, () => {
		console.log('Server is started on port', PORT);
	});
};

createAndProcessServer();
