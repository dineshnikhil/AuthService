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

module.exports = {
	create,
};
