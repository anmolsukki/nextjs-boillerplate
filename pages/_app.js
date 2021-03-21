import Head from 'next/head';
import { wrapper } from '../redux/Store';
import '../styles/404.css';
import '../styles/error.css';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>NextConnect</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};
export default wrapper.withRedux(MyApp);
