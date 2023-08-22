import Joi, { Schema } from 'joi';

const schema: Schema<any> = Joi.object({
  query: Joi.string()
    .empty([''])
    .pattern(/^[a-z0-9-]+$/i)
    .min(1)
    .max(39)
    .messages({
      'string.pattern.base': 'only alphanumeric characters or hyphens',
    })
    .required(),
});

export default schema;
