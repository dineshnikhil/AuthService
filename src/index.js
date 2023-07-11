const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

const createAndProcessServer = () => {
	const app = express();

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	app.use('/api', apiRoutes);

	app.listen(PORT, () => {
		console.log('Server is started on port', PORT);
	});
};

createAndProcessServer();
