import { alpha } from '@mui/material';
import Link, { LinkProps } from 'next/link';
import { makeStyles } from 'tss-react/mui';
import { fonts } from '../styles';
import { UNIQUE_ID } from '../constants/uniqueIdsForMakeStyle';

type LinkPropsBase = {
  type: 'nextLink' | 'standardLink' | 'buttonLink';
  color?: 'black' | 'white';
  variant?: 'desktopSmall' | 'desktopLarge' | 'mobileLarge' | 'mobileNavigation';
  startIconClassName?: string;
  endIconClassName?: string;
  textDecorationNone?: boolean;
  fullWidth?: boolean;
};

type NextLinkTypeProps = LinkPropsBase & {
  href: string;
  type: 'nextLink';
  nextLinkTypeProps?: Partial<LinkProps> & { className?: string };
};

type StandardLinkTypeProps = LinkPropsBase & {
  href: string;
  type: 'standardLink';
  standardLinkTypeProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
};

type ButtonLinkTypeProps = LinkPropsBase & {
  type: 'buttonLink';
  buttonLinkTypeProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
};

type UiLinkProps = NextLinkTypeProps | StandardLinkTypeProps | ButtonLinkTypeProps;

export const UiLink = (props: React.PropsWithChildren<UiLinkProps>) => {
  const {
    type = 'nextLink',
    color = 'black',
    variant = 'desktopSmall',
    fullWidth,
    textDecorationNone,
    endIconClassName,
    startIconClassName,
    children,
  } = props;

  const { classes, cx } = useStyles();

  const LinkTypes: Record<Required<UiLinkProps>['type'], React.JSX.Element> = {
    nextLink: (
      <Link
        {...(props as NextLinkTypeProps).nextLinkTypeProps}
        href={(props as NextLinkTypeProps).href ?? ''}
        className={cx(classes.link, color, variant, (props as NextLinkTypeProps).nextLinkTypeProps?.className, {
          textDecorationNone,
          fullWidth,
        })}
      >
        {startIconClassName && (
          <div className={cx(classes.iconWrap, classes.startIconWrap)}>
            <i className={startIconClassName} />
          </div>
        )}
        {<span className={classes.children}>{children}</span>}
        {endIconClassName && (
          <div className={cx(classes.iconWrap, classes.endIconWrap)}>
            <i className={endIconClassName} />
          </div>
        )}
      </Link>
    ),
    standardLink: (
      <a
        {...(props as StandardLinkTypeProps).standardLinkTypeProps}
        href={(props as StandardLinkTypeProps).href}
        className={cx(classes.link, color, variant, (props as StandardLinkTypeProps).standardLinkTypeProps?.className, {
          textDecorationNone,
          fullWidth,
        })}
      >
        {startIconClassName && (
          <div className={cx(classes.iconWrap, classes.startIconWrap)}>
            <i className={startIconClassName} />
          </div>
        )}
        {<span className={classes.children}>{children}</span>}
        {endIconClassName && (
          <div className={cx(classes.iconWrap, classes.endIconWrap)}>
            <i className={endIconClassName} />
          </div>
        )}
      </a>
    ),
    buttonLink: (
      <>
        <button
          {...(props as ButtonLinkTypeProps).buttonLinkTypeProps}
          className={cx(
            classes.link,
            classes.buttonLink,
            color,
            variant,
            (props as ButtonLinkTypeProps).buttonLinkTypeProps?.className,
            { textDecorationNone, fullWidth },
          )}
        >
          {startIconClassName && (
            <div className={cx(classes.iconWrap, classes.startIconWrap)}>
              <i className={startIconClassName} />
            </div>
          )}
          {<span className={classes.children}>{children}</span>}
          {endIconClassName && (
            <div className={cx(classes.iconWrap, classes.endIconWrap)}>
              <i className={endIconClassName} />
            </div>
          )}
        </button>
      </>
    ),
  };

  return <>{LinkTypes?.[type] ?? null}</>;
};

const useStyles = makeStyles<void, 'children' | 'buttonLink'>({ uniqId: UNIQUE_ID })((theme, _, classes) => {
  return {
    link: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      width: 'fit-content',
      transition: theme.transitions.create('all'),
      '&:hover': {
        '&:not(.textDecorationNone)': {
          [`.${classes.children}`]: {
            [theme.breakpoints.up('lg')]: {
              '&:after': {
                opacity: 1,
                visibility: 'visible',
              },
            },
          },
        },
      },
      '&.desktopSmall': {
        fontSize: 14,
        fontWeight: 400,
        lineHeight: '18px',
      },
      '&.desktopLarge': {
        fontSize: 22,
        fontWeight: 400,
        lineHeight: '34px',
      },
      '&.mobileLarge': {
        fontSize: 17,
        fontWeight: 400,
        lineHeight: '26px',
      },
      '&.mobileNavigation': {
        fontFamily: fonts.wadik.style.fontFamily,
        fontSize: 15,
        fontWeight: 700,
        lineHeight: '18px',
      },
      '&.fullWidth': {
        width: 'inital',
      },
      '&.active': {
        '&:not(.textDecorationNone)': {
          [`.${classes.children}`]: {
            '&:after': {
              opacity: 1,
              visibility: 'visible',
            },
          },
        },
      },
      '&.black': {
        color: theme.palette.custom.grey[800],
        '&:hover': {
          color: theme.palette.custom.grey[700],
        },
      },
      '&.white': {
        color: theme.palette.custom.general.white,
        '&:hover': {
          color: alpha(theme.palette.custom.general.white, 0.8),
        },
      },
    },
    children: {
      position: 'relative',
      color: 'inherit',
      '&:after': {
        content: '""',
        position: 'absolute',
        left: '50%',
        bottom: -1,
        width: '100%',
        height: 1,
        background: 'currentColor',
        opacity: 0,
        transform: 'translateX(-50%)',
        visibility: 'hidden',
        transition: theme.transitions.create('all'),
      },
    },
    iconWrap: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 24,
    },
    startIconWrap: {
      marginRight: theme.spacing(0.25),
    },
    endIconWrap: {
      marginLeft: theme.spacing(0.25),
    },
    buttonLink: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      padding: 0,
      '&:focus': {
        outline: 'none',
      },
    },
  };
});
