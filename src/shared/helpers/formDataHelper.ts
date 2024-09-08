import { serialize } from 'object-to-formdata';

export const getFormData = <T extends object>(data: T): FormData => {
  return serialize(data, { allowEmptyArrays: true, nullsAsUndefineds: true });
};
