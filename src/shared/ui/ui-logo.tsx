import { makeStyles } from 'tss-react/mui';
import { ROUTER_PATHS } from '../constants';
import Link, { LinkProps } from 'next/link';

type LogoProps = {
  linkProps?: LinkProps & { className?: string };
  variant: 'white' | 'black';
};

export const UiLogo = (props: LogoProps) => {
  const { classes, cx } = useStyles();

  return (
    <Link
      {...props.linkProps}
      href={props.linkProps?.href ? props.linkProps?.href : ROUTER_PATHS.MAIN}
      className={cx(classes.logo, { [props.variant]: true })}
    >
      LOGO
    </Link>
  );
};

const useStyles = makeStyles()(theme => ({
  logo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    [theme.breakpoints.up('xxs')]: {
      width: 87,
      height: 15,
    },
    [theme.breakpoints.up('xl')]: {
      width: 138,
      height: 25,
    },
    '& svg': {
      width: '100%',
      height: '100%',
    },
    '&.white': {
      color: theme.palette.custom.general.white,
    },
    '&.black': {
      color: theme.palette.custom.general.black,
    },
  },
}));
