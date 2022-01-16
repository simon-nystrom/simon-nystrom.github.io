import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/Nav";
import Head from "next/head";
import Script from "next/script";

function NewcurrentApp({ Component, pageProps }: AppProps) {
  return (
    <div className="p-4">
      <Head>
        <title>Newcurrent | A curious software engineer</title>
        <meta
          name="description"
          content="Newcurrent is the blog of a software engineer with a passion for learning and developing as a professional. I write about all kinds of topics related to software engineering / programming."
        />
      </Head>
      <Nav></Nav>
      <Component {...pageProps} />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-DBYBSY30B8"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-DBYBSY30B8');
        `}
      </Script>
    </div>
  );
}

export default NewcurrentApp;
