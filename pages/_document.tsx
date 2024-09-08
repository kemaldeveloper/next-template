import * as React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentProps, DocumentContext } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import { AppType } from 'next/app';
import { createEmotionCache } from '@/shared/lib/emotion';
import { fonts, theme } from '@/shared/styles';
import { AppPropsWithLayout } from '@/app/pub/app';
import { DocumentHeadTags } from '@mui/material-nextjs/v13-pagesRouter';

interface MyDocumentProps extends DocumentProps {
  emotionStyleTags: JSX.Element[];
  userAgent: string | undefined;
}

export default function MyDocument(props: MyDocumentProps) {
  return (
    <Html lang="ru" className={fonts.hauora.className}>
      <Head>
        <meta name="theme-color" content={theme.palette.primary.main} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="emotion-insertion-point" content="" />
        <DocumentHeadTags emotionStyleTags={props.emotionStyleTags} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);
  const userAgent = typeof window === 'undefined' ? ctx.req?.headers?.['user-agent'] : window.navigator.userAgent;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: React.ComponentType<React.ComponentProps<AppType> & AppPropsWithLayout>) =>
        function EnhanceApp(props) {
          return <App userAgent={userAgent} emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents Emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map(style => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));
  return {
    userAgent,
    ...initialProps,
    emotionStyleTags,
  };
};

