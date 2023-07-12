const { UserRepository } = require('../repository/index');
const jwt = require('jsonwebtoken');

const { JWT_KEY } = require('../config/serverConfig');

class UserServices {
	constructor() {
		this.userRepository = new UserRepository();
	}

	async createUser(data) {
		try {
			const user = await this.userRepository.createUser(data);
			return user;
		} catch (error) {
			console.log('Something went wrong in service layer..!');
			throw { error };
		}
	}

	createToken(user) {
		try {
			const token = jwt.sign(user, JWT_KEY, { expiresIn: '1h' });
			return token;
		} catch (error) {
			console.log('Something went wrong in while creating the token..!');
			throw { error };
		}
	}

	validateToken(token) {
		try {
			const validity = jwt.verify(token, JWT_KEY);
			return validity;
		} catch (error) {
			console.log('Something went wrong in while validating the token..!');
			throw { error };
		}
	}
}

module.exports = UserServices;
