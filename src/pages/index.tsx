import type { NextPage } from "next";
import PostList, { PostMeta } from "../components/PostList";
import styles from "../styles/Home.module.css";
import getPosts, { getPosts1 } from "../utils/posts";

type Props = {
  posts: PostMeta[];
};

const Home: NextPage<Props> = (props: Props) => {
  return <PostList posts={props.posts}></PostList>;
};

export async function getStaticProps() {
  const posts = await getPosts1();
  return { props: { posts: posts.map((p) => ({ ...p.data })) } };
}

export default Home;
