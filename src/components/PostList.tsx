import Divider from "./blog/Divider";
import Headers from "./blog/Headers";
import Tag from "./blog/Tag";
import PostRow from "./PostRow";

export type PostMeta = {
  title: string;
  date: Date;
  tags: string[];
  series: string;
  slug: string;
};

type Props = {
  posts: PostMeta[];
};

const PostList = ({ posts }: Props) => (
  <div className="mx-auto max-w-screen-md">
    <Headers.H1>Posts</Headers.H1>
    <div className="my-12"></div>
    <div style={{ maxHeight: "75vh", overflowY: "scroll" }}>
      {posts.map((post) => (
        <PostRow key={post.title} post={post}></PostRow>
      ))}
    </div>
  </div>
);

export default PostList;
