const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateGuessInput(data) {
    let errors = {};

    data.guess = validText(data.guess) ? data.guess : '';

    if (!Validator.isLength(data.guess, { min: 5, max: 5 })) {
        errors.text = 'Guess must be 5 characters';
    }

    if (Validator.isEmpty(data.guess)) {
        errors.text = 'Please enter a guess';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};