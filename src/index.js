const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

const { UserRepository } = require('./repository/index');

const createAndProcessServer = () => {
	const app = express();

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	app.use('/api', apiRoutes);

	app.listen(PORT, async () => {
		console.log('Server is started on port', PORT);

		const userRepository = new UserRepository();
		const user = await userRepository.getUserById(1);
		console.log(user);
	});
};

createAndProcessServer();
