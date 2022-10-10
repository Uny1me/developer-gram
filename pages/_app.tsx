import "styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Developer Gram !</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
