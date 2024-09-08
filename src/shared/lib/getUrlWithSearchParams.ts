import { formatSearchParams } from './formatSearchParams';

export const getUrlWithSearchParams = (
  url: string,
  params: Record<string, string> | string | string[][] | URLSearchParams,
) => `${url}?${formatSearchParams(params)}`;

