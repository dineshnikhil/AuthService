const { User, Role } = require('../models/index');
const ValidationError = require('../utils/validation-errors');

class UserRepository {
	async createUser(data) {
		try {
			const user = await User.create(data);
			return user;
		} catch (error) {
			if (error.name === 'SequelizeValidationError') {
				throw new ValidationError(error);
			}
			console.log('Something went wrong in repository layer..!');
			throw { error };
		}
	}

	async getUserById(userId) {
		try {
			const user = await User.findByPk(userId, {
				attributes: ['email', 'id'],
			});
			return user;
		} catch (error) {
			console.log('Something went wrong in repository layer..!');
			throw { error };
		}
	}

	async getUserByEmail(userEmail) {
		try {
			const user = await User.findOne({
				where: {
					email: userEmail,
				},
			});
			return user;
		} catch (error) {
			console.log('Something went wroing in the repository layer..!');
			throw { error };
		}
	}

	async isAdmin(userId) {
		try {
			const user = await User.findByPk(userId);
			const adminRole = await Role.findOne({
				where: {
					name: 'ADMIN',
				},
			});
			return user.hasRole(adminRole);
		} catch (error) {
			console.log('Something went wroing in the repository layer..!');
			throw { error };
		}
	}
}

module.exports = UserRepository;
