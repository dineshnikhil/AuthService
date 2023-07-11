const { UserRepository } = require('../repository/index');

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
}

module.exports = UserServices;
