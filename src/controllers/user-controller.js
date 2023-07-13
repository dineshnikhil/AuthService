const { UserServices } = require('../services/index');

const userServices = new UserServices();

const create = async (req, res) => {
	try {
		const user = await userServices.createUser({
			email: req.body.email,
			password: req.body.password,
		});
		return res.status(201).json({
			data: user,
			success: true,
			message: 'Successfully created the user..!',
			error: {},
		});
	} catch (error) {
		return res.status(500).json({
			data: {},
			success: true,
			message: 'Unable to create the user..!',
			error: error,
		});
	}
};

const signIn = async (req, res) => {
	try {
		const response = await userServices.signIn({
			email: req.body.email,
			password: req.body.password,
		});
		return res.status(200).json({
			token: response,
			success: true,
			message: 'Successfully signed in the user..!',
			error: {},
		});
	} catch (error) {
		return res.status(500).json({
			data: {},
			success: true,
			message: 'Unable to signIn the user..!',
			error: error,
		});
	}
};

const isAuthenticated = async (req, res) => {
	try {
		const token = req.headers['x-access-token'];
		const response = await userServices.isAuthenticated(token);
		return res.status(200).json({
			success: true,
			error: {},
			data: response,
			message: 'user is authenticated and token is valid.!',
		});
	} catch (error) {
		return res.status(500).json({
			data: {},
			success: true,
			message: 'Unable to Authenticate the user..!',
			error: error,
		});
	}
};

const isAdmin = async (req, res) => {
	try {
		const response = await userServices.isAdmin(req.body.id);
		return res.status(200).json({
			success: true,
			error: {},
			data: response,
			message: 'Successfully fetched the autherised details of the user.!',
		});
	} catch (error) {
		return res.status(500).json({
			data: {},
			success: true,
			message: 'Unable to fetch the autherised deails of the user.!',
			error: error,
		});
	}
};

module.exports = {
	create,
	signIn,
	isAuthenticated,
	isAdmin,
};
