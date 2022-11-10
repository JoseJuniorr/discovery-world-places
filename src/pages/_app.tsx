import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from '../styles/global';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Discovery new places</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default App;
