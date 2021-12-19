import fs from "fs";

const getPosts = async () => {
  const postsDir = fs.readdirSync("src/pages/posts");
  const files = postsDir.map((file) =>
    import(`/src/pages/posts/${file}`).then((p) => p.meta)
  );
  return Promise.all(files);
};

export default getPosts;
