export const formatSearchParams = (
  object: Record<string, string> | string | string[][] | URLSearchParams
): string => String(new URLSearchParams(object));
