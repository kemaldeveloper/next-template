import { ReactNode } from 'react';
import { CssBaseline } from '@mui/material';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import { ComposeChildren } from '@/shared/lib/react';
import { theme } from '@/shared/styles';
import { queryClient } from '@/shared/api/query-client';
import { HydrationBoundary, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AppPropsWithLayout } from '../pub/app';

export function AppProvider({ children, ...rest }: AppPropsWithLayout & { children?: ReactNode }) {
  return (
    <ComposeChildren>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={rest.pageProps.dehydratedState}>
          <AppCacheProvider {...rest}>
            <StyledEngineProvider injectFirst>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
              </ThemeProvider>
            </StyledEngineProvider>
          </AppCacheProvider>
        </HydrationBoundary>
        <ReactQueryDevtools client={queryClient} initialIsOpen={false} />
      </QueryClientProvider>
      {/* <Toasts config={{ lifeTime: 3000 }} /> */}
    </ComposeChildren>
  );
}
