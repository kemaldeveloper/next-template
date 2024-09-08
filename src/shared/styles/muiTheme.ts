import {
  switchClasses,
  menuItemClasses,
  checkboxClasses,
  iconButtonClasses,
  buttonGroupClasses,
  outlinedInputClasses,
  tableSortLabelClasses,
  paginationItemClasses,
  accordionSummaryClasses,
  accordionClasses,
  svgIconClasses,
  touchRippleClasses,
  formControlLabelClasses,
  formLabelClasses,
  dialogClasses,
  inputBaseClasses,
} from '@mui/material';
import { createTheme } from '@mui/material/styles';

import { Colors } from './colors';
import { shadows } from './shadows';
import { fonts } from './fonts';

export let theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0,
      xs: 360,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1280,
      xxl: 1440,
      xxxl: 1680,
    },
  },
});

theme = createTheme({
  ...theme,
  palette: {
    primary: { main: Colors.generalPrimary },
    secondary: { main: Colors.generalWhite },
    error: { main: Colors.generalError },
    custom: {
      grey: {
        '0': Colors.grey0,
        '25': Colors.grey25,
        '50': Colors.grey50,
        '100': Colors.grey100,
        '200': Colors.grey200,
        '300': Colors.grey300,
        '400': Colors.grey400,
        '500': Colors.grey500,
        '600': Colors.grey600,
        '700': Colors.grey700,
        '800': Colors.grey800,
        '900': Colors.grey900,
      },
      general: {
        white: Colors.generalWhite,
        black: Colors.generalBlack,
        primary: Colors.generalPrimary,
        error: Colors.generalError,
      },
      numsGradient: Colors.numsGradient,
      cardHoveredGradient: Colors.cardHoveredGradient,
      buttonGradient: Colors.buttonGradient,
      buttonGradientHovered: Colors.buttonGradientHovered,
    },
  },
  shadows,
  typography: {
    fontFamily: fonts.hauora.style.fontFamily,
    h1: {
      fontFamily: fonts.wadik.style.fontFamily,
      fontWeight: 700,
      [theme.breakpoints.up('xxs')]: {
        fontSize: 25,
        lineHeight: '32px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: 37,
        lineHeight: '44px',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: 54,
        lineHeight: '64px',
      },
    },
    h2: {
      fontFamily: fonts.wadik.style.fontFamily,
      fontWeight: 700,
      [theme.breakpoints.up('xxs')]: {
        fontSize: 22,
        lineHeight: '26px',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: 32,
        lineHeight: '36px',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: 48,
        lineHeight: '58px',
      },
    },
    h3: {
      fontFamily: fonts.wadik.style.fontFamily,
      fontWeight: 700,
      [theme.breakpoints.up('xxs')]: {
        fontSize: 17,
        lineHeight: '21px',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: 27,
        lineHeight: '32px',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: 36,
        lineHeight: '44px',
      },
    },
    num: {
      fontFamily: fonts.wadik.style.fontFamily,
      [theme.breakpoints.up('xxs')]: {
        fontSize: 48,
        fontWeight: 700,
        lineHeight: '40px',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: 144,
        fontWeight: 700,
        lineHeight: '120px',
      },
    },
    numLarge: {
      fontFamily: fonts.wadik.style.fontFamily,
      fontSize: 144,
      fontWeight: 700,
      lineHeight: '120px',
    },
    numSmall: {
      fontFamily: fonts.wadik.style.fontFamily,
      fontSize: 48,
      fontWeight: 700,
      lineHeight: '40px',
    },
    bodyLarge: {
      fontWeight: 400,
      [theme.breakpoints.up('xxs')]: {
        fontSize: 17,
        lineHeight: '26px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: 19,
        lineHeight: '28px',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: 22,
        lineHeight: '34px',
      },
    },
    bodyNormal: {
      fontWeight: 400,
      [theme.breakpoints.up('xxs')]: {
        fontSize: 15,
        lineHeight: '23px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: 17,
        lineHeight: '26px',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: 18,
        lineHeight: '28px',
      },
    },
    bodySmall: {
      fontWeight: 400,
      [theme.breakpoints.up('xxs')]: {
        fontSize: 13,
        lineHeight: '22px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: 14,
        lineHeight: '24px',
      },
      [theme.breakpoints.up('xl')]: {
        lineHeight: '26px',
      },
    },
    subtitle: {
      fontWeight: 500,
      [theme.breakpoints.up('xxs')]: {
        fontSize: 19,
        lineHeight: '27px',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: 24,
        lineHeight: '28px',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: 28,
        lineHeight: '44px',
      },
    },
    button: {
      fontWeight: 400,
      [theme.breakpoints.up('xxs')]: {
        fontSize: 15,
        lineHeight: '23px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: 17,
        lineHeight: '26px',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: 18,
        lineHeight: '28px',
      },
    },
  },
  components: {
    MuiUseMediaQuery: {
      defaultProps: {
        // ssrMatchMedia: createMatchMedia(theme.breakpoints.values.xl),
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          minWidth: 360,
          color: Colors.generalBlack,
          background: Colors.grey0,
        },
        main: {
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          [theme.breakpoints.down('xl')]: {
            paddingTop: theme.spacing(6),
          },
        },
        '#__next': {
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        },
        '.router-link': {
          textDecoration: 'none',
        },
        ul: {
          listStyleType: 'none',
          padding: 0,
          margin: 0,
        },
        p: {
          margin: theme.spacing(0, 0, 1),
        },
        img: {
          width: 'auto',
          maxWidth: '100%',
          height: 'auto',
          userSelect: 'none',
        },
        button: {
          fontFamily: 'inherit',
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        item: {
          width: 'inherit',
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          num: 'div',
          bodyLarge: 'div',
          bodyNormal: 'div',
          bodySmall: 'div',
          subtitle: 'div',
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          boxShadow: shadows[2],
          borderRadius: 6,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'tag' },
          style: {
            fontWeight: 400,
            borderRadius: 24,
            border: '1px solid',
            background: 'transparent',
            transition: theme.transitions.create(['border-color', 'color', 'background']),
            [theme.breakpoints.up('xxs')]: {
              fontSize: 13,
              lineHeight: '22px',
              padding: '3px 9px',
              minWidth: 'initial',
            },
            [theme.breakpoints.up('lg')]: {
              fontSize: 14,
              lineHeight: '24px',
              padding: '3px 9.4px',
            },
            [theme.breakpoints.up('xl')]: {
              fontSize: 14,
              lineHeight: '26px',
              padding: '5px 11.4px',
            },
          },
        },
        {
          props: { color: 'grey', variant: 'tag' },
          style: {
            '&:not(.nonActive)': {
              color: Colors.grey500,
              borderColor: Colors.grey400,
            },
            '&.nonActive': {
              color: Colors.grey700,
              borderColor: Colors.grey600,
            },
            '&:not([disabled])': {
              '&.active': {
                color: Colors.generalWhite,
                background: Colors.grey900,
                borderColor: Colors.grey800,
                '&:hover': {
                  background: Colors.grey700,
                  color: Colors.generalWhite,
                },
              },
              '&:hover:not(.active)': {
                color: Colors.grey700,
                background: Colors.grey50,
                borderColor: Colors.grey600,
              },
            },
          },
        },
        {
          props: { color: 'white', variant: 'tag' },
          style: {
            '&:not(.nonActive)': {
              color: Colors.generalWhite,
              borderColor: Colors.grey400,
            },
            '&.nonActive': {
              color: Colors.grey700,
              borderColor: Colors.grey600,
            },
            '&:not([disabled])': {
              '&.active': {
                color: Colors.generalWhite,
                background: Colors.grey900,
                borderColor: Colors.grey800,
                '&:hover': {
                  background: Colors.grey700,
                  color: Colors.generalWhite,
                },
              },
              '&:hover:not(.active)': {
                color: Colors.grey700,
                background: Colors.grey50,
                borderColor: Colors.grey600,
              },
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          position: 'relative',
          textAlign: 'center',
          textTransform: 'initial',
          boxShadow: 'none',
          borderRadius: 0,
          padding: theme.spacing(1.5, 2),
          minWidth: 'initial',
          overflow: 'hidden',
          zIndex: 1,
          whiteSpace: 'nowrap',
          [theme.breakpoints.up('xxs')]: {
            minWidth: 160,
          },
          [theme.breakpoints.up('lg')]: {
            minWidth: 166,
          },
          '&:hover, &:focus': {
            boxShadow: 'none',
          },
        },
        contained: {},
        containedPrimary: {
          border: '0px solid transparent',
          background: 'transparent',
          '&:not([disabled])': {
            padding: theme.spacing(1.5, 2),
            '&:after': {
              content: '""',
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '284px',
              height: '160px',
              transform: 'translate(-50%, -50%)',
              background: Colors.buttonGradient,
              zIndex: -1,
              transition: theme.transitions.create(['opacity', 'visibility'], { duration: 300, easing: 'linear' }),
            },
            '&:before': {
              content: '""',
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100%',
              height: '100%',
              transform: 'translate(-50%, -50%)',
              background: Colors.buttonGradientHovered,
              zIndex: -1,
              opacity: 0,
              visibility: 'hidden',
              transition: theme.transitions.create(['opacity', 'visibility'], { duration: 300, easing: 'linear' }),
            },
            '&:hover': {
              borderColor: 'transparent',
              outline: 'none',
              '& .image-overlay': {
                opacity: 0.1,
                visibility: 'visible',
              },
              '&:after': {
                opacity: 0,
                visibility: 'hidden',
              },
              '&:before': {
                opacity: 1,
                visibility: 'visible',
              },
            },
          },
          '&:disabled': {
            [theme.breakpoints.up('xxs')]: {
              padding: theme.spacing(1.375, 1.875),
            },
            [theme.breakpoints.up('xxl')]: {
              padding: theme.spacing(1.375, 1.875),
            },
            border: `1px solid ${Colors.grey100}`,
            color: Colors.grey100,
            background: 'transparent',
          },
        },
        containedSecondary: {
          border: `1px solid ${Colors.generalWhite}`,
          background: 'transparent',
          color: Colors.generalWhite,
          padding: theme.spacing(1.375, 2),
          transition: theme.transitions.create(['background-color', 'border-color'], {
            duration: 300,
            easing: 'linear',
          }),
          '&:not([disabled])': {
            '&:hover': {
              outline: 'none',
              backgroundColor: Colors.grey700,
              '& .image-overlay': {
                opacity: 0.1,
                visibility: 'visible',
              },
            },
          },
          '&:disabled': {
            borderColor: Colors.grey100,
            color: Colors.grey100,
            background: 'transparent',
          },
        },
        containedError: {
          boxShadow:
            '0px 3px 1px -2px rgba(244, 39, 39, 0.20), 0px 2px 2px 0px rgba(244, 39, 39, 0.14), 0px 1px 5px 0px rgba(244, 39, 39, 0.12)',
          '&:not([disabled])': {
            '&:hover': {
              boxShadow:
                '0px 2px 4px -1px rgba(219, 43, 43, 0.20), 0px 4px 5px 0px rgba(219, 43, 43, 0.14), 0px 1px 10px 0px rgba(219, 43, 43, 0.12)',
            },
            '&:focus': {
              boxShadow:
                '0px 3px 5px -1px rgba(245, 90, 90, 0.20), 0px 6px 10px 0px rgba(245, 90, 90, 0.14), 0px 1px 18px 0px rgba(245, 90, 90, 0.12)',
            },
          },
          '&:disabled': {
            background: Colors.grey200,
            color: Colors.grey400,
          },
        },
        outlined: {
          padding: theme.spacing(1.125, 3),
        },
        outlinedPrimary: {
          '&:not([disabled])': {
            '&:hover': {
              color: Colors.generalPrimary,
            },
            '&:focus': {
              backgroundColor: 'transparent',
              color: Colors.generalPrimary,
            },
          },
          '&:disabled': {
            borderColor: Colors.grey300,
            color: Colors.grey300,
          },
        },
        outlinedSecondary: {
          '&:not([disabled])': {
            '&:hover': {
              borderColor: Colors.generalPrimary,
              backgroundColor: Colors.generalWhite,
              color: Colors.generalPrimary,
            },
            '&:focus': {
              borderColor: Colors.generalWhite,
              backgroundColor: 'transparent',
              color: Colors.generalWhite,
            },
          },
          '&:disabled': {
            borderColor: Colors.grey500,
            color: Colors.grey500,
          },
        },
        textPrimary: {
          color: Colors.generalPrimary,
          '&:not([disabled])': {
            '&:hover': {
              color: Colors.generalPrimary,
            },
            '&:focus': {
              color: Colors.generalPrimary,
              background: 'transparent',
            },
          },
          '&:disabled': {
            color: Colors.grey400,
            background: 'transparent',
          },
        },
        endIcon: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 4,
          marginRight: 0,
          height: 0,

          '& > *:nth-of-type(1)': {
            fontSize: 24,
          },
        },
        startIcon: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 0,
          marginRight: 4,
          height: 0,
          '& > *:nth-of-type(1)': {
            fontSize: 24,
          },
        },
      },
    },
    MuiIconButton: {
      variants: [
        {
          props: { size: 'XLarge' },
          style: {
            fontSize: 24,
            padding: 15,
            boxShadow: shadows[2],
            minWidth: 54,
            minHeight: 54,
          },
        },
        {
          props: { color: 'default' },
          style: {
            color: Colors.grey400,
            background: 'transparent',
            borderRadius: 6,
            '&:not([disabled])': {
              '&:hover': {
                color: Colors.grey500,
              },
              '&:focus': {
                color: Colors.grey400,
                background: 'transparent',
              },
            },
            '&:disabled': {
              color: Colors.grey200,
              background: 'transparent',
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          position: 'relative',
          overflow: 'hidden',
          '& i': {
            transition: theme.transitions.create('color'),
          },
        },
        sizeLarge: {
          fontSize: 24,
          padding: 4,
        },
        sizeMedium: {
          padding: 4,
          fontSize: 16,
        },
        sizeSmall: {
          fontSize: 12,
          padding: 2,
        },
        colorPrimary: {
          color: Colors.generalWhite,
          background: Colors.generalPrimary,
          '&:not([disabled])': {
            '&:hover': {},
            '&:focus': {
              background: Colors.generalPrimary,
              color: Colors.generalWhite,
            },
          },
          '&:disabled': {
            color: Colors.grey300,
            background: Colors.grey100,
          },
        },
        colorSecondary: {
          color: Colors.grey500,
          '&:not([disabled])': {
            '&:hover': {},
            '&:focus': {
              color: Colors.grey500,
            },
          },
          '&:disabled': {
            color: Colors.grey300,
            background: Colors.grey100,
          },
        },
      },
    },
    MuiButtonGroup: {
      styleOverrides: {
        groupedContained: {
          [`&.${buttonGroupClasses.grouped}`]: {
            position: 'relative',
            fontSize: 13,
            // color: Colors.black,
            minWidth: 29,
            padding: '12.5px 7.5px',
            // border: `1px solid ${Colors.purple}`,
            '&:not(:last-of-type)': {
              borderRight: 0,
              '&:before': {
                content: '""',
                position: 'absolute',
                top: '50%',
                right: 0,
                width: 1,
                height: 11,
                transform: 'translateY(-50%)',
                // background: Colors.grayDivider,
              },
            },
            '&:not(:first-of-type)': {
              borderLeft: 0,
            },
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          // padding: 0,
          // height: 16,
          width: 44,
          padding: theme.spacing(1.5, 1, 1.5, 1.5),
        },
        thumb: {
          width: 16,
          height: 16,
          background: Colors.grey500,
        },
        switchBase: {
          // padding: 0,
          // margin: 0,
          top: 2,
          left: 0,
          [`&.${switchClasses.disabled}`]: {
            // opacity: 0.4,
            [`& + .${switchClasses.track}`]: {
              // opacity: 1,
            },
            [`&.${switchClasses.checked}`]: {
              // color: Colors.white,
            },
          },
          [`&.${switchClasses.checked}`]: {
            transform: 'translateX(14px)',
            [`& .${switchClasses.thumb}`]: {
              background: Colors.generalPrimary,
            },
            [`& + .${switchClasses.track}`]: {
              // background: Colors.green100,
              opacity: 1,
            },
          },
        },
        track: {
          borderRadius: 16,
          background: Colors.grey300,
          width: 28,
          opacity: 1,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          padding: theme.spacing(0, 0, 0.25),
          [theme.breakpoints.up('xxs')]: {
            fontSize: 15,
            fontWeight: 400,
            lineHeight: '23px',
          },
          [theme.breakpoints.up('lg')]: {
            fontSize: 17,
            lineHeight: '26px',
          },
          [theme.breakpoints.up('xl')]: {
            fontSize: 18,
            lineHeight: '28px',
          },
          '&:before': {
            borderColor: Colors.grey400,
          },
          '&:after': {
            borderColor: `${Colors.grey800} !important`,
          },
          [`&:not(.${inputBaseClasses.disabled})`]: {
            '&:hover': {
              '&:before': {
                borderColor: Colors.grey800,
              },
            },
          },
          [`&.${inputBaseClasses.focused}`]: {
            color: Colors.grey300,
            [`& .${inputBaseClasses.input}`]: {
              background: Colors.grey25,
            },
            '&:after': {
              borderColor: Colors.grey800,
            },
          },
          [`&.${inputBaseClasses.disabled}`]: {
            [`&. ${inputBaseClasses.input}`]: {
              WebkitTextFillColor: Colors.generalError,
            },
            '&:before': {
              borderBottomStyle: 'solid !important',
              borderColor: Colors.grey100,
            },
          },
        },
        input: {
          padding: theme.spacing(2, 1, 0.25),
          height: 'auto',
          transition: theme.transitions.create('background'),
          [`&.${inputBaseClasses.disabled}`]: {
            color: Colors.grey200,
            WebkitTextFillColor: Colors.grey200,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        inputMultiline: {
          padding: 0,
        },
        root: {
          position: 'relative',
          fontSize: 16,
          fontWeight: 400,
          lineHeight: '24px',
          color: Colors.generalBlack,
          borderRadius: 6,
          boxShadow: 'none',
          backgroundColor: 'transparent',
          [`& .${iconButtonClasses.root}`]: {
            color: Colors.grey500,
          },
          [`& .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: Colors.grey400,
          },
          [`&:hover:not(.${outlinedInputClasses.disabled}):not(.${outlinedInputClasses.error})`]: {
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: Colors.grey700,
            },
          },
          [`&:focus:not(.${outlinedInputClasses.disabled})`]: {
            outline: 'none',
          },
          [`&.${outlinedInputClasses.focused}:not(.${outlinedInputClasses.disabled}):not(.${outlinedInputClasses.error})`]:
            {
              [`& .${outlinedInputClasses.notchedOutline}`]: {
                borderColor: Colors.generalPrimary,
              },
              [`& .${iconButtonClasses.root}`]: {
                color: Colors.grey500,
              },
            },
          [`&.${outlinedInputClasses.disabled}`]: {
            color: Colors.grey300,
            background: Colors.grey100,
            [`& .${outlinedInputClasses.input}`]: {
              WebkitTextFillColor: Colors.grey300,
            },
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: Colors.grey300,
            },
          },
          [`&.${outlinedInputClasses.error}`]: {
            [`& .${outlinedInputClasses.input}`]: {
              WebkitTextFillColor: Colors.generalBlack,
            },
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: Colors.generalError,
            },
          },
        },
        adornedStart: {
          paddingLeft: 0,
          [`& .${outlinedInputClasses.input}`]: {
            paddingLeft: '6px',
          },
        },
        adornedEnd: {
          paddingRight: 0,
          [`& .${outlinedInputClasses.input}`]: {
            paddingRight: '6px',
          },
        },
        input: {
          padding: '8px 12px',
          height: 'auto',
          '&::placeholder': {
            color: Colors.grey400,
          },
        },
        notchedOutline: {
          borderColor: 'transparent',
          padding: 0,
          borderWidth: '1px !important',
        },
        colorSecondary: {
          '&$focused': {
            '& .MuiOutlinedInput-notchedOutline': {
              // borderColor: Colors.gray,
              borderWidth: 1,
            },
          },
        },
        multiline: {
          padding: '12px 16px 12px',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          display: 'block',
          fontSize: 14,
          fontWeight: 400,
          lineHeight: '20px',
          color: Colors.grey600,
          marginLeft: 12,
          [`&.${formLabelClasses.disabled}`]: {
            color: Colors.grey300,
          },
          [`&.${formLabelClasses.error}`]: {
            color: Colors.generalError,
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          margin: 0,
          color: Colors.grey600,
          [`&.${formControlLabelClasses.disabled}`]: {
            color: Colors.grey400,
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: theme.spacing(1),
          [theme.breakpoints.up('xxs')]: {
            fontSize: 12,
            fontWeight: 400,
            lineHeight: '22px',
          },
          [theme.breakpoints.up('lg')]: {
            fontSize: 14,
            lineHeight: '26px',
          },
          [theme.breakpoints.up('xl')]: {
            fontSize: 14,
            lineHeight: '26px',
          },
        },
        contained: {
          marginTop: 4,
          marginLeft: 12,
          marginRight: 0,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        arrow: {
          color: Colors.grey600,
        },
        tooltip: {
          background: Colors.grey600,
          fontSize: 12,
          fontWeight: 400,
          lineHeight: 'normal',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          // color: Colors.black,
        },
        outlined: {
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          flex: '1 1 100%',
          // background: Colors.white,
          // border: `0.5px solid ${Colors.grayDivider}`,
          boxShadow: '0px 4px 4px rgba(169, 169, 169, 0.12)',
          borderRadius: 4,
          height: '100%',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          fontSize: 14,
          lineHeight: '20px',
        },
        [`.${menuItemClasses.selected}`]: {},
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 96,
          height: 96,
          fontFamily: fonts.wadik.style.fontFamily,
          fontSize: 36,
          fontWeight: 500,
          lineHeight: '40px',
          '& i': {
            fontSize: 48,
          },
        },
        colorDefault: {
          color: Colors.generalPrimary,
          // background: Colors.green50,
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        ul: {
          flexWrap: 'nowrap',
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        firstLast: {
          margin: 0,
        },
        root: {
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 2px',
          transition: theme.transitions.create('all'),
          overflow: 'hidden',
          zIndex: 1,
          padding: 0,
          width: 32,
          height: 32,
          minWidth: 32,
          minHeight: 32,
          [theme.breakpoints.up('xxs')]: {
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '20px',
            minHeight: 32,
          },
        },
        outlined: {
          borderRadius: 8,
        },
        previousNext: {
          [`&.${paginationItemClasses.root}`]: {
            fontSize: 20,
            color: Colors.grey500,
            background: Colors.generalWhite,
            border: `1px solid ${Colors.grey200}`,
            borderRadius: '50%',
            [`&.${paginationItemClasses.disabled}`]: {
              color: Colors.grey300,
              background: Colors.grey100,
            },
          },
        },
        outlinedPrimary: {
          border: `1px solid ${Colors.grey200}`,
          color: Colors.grey700,
          background: Colors.generalWhite,
          [`&:not([disabled]):not(.${paginationItemClasses.ellipsis}):not(.${paginationItemClasses.selected})`]: {
            '&:hover': {
              color: Colors.generalWhite,
              borderColor: Colors.generalPrimary,
              background: Colors.generalPrimary,
            },
            '&:focus': {
              color: Colors.grey700,
              borderColor: Colors.grey200,
              background: Colors.generalWhite,
            },
          },
          '&:not([disabled])': {
            [`&.${paginationItemClasses.selected}`]: {
              color: Colors.generalWhite,
              background: Colors.generalPrimary,
              borderColor: 'transparent',
            },
          },
          '&:disabled': {
            opacity: 1,
            color: Colors.grey300,
            borderColor: Colors.grey200,
            background: Colors.grey100,
          },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          width: '100%',
          height: 8,
          borderRadius: 4,
        },
        bar: {
          borderRadius: 4,
        },
        colorPrimary: {
          background: Colors.grey200,
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          [theme.breakpoints.up('xxs')]: {
            padding: theme.spacing(1.75, 3),
          },
          [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(3),
          },
          [`&.${accordionClasses.expanded}`]: {
            // minHeight: 'auto',
            margin: 0,
          },
          '&:last-of-type': {
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
          },
          '&:before': {
            display: 'none',
          },
        },
        rounded: {
          borderRadius: 12,
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          minHeight: '100%',
          padding: theme.spacing(0),
          color: Colors.grey700,
          [`&.${accordionSummaryClasses.expanded}`]: {
            minHeight: '100%',
            // color: Colors.green800,
          },
        },
        expandIconWrapper: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 24,
          width: 32,
          height: 32,
          minWidth: 32,
          minHeight: 32,
          transition: theme.transitions.create('transform'),
        },
        content: {
          display: 'flex',
          alignItems: 'center',
          fontSize: 18,
          fontWeight: 700,
          lineHeight: '26px',
          minHeight: 32,
          margin: theme.spacing(0),
          transition: theme.transitions.create('color'),
          color: Colors.grey700,
          [`&.${accordionSummaryClasses.expanded}`]: {
            margin: theme.spacing(0),
            // color: Colors.green800,
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: theme.spacing(1, 0, 0),
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          fontSize: 14,
          fontWeight: 400,
          lineHeight: '20px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: shadows[3],
          borderRadius: 8,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          outline: 'none',
          borderRadius: 0,
          margin: theme.spacing(4),
          overflow: 'hidden',
          background: Colors.generalWhite,
          border: 'transparent',
          boxShadow: 'none',
          [`&.${dialogClasses.paperScrollBody}`]: {
            [theme.breakpoints.up('xxs')]: {
              maxWidth: `calc(100% - ${theme.spacing(2)})`,
              width: `calc(100% - ${theme.spacing(4)})`,
            },
            [theme.breakpoints.up('sm')]: {
              maxWidth: 'initial',
            },
          },
          [theme.breakpoints.up('xxs')]: {
            // padding: theme.spacing(2.5, 2),
            margin: theme.spacing(2),
          },
          [theme.breakpoints.up('sm')]: {
            // padding: theme.spacing(4, 3),
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: 'separate',
          minWidth: '100%',
          width: 'auto',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        head: {
          background: 'transparent',
          whiteSpace: 'nowrap',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          fontSize: 14,
          minWidth: '7rem',
          padding: theme.spacing(1, 0.5),
          borderBottom: '1px solid',
          borderColor: Colors.grey700,
        },
        head: {
          padding: theme.spacing(1.5),
          background: Colors.grey50,
          color: Colors.grey500,
          textAlign: 'center',
        },
        body: {
          padding: theme.spacing(1.5),
          borderColor: Colors.grey400,
        },
      },
    },
    MuiTableSortLabel: {
      styleOverrides: {
        root: {
          [`&.${tableSortLabelClasses.active}`]: {
            [`& .${tableSortLabelClasses.icon}`]: {
              // color: Colors.darkGrey,
            },
          },
          '&:hover': {
            // color: Colors.darkGrey,
            [`& .${tableSortLabelClasses.icon}`]: {
              opacity: 1,
            },
          },
        },
        icon: {
          fontSize: 10,
          margin: 0,
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          outline: 'none',
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: '5.5px',
        },
        colorPrimary: {
          color: Colors.grey600,
          [`& .${touchRippleClasses.root}`]: {
            // color: Colors.green100,
          },
          [`&.${checkboxClasses.root}`]: {
            '&:not([disabled])': {
              '&:hover': {
                // backgroundColor: Colors.green0,
              },
            },
          },
          [`&.${checkboxClasses.disabled}`]: {
            color: Colors.grey300,
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 7.5,
          [`& .${svgIconClasses.root}`]: {
            fontSize: 20,
          },
        },
        colorPrimary: {
          color: Colors.grey600,
          [`& .${touchRippleClasses.root}`]: {
            // color: Colors.green100,
          },
          [`&.${checkboxClasses.root}`]: {
            '&:not([disabled])': {
              '&:hover': {
                // backgroundColor: Colors.green0,
              },
            },
          },
          [`&.${checkboxClasses.disabled}`]: {
            color: Colors.grey200,
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderWidth: 1,
          borderColor: Colors.grey200,
          borderBottom: 0,
        },
      },
    },
  },
});
