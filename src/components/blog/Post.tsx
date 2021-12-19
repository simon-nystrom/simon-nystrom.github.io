import { MDXProvider } from "@mdx-js/react";
import A from "./A";
import Divider from "./Divider";
import Headers from "./Headers";
import Img from "./Img";
import InlineCode from "./InlineCode";
import Paragraph from "./Paragraph";
import UL from "./UL";

const components = {
  h1: Headers.H1,
  h2: Headers.H2,
  p: Paragraph,
  inlineCode: InlineCode,
  ul: UL,
  img: Img,
  a: A,
  hr: Divider,
};

const Post = (props: any) => (
  <MDXProvider components={components}>
    <main className="mx-auto md:max-w-screen-md pb-20 mt-8" {...props}></main>
  </MDXProvider>
);

export default Post;
