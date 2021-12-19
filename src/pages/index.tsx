import type { NextPage } from "next";
import PostList, { PostMeta } from "../components/PostList";
import styles from "../styles/Home.module.css";
import getPosts from "../utils/posts";

type Props = {
  posts: PostMeta[];
};

const Home: NextPage<Props> = (props: Props) => {
  return <PostList posts={props.posts}></PostList>;
};

export async function getStaticProps() {
  return { props: { posts: await getPosts() } };
}

export default Home;
