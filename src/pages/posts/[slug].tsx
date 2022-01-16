import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Script from "next/script";
import remarkFrontmatter from "remark-frontmatter";
import { remarkMdxFrontmatter } from "remark-mdx-frontmatter";
import A from "../../components/blog/A";
import Code from "../../components/blog/Code";
import Divider from "../../components/blog/Divider";
import Headers from "../../components/blog/Headers";
import Img from "../../components/blog/Img";
import InlineCode from "../../components/blog/InlineCode";
import Paragraph from "../../components/blog/Paragraph";
import PostInfo from "../../components/blog/PostInfo";
import Pre from "../../components/blog/Pre";
import SeriesInfo from "../../components/blog/SeriesInfo";
import UL from "../../components/blog/UL";
import getPosts from "../../utils/posts";

const components = {
  h1: Headers.H1,
  h2: Headers.H2,
  p: Paragraph,
  inlineCode: InlineCode,
  ul: UL,
  img: Img,
  a: A,
  hr: Divider,
  code: Code,
  pre: Pre,
};

const Post = (props: Props) => (
  <div className="pb-20">
    <Headers.H1>{props.meta.title}</Headers.H1>
    <PostInfo
      date={props.meta.date}
      tags={props.meta.tags as unknown as string[]}
    ></PostInfo>
    <SeriesInfo series={props.meta.series}></SeriesInfo>
    <MDXRemote
      components={components}
      compiledSource={props.source.compiledSource}
    ></MDXRemote>
  </div>
);

type Props = {
  source: MDXRemoteSerializeResult;
  meta: {
    [key: string]: string | string;
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const posts = await getPosts();

  const post = posts.find((p) => p.data.slug == params?.slug)!;

  const source = await serialize(post?.content, {
    mdxOptions: {
      remarkPlugins: [
        require("remark-prism"),
        remarkFrontmatter,
        remarkMdxFrontmatter,
      ],
    },
  });

  return { props: { source, meta: post.data } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();

  return {
    paths: posts.map((post) => ({
      params: { slug: post.data.slug },
    })),
    fallback: false,
  };
};

export default Post;
