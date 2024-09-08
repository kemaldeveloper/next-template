import { AppProps } from 'next/app';
import { AppProvider } from '../providers/app-provider';
import { NextPage } from 'next';
import { NextPageLayout } from '@/shared/lib/next';
import { EmotionCache } from '@emotion/react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: NextPageLayout;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
  userAgent?: string | undefined;
};

export function App(props: AppPropsWithLayout) {
  const { Component, pageProps } = props;
  const getLayout = Component.getLayout ?? (page => page);

  return <AppProvider {...props}>{getLayout(<Component {...pageProps} />, pageProps)}</AppProvider>;
}
