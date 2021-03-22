import Head from 'next/head';
import { useStore } from '../redux/Store';
import { Provider } from 'react-redux';
import '../styles/404.css';
import '../styles/error.css';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);

  return (
    <>
      <Head>
        <title>NextConnect</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default MyApp;
