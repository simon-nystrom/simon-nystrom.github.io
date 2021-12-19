import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/Nav";

function NewcurrentApp({ Component, pageProps }: AppProps) {
  return (
    <div className="p-4">
      <Nav></Nav>
      <Component {...pageProps} />
    </div>
  );
}

export default NewcurrentApp;
