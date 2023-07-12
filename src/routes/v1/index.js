const express = require('express');
const router = express.Router();

const UserControllers = require('../../controllers/user-controller');
const { AuthRequestValidators } = require('../../middlewares/index');

router.post(
	'/signup',
	AuthRequestValidators.validateUserAuth,
	UserControllers.create
);
router.post(
	'/signin',
	AuthRequestValidators.validateUserAuth,
	UserControllers.signIn
);
router.get('/isAuthenticate', UserControllers.isAuthenticated);

module.exports = router;
