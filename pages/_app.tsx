import "styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import Head from "next/head";
import Header from "components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Developer Gram !</title>
      </Head>
      <Header />
      <div className="p-5 lg:pt-0">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
