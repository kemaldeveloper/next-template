export enum Colors {
  grey0 = '#F5F5F5',
  grey25 = '#EBEBEC',
  grey50 = '#D6D6D7',
  grey100 = '#ADADAF',
  grey200 = '#99999B',
  grey300 = '#858587',
  grey400 = '#707073',
  grey500 = '#5C5C5F',
  grey600 = '#47474B',
  grey700 = '#333337',
  grey800 = '#1E1E23',
  grey900 = '#0A0A0F',
  generalWhite = '#FFFFFF',
  generalBlack = '#050002',
  generalPrimary = '#E62E59',
  generalError = '#B30808',
  numsGradient = 'linear-gradient(180.00deg, rgb(230, 46, 89) 9.85%,rgb(81, 2, 20) 123.499%)',
  cardHoveredGradient = 'linear-gradient(147.09deg, rgb(230, 46, 89) 12.105%,rgb(10, 10, 15) 84.458%)',
  buttonGradient = 'linear-gradient(225.29deg, rgb(244, 79, 117) 9.397%,rgb(230, 46, 89) 100%)',
  buttonGradientHovered = 'linear-gradient(225.29deg, rgb(208, 27, 69) -0.021%,rgb(239, 47, 92) 93.117%)',
}

type TColorsKeys = `${keyof typeof Colors}`;
type ExcludedGradientColors = Exclude<
  TColorsKeys,
  'numsGradient' | 'cardHoveredGradient' | 'buttonGradient' | 'buttonGradientHovered'
>;

export type ColorsKeysMap = Record<ExcludedGradientColors, string>;

const getCustomColorsKeys = (): ColorsKeysMap => {
  const regexp = /([a-zA-Z]+)(\d+|Text)?/g;

  const matches: any = Object.keys(Colors).reduce((acc: any, key) => {
    regexp.lastIndex = 0; // Сбросить состояние регулярного выражения

    const match = regexp.exec(key);
    if (match) {
      const [, color, value] = match;

      if (value) {
        acc[key] = 'custom.' + [color, value].join('.');
      } else {
        acc[key] = 'custom.' + color;
      }
    }
    return acc;
  }, {});

  return matches;
};

export const customColors = getCustomColorsKeys();
