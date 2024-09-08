type CSSProperties = Required<React.CSSProperties>;

export interface ICustomColors {
  grey: {
    0: CSSProperties['color'];
    25: CSSProperties['color'];
    50: CSSProperties['color'];
    100: CSSProperties['color'];
    200: CSSProperties['color'];
    300: CSSProperties['color'];
    400: CSSProperties['color'];
    500: CSSProperties['color'];
    600: CSSProperties['color'];
    700: CSSProperties['color'];
    800: CSSProperties['color'];
    900: CSSProperties['color'];
  };
  general: {
    white: CSSProperties['color'];
    black: CSSProperties['color'];
    primary: CSSProperties['color'];
    error: CSSProperties['color'];
  };
  numsGradient: CSSProperties['color'];
  cardHoveredGradient: CSSProperties['color'];
  buttonGradient: CSSProperties['color'];
  buttonGradientHovered: CSSProperties['color'];
}
