import Link from "next/link";
import Headers from "./blog/Headers";
import Tag from "./blog/Tag";
import { PostMeta } from "./PostList";

const PostRow = ({ post }: { post: PostMeta }) => (
  <Link passHref href={`/posts/${post.slug}`}>
    <div className="flex flex-col md:flex-row justify-between border px-3 py-2 rounded-md border-opacity-20 border-orange-400 transition-all hover:border-opacity-100 duration-150">
      <h2 className="text-2xl">{post.title}</h2>
      <div className="flex flex-col items-end justify-center gap-2">
        <p className="text-sm mt-2 text-gray-400">{post.date}</p>
        <div className="flex flex-row items-end gap-2">
          <Tag idx={0} text={post.series}></Tag>
          {post.tags.map((tag, i) => (
            <Tag key={tag} idx={i + 1} text={tag}></Tag>
          ))}
        </div>
      </div>
    </div>
  </Link>
);

export default PostRow;
