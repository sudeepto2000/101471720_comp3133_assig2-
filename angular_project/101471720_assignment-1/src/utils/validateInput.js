const { validationResult } = require("express-validator");

const validateInput = async (validations, data) => {
    const req = { body: data };
    await Promise.all(validations.map(
        validation => validation.run(req)
    ));
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new Error(errors.array().map(err => err.msg).join(", "));
    }
};

module.exports = validateInput;
