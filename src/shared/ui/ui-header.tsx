import { HTMLAttributes, ReactNode } from 'react';
import { makeStyles } from 'tss-react/mui';
import { UiLogo } from './ui-logo';

type HeaderProps = HTMLAttributes<HTMLElement> & {
  links?: ReactNode;
  right?: ReactNode;
};

export const UiHeader = (props: HeaderProps) => {
  const { classes } = useStyles();

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <UiLogo variant="white" />
        {props.links}
      </div>
      {props.right}
    </header>
  );
};

const useStyles = makeStyles()(theme => ({
  header: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: theme.palette.custom.general.black,
    zIndex: 10,
    [theme.breakpoints.down('xl')]: {
      position: 'fixed',
      top: 0,
      left: '50%',
      width: '100%',
      transform: 'translateX(-50%)',
    },
    [theme.breakpoints.up('xxs')]: {
      padding: theme.spacing(1.75, 2),
    },
    [theme.breakpoints.up('xl')]: {
      padding: theme.spacing(2, 4),
    },
    [theme.breakpoints.up('xxl')]: {
      padding: theme.spacing(2, 8),
    },
  },
  inner: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(6),
  },
}));
