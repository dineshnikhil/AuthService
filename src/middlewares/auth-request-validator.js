const validateUserAuth = (req, res, next) => {
	if (!req.body.email || !req.body.password) {
		return res.status(400).json({
			data: {},
			success: false,
			message: 'email or password is missing.!',
			error: 'email or password is missing.!',
		});
	}

	next();
};

const validateIsAdminRequest = (req, res, next) => {
	if (!req.body.id) {
		return res.status(400).json({
			data: {},
			success: false,
			message: 'user id parameter is missing from the request.!',
			error: 'id parameter is missing from the request.!',
		});
	}

	next();
};

module.exports = {
	validateUserAuth,
	validateIsAdminRequest,
};
