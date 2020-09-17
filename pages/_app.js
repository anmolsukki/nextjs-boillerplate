import React from 'react';
import App, { Container } from 'next/app';
import '../styles/globals.css';

class MyApp extends App {
  render() {
    const { Component, pageProps, auth } = this.props;

    return (
      <Container>
        <Component {...pageProps} auth={auth} />
      </Container>
    );
  }
}

export default MyApp;
