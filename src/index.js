const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

const db = require('./models/index');

const createAndProcessServer = () => {
	const app = express();

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	app.use('/api', apiRoutes);

	app.listen(PORT, async () => {
		console.log('Server is started on port', PORT);

		if (false) {
			db.sequelize.sync({ alert: true });
		}
	});
};

createAndProcessServer();
