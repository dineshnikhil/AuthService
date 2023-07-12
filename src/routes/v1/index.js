const express = require('express');
const router = express.Router();

const UserControllers = require('../../controllers/user-controller');

router.post('/signup', UserControllers.create);
router.post('/signin', UserControllers.signIn);

module.exports = router;
