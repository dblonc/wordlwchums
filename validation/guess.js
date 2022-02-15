const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateGuessInput(data) {
    let errors = {};

    data.text = validText(data.text) ? data.text : '';

    if (!Validator.isLength(data.text, { min: 5, max: 5 })) {
        errors.text = 'Guess must be 5 characters';
    }

    if (Validator.isEmpty(data.text)) {
        errors.text = 'Please enter a guess';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};