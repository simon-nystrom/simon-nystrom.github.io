import Link from "next/link";
import Tag from "./blog/Tag";
import { PostMeta } from "./PostList";

const PostRow = ({ post }: { post: PostMeta }) => (
  <Link passHref href={`/posts/${post.slug}`}>
    <div className="mb-12 flex flex-col md:flex-row px-3 py-1 border-orange-200 border-b transition-all hover:border-opacity-100 duration-150 border-l-2 border-opacity-25 cursor-default hover:pl-4 justify-between md:items-center">
      <h2 className="text-2xl mr-4 mb-2">{post.title}</h2>
      <div className="flex flex-row md:flex-col justify-end items-end md:justify-center gap-3 mb-2">
        <p className="text-sm text-gray-400">{post.date}</p>
        <div className="flex-row items-end gap-2 hidden sm:flex">
          {/* <Tag idx={0} text={post.series}></Tag>
          {post.tags.map((tag, i) => (
            <Tag key={tag} idx={i + 1} text={tag}></Tag>
          ))} */}
        </div>
      </div>
    </div>
  </Link>
);

export default PostRow;
