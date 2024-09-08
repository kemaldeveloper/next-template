import { IconButton, SwipeableDrawer, SwipeableDrawerProps } from '@mui/material';
import { ReactNode } from 'react';
import { makeStyles } from 'tss-react/mui';
import mobileMenuBg from '@/shared/assets/img/mobile-menu-vertical-bg.png';

type QSwipeableDrawerProps = SwipeableDrawerProps & {
  header?: ReactNode;
  footer?: ReactNode;
  onHandleClose: () => void;
};

export const QSwipeableDrawer = (props: QSwipeableDrawerProps) => {
  const { header, children, footer, onClose, onHandleClose, ...rest } = props;
  const { classes } = useStyles();

  const handleClose = (e: React.MouseEvent<{}>) => {
    if (onClose) {
      onClose(e);
      onHandleClose();
    }
  };

  const handleCloseButton = (e: React.MouseEvent<{}>) => {
    handleClose(e);
  };

  return (
    <SwipeableDrawer swipeAreaWidth={30} {...rest} onClose={handleClose}>
      <div className={classes.wrap}>
        <div className={classes.header}>
          {header}
          <IconButton className={classes.closeButton} size="large" onClick={handleCloseButton}>
            <i className="custom-icon-close" />
          </IconButton>
        </div>
        <div className={classes.body}>{children}</div>
        <div className={classes.footer}>{footer}</div>
      </div>
    </SwipeableDrawer>
  );
};

const useStyles = makeStyles()(theme => ({
  closeButton: {
    color: theme.palette.custom.general.black,
  },
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(1, 2),
  },
  body: {
    padding: theme.spacing(4, 2, 3),
  },
  footer: {
    position: 'relative',
    background: theme.palette.custom.grey[25],
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: theme.spacing(3, 2, 2),
    flex: 1,
    zIndex: 1,
    '&:after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '50%',
      width: '100%',
      height: '100%',
      transform: 'translateX(-50%)',
      background: `url(${mobileMenuBg.src}) no-repeat center center/cover`,
      opacity: 0.2,
      zIndex: -1,
    },
  },
}));
