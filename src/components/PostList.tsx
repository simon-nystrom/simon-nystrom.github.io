import Headers from "./blog/Headers";
import Tag from "./blog/Tag";
import PostRow from "./PostRow";

export type PostMeta = {
  title: string;
  date: string;
  tags: string[];
  series: string;
  slug: string;
};

type Props = {
  posts: PostMeta[];
};

const PostList = ({ posts }: Props) => (
  <div className="mx-auto max-w-screen-md pb-20">
    <Headers.H1>Posts</Headers.H1>
    {posts.map((post) => (
      <PostRow key={post.title} post={post}></PostRow>
    ))}
  </div>
);

export default PostList;
