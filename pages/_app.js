import withRedux from 'next-redux-wrapper';
import Head from 'next/head';
import { Provider } from 'react-redux';
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

// const makeStore = () => useStore;
// const wrapper = createWrapper(makeStore);
// export default wrapper.withRedux(MyApp);

export default withRedux(useStore)(MyApp);
