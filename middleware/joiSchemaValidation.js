const joi = require('joi');

const validateObjectSchema = (data, schema) => {
    const result = joi.validate(data, schema);
}

module.exports.validateBody = (schema) => {
    return (req, res, next) => {
        validateObjectSchema(req.body, schema);
    }
}