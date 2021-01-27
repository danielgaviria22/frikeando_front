import App from 'next/app';
import Head from 'next/head'
import Header from '../components/Header';

class Frikeando extends App {
  render() {
    const { Component } = this.props;
    return (
      <>
        <Head>
          <title>Frikeando - Camisetas Divertidas y frikis</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Share:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        </Head>
        <Header />
        <Component />
      </>
    )
  }
};

export default Frikeando;