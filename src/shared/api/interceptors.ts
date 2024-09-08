import { AxiosError, AxiosResponse } from 'axios';

export const onResponse = <T>(response: AxiosResponse<T>) => {
  return response;
};

export const onRejection = (error: AxiosError) => {
  return Promise.reject(error);
};

