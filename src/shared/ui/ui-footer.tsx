import { makeStyles } from 'tss-react/mui';

type UiFooterProps = {};

export const UiFooter = (props: UiFooterProps) => {
  const { classes } = useStyles();

  return <footer className={classes.footer}>Footer</footer>;
};

const useStyles = makeStyles()(theme => ({
  footer: {
    [theme.breakpoints.up('xxs')]: {
      padding: theme.spacing(8, 2),
    },
    [theme.breakpoints.up('xl')]: {
      padding: theme.spacing(8, 4),
    },
    [theme.breakpoints.up('xxl')]: {
      padding: theme.spacing(8),
    },
  },
  divider: {
    [theme.breakpoints.up('xxs')]: {
      marginBottom: theme.spacing(3),
    },
    [theme.breakpoints.up('xl')]: {
      marginBottom: theme.spacing(7),
    },
  },
  topLine: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(3),
  },
  bottomLine: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.up('xxs')]: {
      flexDirection: 'column-reverse',
      gap: theme.spacing(1),
    },
    [theme.breakpoints.up('xl')]: {
      flexDirection: 'row',
      gap: 0,
    },
  },
}));
