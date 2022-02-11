import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/Nav";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import LinkedInIcon from "../components/icons/LinkedInIcon";
import EmailIcon from "../components/icons/EmailIcon";
import GitHubIcon from "../components/icons/GitHubIcon";

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
      <div
        className="flex left-1/2 bottom-4 text-gray-300 items-center gap-4 justify-center fixed"
        style={{ marginLeft: "-66px" }}
      >
        <Link passHref href={"https://github.com/simon-nystrom"}>
          <a
            target={"_blank"}
            className="w-6 hover:text-orange-400 duration-150 transition-colors"
          >
            <GitHubIcon></GitHubIcon>
          </a>
        </Link>
        <Link
          passHref
          href={"https://www.linkedin.com/in/simon-nystr%C3%B6m-192b12a5/"}
        >
          <a
            target={"_blank"}
            className="w-6 hover:text-orange-400 duration-150 transition-colors"
          >
            <LinkedInIcon></LinkedInIcon>
          </a>
        </Link>
        <Link passHref href={"mailto:simon.nystrom90@gmail.com"}>
          <a className="w-8 hover:text-orange-400 duration-150 transition-colors">
            <EmailIcon></EmailIcon>
          </a>
        </Link>
      </div>
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
