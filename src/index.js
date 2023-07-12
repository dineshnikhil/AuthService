const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const { PORT, JWT_KEY } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

const { UserServices } = require('./services/index');

const createAndProcessServer = () => {
	const app = express();

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	app.use('/api', apiRoutes);

	app.listen(PORT, async () => {
		console.log('Server is started on port', PORT);

		const userServices = new UserServices();
		// const token = userServices.createToken({ email: 'dinesh@gmail', id: 2 });
		// console.log(token);
		// const result = userServices.validateToken(
		// 	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbmVzaEBnbWFpbCIsImlkIjoyLCJpYXQiOjE2ODkxMzY3MTMsImV4cCI6MTY4OTE0MDMxM30.ezGtbQ_SZY9n9cGE5AOSSiHLUxIkWVHsH_QQBk4p2mc'
		// );
		// console.log(result);
	});
};

createAndProcessServer();
