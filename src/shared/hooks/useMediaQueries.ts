import { Theme, useMediaQuery } from '@mui/material';

export const useMediaQueries = () => {
  return {
    down: {
      isXXS: useMediaQuery((theme: Theme) => theme.breakpoints.down('xxs')),
      isXS: useMediaQuery((theme: Theme) => theme.breakpoints.down('xs')),
      isSM: useMediaQuery((theme: Theme) => theme.breakpoints.down('sm')),
      isMD: useMediaQuery((theme: Theme) => theme.breakpoints.down('md')),
      isLG: useMediaQuery((theme: Theme) => theme.breakpoints.down('lg')),
      isXL: useMediaQuery((theme: Theme) => theme.breakpoints.down('xl')),
      isXXL: useMediaQuery((theme: Theme) => theme.breakpoints.down('xxl')),
      isXXXL: useMediaQuery((theme: Theme) => theme.breakpoints.down('xxxl')),
    },
    up: {
      isMinXXS: useMediaQuery((theme: Theme) => theme.breakpoints.up('xxs')),
      isMinXS: useMediaQuery((theme: Theme) => theme.breakpoints.up('xs')),
      isMinSM: useMediaQuery((theme: Theme) => theme.breakpoints.up('sm')),
      isMinMD: useMediaQuery((theme: Theme) => theme.breakpoints.up('md')),
      isMinLG: useMediaQuery((theme: Theme) => theme.breakpoints.up('lg')),
      isMinXL: useMediaQuery((theme: Theme) => theme.breakpoints.up('xl')),
      isMinXXL: useMediaQuery((theme: Theme) => theme.breakpoints.up('xxl')),
      isMinXXXL: useMediaQuery((theme: Theme) => theme.breakpoints.up('xxxl')),
    },
  };
};
