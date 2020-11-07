---
date: "2020-11-05 22:51"
series_title: "Creating a blog with React and Next.js"
title: "Routing in Next.js"
slug: "nextjs-routing"
part: 2
last_part: "?"
summary: "Learn about routing and dynamic routes in Next.js."
categories: []
published: true
tags: ["react", "javascript", "nextjs", "tutorial"]
---

Although this post is part of a series, the aim is for the post to be able to stand on its own, you should be able to take away some knowledge even if you're not following the tutorial series. If you're interested, the tutorial series starts here: [Part 1](https://newcurrent.se/blog/initialize-nextjs-project).

----

# Prerequisites

The prerequisites for this tutorial are stated in [Part 1](https://newcurrent.se/blog/initialize-nextjs-project).

----

# Basic routing

Routes in Next.js are constructed by keeping your folder structure in the way that you want your pages to be accessible in the browser. As we saw in the previous part of this tutorial, we're able to visit the root of the website and that's because we have an `index.js` file in the `pages` directory. 

The filename `index.js` is special in Next.js, it is what is served when you go to the root of the sub folder, like so:

- `pages/index.js` -> accessible at `/`
- `pages/blog/index.js` -> accessible at `/blog`

Since we're building a blog, let's create this `pages/blog/index.js` file. Create a folder named `blog` inside the `pages` directory and create an `index.js` file in there:

```javascript
const BlogPage = () => {
  return "This is the blog page!";
};

export default BlogPage;
```

If you run your project now by running `yarn dev`, you'll see that if you go to http://localhost:3000 you'll see the contents of `pages/index.js` but if you instead visit http://localhost:3000/blog you'll be greeted with *This is the blog page!*

Basic routing is cool and all, but it's not useful when we want to build dynamic routes that can be content-driven. Let's create a dynamic route that we can use for our blog posts.

----

# Dynamic routing

Similarly to how basic routing uses the folder and file structure in the `pages` directory, so does dynamic routing.

Dynamic routes can be constructed by naming a file like so: `[slug].js`. Let's create `pages/blog/[slug].js` and see what this actually does.

If we go to http://localhost:3000/blog we see that it still works, that's good, we still want to be able to navigate to the `/blog` route.

The `[slug].js` naming pattern makes it so that we can register routes dynamically at build time, let's add some code to our `[slug].js` file and look at how we can utilize this:

```javascript
const BlogPost = (props) => JSON.stringify(props);

export default BlogPost;

// This function is ran by Next.js to determine which 
// paths need to be created dynamically, here we've
// hardcoded one path that will be served when the
// slug matches "my-first-blog-post"
export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "my-first-blog-post" } }],
    fallback: false,
  };
}

// params in getStaticPaths({params}) are from getStaticPaths.
// Next.js runs this function to determine what props to
// pass to our React component.
// In this case we see that we only have one possible path
// and that is the path to "my-first-blog-post".
export async function getStaticProps({ params }) {
  return { props: { slug: params.slug } };
}
```

Visiting http://localhost:3000/blog/my-first-blog-post now shows you the props passed to the `BlogPost` component and should show you `{"slug":"my-first-blog-post"}`. As we can see, we have a prop called `slug`. That's from the `getStaticProps` function. If we try another path, that wasn't specified in the `getStaticPaths` function we'll notice that it gives a 404 response. All dynamic routes that use `getStaticProps` have to be specified by `getStaticPaths`.

More info about this here:
- [getStaticPaths](https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation)
- [getStaticProps](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation)

----

# Creating paths based on our blog posts

In the above section, I mentioned that all dynamic paths have to be specified in `getStaticPaths` if they use `getStaticProps`, while this is true, it's not useful doing all this by hand as it would get tedious quickly. Let's create a way to define these routes based on some fake blog posts.

In the `pages` directory, create a file called `_posts.js`, we'll use this file to define our posts. For now, these will be hardcoded, in a later part of this series we will read in Markdown files and generate our posts based on those. 

You might see a pattern now by the way, remember the file called `_app.js`? That one is similar to this `_posts.js` file we just created. Files that begin with an underscore won't be interpreted as accessible pages by Next.js.

Let `pages/posts.js` look like this:

```javascript
// Hardcoded for now to demonstrate dynamic routing.
// We'll generate this list based on Markdown files
// in a later part of this tutorial series
const posts = [
  {
    title: "My first blog post!",
    slug: "my-first-blog-post",
    date: "2020-11-05",
  },
  {
    title: "My second blog post!",
    slug: "my-second-blog-post",
    date: "2020-11-06",
  },
];

export default posts;
```

and modify `pages/blog/[slug].js` file to use this new `_posts.js` file:

```javascript
import posts from "../_posts";

// This post argument is passed from getStaticProps
const BlogPost = ({ post }) => (
  <article>
    <h1>{post.title}</h1>
    <p>{post.date}</p>
  </article>
);
export default BlogPost;

export async function getStaticPaths() {
  return {
    // Map all the posts to objects with the slug in the params object
    // since we want all our pages to be accessible, the paths array
    // needs to contain a list of all the posts slugs
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      // Since our slug should be unique we can use
      // it to find the post with the matching slug,
      // this will be the post we need to render
      post: posts.find((post) => post.slug === params.slug),
    },
  };
}
```

_It might look like React is missing as an import in the above code snippet, but Next.js actually lets us skip this declaration._

Let's also make our http://localhost:3000/blog page a bit more useful:

```javascript
import Link from "next/link";
import posts from "../_posts";

const BlogPage = ({ posts }) => (
  <ul>
    {posts.map((post) => (
      <li key={post.slug}>
        <Link href={`blog/${post.slug}`}>
          <a>{post.title}</a>
        </Link>
      </li>
    ))}
  </ul>
);

export default BlogPage;

export async function getStaticProps() {
  return {
    props: {
      posts,
    },
  };
}
```

----

# Creating a nav bar

While our page works, getting to and from blog posts is really annoying and our home page isn't even usable, it just says *Home sweet home*. Let's add a nav bar that shows up on every sub page, including the home page.

To do this, we can modify the `pages/_app.js` file. This file is ran for every page and code present in this component will be run for all pages. For more info about the `pages/_app.js` file you can check out the previous entry in this tutorial series or read more [here](https://nextjs.org/docs/advanced-features/custom-app).

Modify your `pages/_app.js` to look like this:

```javascript
import Link from "next/link";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
        </ul>
      </nav>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
```

Try your app out now, navigate around a bit and you should see that the links to Home and Blog are always present at the top of the page and you can use those to navigate around, similarly you can navigate to the blog posts from the Blog page.

----

Now we have a `Next.js` app that supports dynamic routing based on a data set ready to go for the next part of this tutorial series.

Here's what my project looks like at this stage: https://github.com/simon-nystrom/nextjs-blog-example/tree/p2

I hope you'll keep following along with the tutorial, please don't hesitate to ask if you have any questions or tell me if I missed something!
