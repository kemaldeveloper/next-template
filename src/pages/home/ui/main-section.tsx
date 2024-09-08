import { makeStyles } from 'tss-react/mui';

export const MainSection = () => {
  const { classes } = useStyles();

  return <section className={classes.mainSection}></section>;
};

const useStyles = makeStyles()(theme => ({
  mainSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));
