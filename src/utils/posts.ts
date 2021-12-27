import fs from "fs";
import matter from "gray-matter";

const getPosts = async () => {
  const postsDir = fs.readdirSync("src/pages/posts");
  const files = postsDir.map((file) =>
    import(`/src/pages/posts/${file}`).then((p) => p.meta)
  );
  return Promise.all(files);
};

export const getPosts1 = async () => {
  const postsDir = fs.readdirSync("posts");
  const files = postsDir.map((file) =>
    matter(fs.readFileSync(`posts/${file}`, "utf-8"))
  );
  return files;
};

export default getPosts;
