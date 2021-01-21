import Head from 'next/head';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { useStore } from '../redux/Store';
import '../styles/404.css';
import '../styles/error.css';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps, store }) => {
  MyApp.getInitialProps = async ({ Component, ctx }) => {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps };
  };

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

export default withRedux(useStore)(MyApp);
