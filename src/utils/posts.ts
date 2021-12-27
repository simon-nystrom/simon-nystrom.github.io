import fs from "fs";
import matter from "gray-matter";

export const getPosts = async () => {
  const postsDir = fs.readdirSync("posts");
  const files = postsDir.map((file) =>
    matter(fs.readFileSync(`posts/${file}`, "utf-8"))
  );
  return files;
};

export default getPosts;
