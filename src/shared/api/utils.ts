import { RawAxiosRequestHeaders } from 'axios';

export const getHeaders = (): RawAxiosRequestHeaders => {
  return {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
};

