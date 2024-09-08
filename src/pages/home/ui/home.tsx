import { makeStyles } from 'tss-react/mui';
import { MainSection } from './main-section';

export function HomePage() {
  const { classes } = useStyles();

  return <div className={classes.page}>Home</div>;
}

const useStyles = makeStyles()(theme => ({
  page: {},
}));
