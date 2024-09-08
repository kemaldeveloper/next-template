import { Breakpoint } from '@mui/material';

import { useMediaQueries } from './useMediaQueries';
const isBrowser = typeof document !== 'undefined';

const getAvailableBreakPoints = <P>(
  breakpoint: Partial<Record<Breakpoint, P>>,
): Partial<Record<Breakpoint, boolean>> => {
  const availableBreakpointsMap: Partial<Record<Breakpoint, boolean>> = {};

  for (const key in breakpoint) {
    if (Object.prototype.hasOwnProperty.call(breakpoint, key)) {
      availableBreakpointsMap[key as Breakpoint] = true;
    }
  }

  return availableBreakpointsMap;
};

export const useResponsiveValue = () => {
  const { up, down } = useMediaQueries();

  return {
    up: function <T, P extends T>(breakpoint: Partial<Record<Breakpoint, P>>): T | undefined {
      const availableBreakpointsKeys = getAvailableBreakPoints(breakpoint);

      if (up.isMinXXXL && availableBreakpointsKeys['xxxl']) {
        return breakpoint.xxxl;
      }
      if (up.isMinXXL && availableBreakpointsKeys['xxl']) {
        return breakpoint.xxl;
      }
      if (up.isMinXL && availableBreakpointsKeys['xl']) {
        return breakpoint.xl;
      }
      if (up.isMinLG && availableBreakpointsKeys['lg']) {
        return breakpoint.lg;
      }
      if (up.isMinMD && availableBreakpointsKeys['md']) {
        return breakpoint.md;
      }
      if (up.isMinSM && availableBreakpointsKeys['sm']) {
        return breakpoint.sm;
      }
      if (up.isMinXS && availableBreakpointsKeys['xs']) {
        return breakpoint.xs;
      }
      if (up.isMinXXS && availableBreakpointsKeys['xxs']) {
        return breakpoint.xxs;
      }
    },
    down: function <T, P extends T>(breakpoint: Partial<Record<Breakpoint, P>>): T | undefined {
      const availableBreakpointsKeys = getAvailableBreakPoints(breakpoint);

      if (down.isXXXL && availableBreakpointsKeys['xxxl']) {
        return breakpoint.xxxl;
      }
      if (down.isXXXL && availableBreakpointsKeys['xxl']) {
        return breakpoint.xxl;
      }
      if (down.isXXL && availableBreakpointsKeys['xl']) {
        return breakpoint.xl;
      }
      if (down.isLG && availableBreakpointsKeys['lg']) {
        return breakpoint.lg;
      }
      if (down.isMD && availableBreakpointsKeys['md']) {
        return breakpoint.md;
      }
      if (down.isSM && availableBreakpointsKeys['sm']) {
        return breakpoint.sm;
      }
      if (down.isXXS && availableBreakpointsKeys['xs']) {
        return breakpoint.xs;
      }
      if (down.isXXS && availableBreakpointsKeys['xxs']) {
        return breakpoint.xxs;
      }
    },
  };
};

