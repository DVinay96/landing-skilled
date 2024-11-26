import type { AppProps } from 'next/app';
import GlobalStyle from '../src/app/styles/GlobalStyles';
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
        <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;