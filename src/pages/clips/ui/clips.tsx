import { makeStyles } from 'tss-react/mui';

export function ClipsPage() {
  const { classes } = useStyles();

  return <div className={classes.page}>Clips</div>;
}

const useStyles = makeStyles()(theme => ({
  page: {},
}));
