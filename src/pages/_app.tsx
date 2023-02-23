import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from '../styles/global';
import NextNProgress from 'nextjs-progressbar';
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Discovery new places</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
    </>
  );
};

export default App;
