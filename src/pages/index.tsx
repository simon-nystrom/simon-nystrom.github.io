import type { NextPage } from "next";
import PostList, { PostMeta } from "../components/PostList";
import getPosts from "../utils/posts";

type Props = {
  posts: PostMeta[];
};

const Home: NextPage<Props> = (props: Props) => {
  return <PostList posts={props.posts}></PostList>;
};

export async function getStaticProps() {
  const posts = await getPosts();
  return { props: { posts: posts.map((p) => ({ ...p.data })) } };
}

export default Home;
