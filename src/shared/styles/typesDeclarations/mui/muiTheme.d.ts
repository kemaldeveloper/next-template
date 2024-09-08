import { AutocompleteClassKey } from '@mui/material';
import '@mui/material/styles';
import { SimplePaletteColorOptions, Theme } from '@mui/material/styles';

import { ICustomColors } from './colors';

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

// Declare Mui custom typography
declare module '@mui/material/styles' {
  interface TypographyVariants {
    num: React.CSSProperties;
    numLarge: React.CSSProperties;
    numSmall: React.CSSProperties;
    bodyLarge: React.CSSProperties;
    bodyNormal: React.CSSProperties;
    bodySmall: React.CSSProperties;
    subtitle: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    num: React.CSSProperties;
    numLarge: React.CSSProperties;
    numSmall: React.CSSProperties;
    bodyLarge: React.CSSProperties;
    bodyNormal: React.CSSProperties;
    bodySmall: React.CSSProperties;
    subtitle: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h4: false;
    h5: false;
    h6: false;
    num: true;
    numLarge: true;
    numSmall: true;
    body1: false;
    body2: false;
    caption: false;
    subtitle1: false;
    subtitle2: false;
    caption: false;
    overline: false;
    bodyLarge: true;
    bodyNormal: true;
    bodySmall: true;
    subtitle: true;
  }
}

// Declare Mui colors
declare module '@mui/material/styles' {
  interface Palette {
    custom: ICustomColors;
  }

  interface PaletteOptions {
    custom: ICustomColors;
  }
}

// Declare Mui breakpoints
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxs: true;
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
    xxxl: true;
  }
}

// Custom overrides declare
declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    MuiAutocomplete: AutocompleteClassKey;
  }
}

// Button overrides declare
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    tag: true;
  }
  interface ButtonPropsColorOverrides {
    grey: true;
    white: true;
  }
  interface ButtonOwnProps {
    href?: LinkProps['href'];
  }
}

// declare module '@mui/material/Button' {
//   interface ButtonPropsVariantOverrides {
//     pageOutlined: true;
//   }
// }

// IconButton overrides declare
declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {}
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsSizeOverrides {
    XLarge: true;
  }
}
