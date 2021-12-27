/** @type {import('next').NextConfig} */

const remarkFrontmatter = import("remark-frontmatter");
const { remarkMdxFrontmatter } = import("remark-mdx-frontmatter");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      require("remark-prism"),
      remarkFrontmatter,
      remarkMdxFrontmatter,
    ],
    rehypePlugins: [],
  },
});

module.exports = withMDX({
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
});
