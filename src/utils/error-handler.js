var HttpStatus = require('http-status-codes');
class AppErrors extends Error {
	constructor(
		name = 'AppError',
		message = 'Something went wrong',
		discription = 'Something went wrong',
		statusCode = HttpStatus.INTERNAL_SERVER_ERROR
	) {
		super();
		(this.name = name),
			(this.message = message),
			(this.discription = discription),
			(this.statusCode = statusCode);
	}
}

module.exports = AppErrors;
