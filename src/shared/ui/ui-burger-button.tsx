import { IconButton, IconButtonProps } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

type UiBurgerButtonProps = IconButtonProps & {};

export const UiBurgerButton = (props: UiBurgerButtonProps) => {
  const { classes } = useStyles();

  return (
    <IconButton className={classes.burgerBtn} {...props}>
      <i className="custom-icon-burger" />
    </IconButton>
  );
};

const useStyles = makeStyles()(theme => ({
  burgerBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    fontSize: 32,
    color: theme.palette.custom.general.white,
  },
}));
