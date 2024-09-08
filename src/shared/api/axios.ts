import axios, { AxiosRequestConfig } from 'axios';
import { onRejection, onResponse } from '@/shared/api/interceptors';
import { ResponseDataType } from '@/shared/api/types';
import { getHeaders } from '@/shared/api/utils';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost'; // use your own URL here or environment variable

const apiInstance = axios.create({
  baseURL: baseURL + '/wp-json/wp/v2',
  withCredentials: false,
  //headers: {
  //  'Content-Type': 'application/json',
  //},
});

apiInstance.interceptors.response.use(onResponse, onRejection);

export const get = <ResponseData>(resource: string, config?: AxiosRequestConfig) =>
  apiInstance
    .get<ResponseDataType<ResponseData>>(resource, {
      ...config,
      headers: { ...getHeaders(), ...(config?.headers ?? {}) },
    })
    .then(r => r.data);

export const post = <ResponseData>(resource: string, data: AxiosRequestConfig['data']) =>
  apiInstance
    .post<ResponseDataType<ResponseData>>(resource, data, {
      headers: getHeaders(),
    })
    .then(r => r.data);

export const postFormData = <ResponseData>(resource: string, data: AxiosRequestConfig['data']) =>
  apiInstance
    .post<ResponseDataType<ResponseData>>(resource, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(r => r.data);

export const patch = <ResponseData>(resource: string, data: AxiosRequestConfig['data']) =>
  apiInstance
    .patch<ResponseDataType<ResponseData>>(resource, data, {
      headers: getHeaders(),
    })
    .then(r => r.data);

export const del = (resource: string) => apiInstance.delete(resource, { headers: getHeaders() });

