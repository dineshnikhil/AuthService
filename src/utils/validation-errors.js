const AppErrors = require('./error-handler');
var HttpStatus = require('http-status-codes');

class ValidationError extends AppErrors {
	constructor(error) {
		const name = error.name;
		const explanation = [];

		error.errors.forEach((err) => {
			explanation.push(err.message);
		});

		super(
			name,
			'not able to validate the data sent in the request.!',
			explanation,
			HttpStatus.BAD_REQUEST
		);
	}
}

module.exports = ValidationError;
