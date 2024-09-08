import { makeStyles } from 'tss-react/mui';

export const useCommonStyles = () => {
  const { classes, ...rest } = useStyles();

  return { ...rest, commonClasses: classes };
};

const useStyles = makeStyles()(theme => ({
  routerLink: {
    textDecoration: 'none',
  },
  inlineBlock: {
    display: 'inline-block',
  },
  aic: {
    display: 'flex',
    alignItems: 'center',
  },
  textUnderLine: {
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: -1,
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: 'currentColor',
      width: '100%',
      height: 1,
    },
  },
  bolder: {
    fontWeight: 'bold',
  },
  relative: {
    position: 'relative',
  },
  fileInput: {
    display: 'none',
  },
  textDecorationNone: {
    textDecoration: 'none',
  },
  widthFitContent: {
    width: 'fit-content',
  },
  brDisplay: {
    [theme.breakpoints.up('xxs')]: {
      '& br': {
        display: 'none',
      },
    },
    [theme.breakpoints.up('sm')]: {
      '& br': {
        display: 'initial',
      },
    },
  },
  primaryMainColor: {
    color: theme.palette.primary.main,
  },
}));
