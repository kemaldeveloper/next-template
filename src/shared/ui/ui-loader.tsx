import { Box, BoxProps, CircularProgress, Grid, useTheme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

interface UiLoaderProps extends BoxProps {
  size?: number;
  isAbsolute?: boolean;
  isFixed?: boolean;
  withoutOpacity?: boolean;
  overlayColor?: React.CSSProperties['backgroundColor'];
}

export const UiLoader = (props: UiLoaderProps) => {
  const {
    color,
    isFixed,
    size = 40,
    zIndex = 2,
    minHeight = 0,
    isAbsolute = false,
    withoutOpacity = false,
    overlayColor,
    className,
    ...rest
  } = props;
  const { classes, cx } = useStyles();
  const { palette } = useTheme();

  const rendeLoader = () => {
    return (
      <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', color: color || palette.primary.main }}>
          <CircularProgress size={size} color="inherit" />
        </Box>
      </Grid>
    );
  };

  if (isFixed || isAbsolute) {
    return (
      <Box
        {...rest}
        className={cx({ [classes.isFixed]: isFixed, [classes.isAbsolute]: isAbsolute }, className)}
        sx={{ minHeight, zIndex, ...rest.sx }}
      >
        <Box
          className={cx(classes.overline, {
            [classes.bgColor]: !overlayColor,
            [classes.withOpactiy]: !withoutOpacity,
          })}
          sx={{
            backgroundColor: overlayColor,
          }}
        />
        {rendeLoader()}
      </Box>
    );
  }

  return (
    <Box {...rest} className={cx(classes.root, className)} sx={{ minHeight, zIndex, ...rest.sx }}>
      {rendeLoader()}
    </Box>
  );
};

const useStyles = makeStyles()(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexBasis: '100%',
  },
  isAbsolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  isFixed: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overline: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  bgColor: {
    backgroundColor: theme.palette.custom.general.white,
  },
  withOpactiy: {
    opacity: 0.7,
  },
}));
