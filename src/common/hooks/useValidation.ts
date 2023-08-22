import { useEffect, useState } from 'react';
import Joi, { Schema } from 'joi';
import { StringObject } from '../types';

const useValidation = (value: Record<string, any>, schema: Schema) => {
  const [errors, errorsSet] = useState<StringObject>({});

  useEffect(() => {
    if (!value) return;

    if (Joi.isSchema(schema)) {
      const errorsData: StringObject = {};

      const { error } = schema.validate(value, {
        abortEarly: false,
        allowUnknown: true,
        errors: { label: false },
        messages: {
          'any.required': 'required',
          'any.only': 'required',
          'number.base': 'required',
          'string.base': 'required',
          'boolean.base': 'required',
        },
      });

      error?.details?.forEach(({ path: [field], message }) => {
        errorsData[field] = message;
      });

      errorsSet(errorsData);
    }
  }, [value]);

  return errors;
};

export default useValidation;
