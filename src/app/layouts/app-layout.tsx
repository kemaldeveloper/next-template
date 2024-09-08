import { makeStyles } from 'tss-react/mui';

export function AppLayout({ children }: { children?: React.ReactNode }) {
  const { classes } = useStyles();

  return <div className={classes.appLayout}>{children}</div>;
}

const useStyles = makeStyles()(theme => ({
  appLayout: {},
}));
