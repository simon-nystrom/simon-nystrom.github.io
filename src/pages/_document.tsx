import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import Link from "next/link";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
          <Link passHref href="/privacy_policy">
            <a
              style={{
                position: "fixed",
                bottom: 0,
                fontSize: 10,
                padding: 4,
              }}
            >
              Privacy Policy
            </a>
          </Link>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
