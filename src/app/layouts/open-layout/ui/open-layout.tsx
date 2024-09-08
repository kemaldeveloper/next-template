import { UiHeader } from '@/shared/ui/ui-header';
import { UiFooter } from '@/shared/ui/ui-footer';
import { makeStyles } from 'tss-react/mui';

export function OpenLayout({ children }: { children?: React.ReactNode }) {
  const { classes } = useStyles();

  return (
    <div className={classes.openLayout}>
      <UiHeader />
      <main className="main">{children}</main>
      <UiFooter />
    </div>
  );
}

const useStyles = makeStyles()(theme => ({
  openLayout: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
}));
