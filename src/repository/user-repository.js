const { User } = require('../models/index');

class UserRepository {
	async createUser(data) {
		try {
			const user = await User.create(data);
			return user;
		} catch (error) {
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
}

module.exports = UserRepository;
