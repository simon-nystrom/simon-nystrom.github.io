import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/Nav";
import Head from "next/head";

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
    </div>
  );
}

export default NewcurrentApp;
