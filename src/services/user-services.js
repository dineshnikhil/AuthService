const { UserRepository } = require('../repository/index');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

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

	async signIn({ email, password }) {
		try {
			// step1 => fetch the user using the email
			const user = await this.userRepository.getUserByEmail(email);
			// step2 => compare incoming plain password with stores encrypted password
			const passwordMatch = this.checkPassword(password, user.password);

			if (!passwordMatch) {
				console.log('Password does not match!');
				throw { error: 'Incorrect password' };
			}
			// step3 => if passwords match then create jwt and send it to the user
			const newJwt = this.createToken({ email: user.email, id: user.id });
			return newJwt;
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

	checkPassword(userInputPassword, encryptedPassword) {
		try {
			return bcrypt.compareSync(userInputPassword, encryptedPassword);
		} catch (error) {
			console.log('Something went wrong while comparing the password.!');
			throw { error };
		}
	}
}

module.exports = UserServices;
