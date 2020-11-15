---
date: "2020-11-15 21:40"
title: "Turning Markdown into HTML"
slug: "markdown-to-html"
series_title: "Creating a blog with React and Next.js"
part: 4
last_part: "?"
summary: "Learn how to turn Markdown into HTML."
categories: []
published: true
tags: ["react", "javascript", "nextjs", "tutorial"]
---

Turning `Markdown` into `HTML` is a very useful task. `Markdown` lends itself to simpler syntax requiring less nesting and lends itself to more readable documentation and reading in general. This tutorial will go through the steps required to read Markdown files and turn them into `HTML` that you can then use on your blog, like I do on [my site](https://newcurrent.se), or for any other purpose where you want easier editing potential. This tutorial will use these concepts on a Next.js blog, but those parts don't need to be followed to understand how this works.

Although this post is part of a series, the aim is for the post to be able to stand relatively well on its own, you should be able to take away some knowledge even if you're not following the tutorial series. If you're interested, the tutorial series starts here: [Part 1](https://newcurrent.se/blog/initialize-nextjs-project).


----

# Prerequisites

The prerequisites for this tutorial are stated in [Part 1](https://newcurrent.se/blog/initialize-nextjs-project) and the components we will be using in this tutorial are from the previous parts of this series: [1](https://newcurrent.se/blog/initialize-nextjs-project) [2](https://newcurrent.se/blog/nextjs-routing) and [3](https://newcurrent.se/blog/nextjs-styled-components).

----

# Utilizing Front Matter

It's useful to be able to connect metadata to `Markdown` documents that you write, this is commonly done with something called front matter (sometimes YAML Front Matter). An example of this is shown below:

```yaml
---
date: "2020-11-15 09:31"
title: "My first blog post!"
slug: "my-first-blog-post"
---
```

First, we need some libraries to help us make this task way easier, install two new dependencies:

```bash
yarn add -D marked front-matter
```

- [`marked`](https://marked.js.org/) will be used to turn `Markdown` into `HTML`
- [`front-matter`](https://www.npmjs.com/package/front-matter) will be used to extract the metadata from the `Front Matter` of our `Markdown` documents

Our first task will be to enable the use of `Front Matter` in our `Markdown` documents.

Start by creating a folder in the root of your project, call it `posts` and in that directory create a file `posts/my_first_post.md`:

````md
---
date: "2020-11-15 09:31"
title: "My first blog post!"
slug: "my-first-blog-post"
---

Welcome to my first blog post :)

```javascript
// Look, we have highlighting!

const a = 5;
const b = "Testing";

function yay() {
    console.log("Yay!");
}
```
````

Now that the base of our first `Markdown` file has been created, let's write some code to read posts from this folder and generate objects with this metadata and `HTML` so that we can use it on a page:

If you've been following along, go to the `pages/_posts.js`, otherwise create a new file that will hold the code for reading the `posts` directory:

```javascript
// pages/_posts.js

const fs = require("fs");
const marked = require("marked");
const fm = require("front-matter");

const postFiles = fs.readdirSync("posts");
const posts = [];
for (let i = 0; i < postFiles.length; i++) {
    const postContent = fs.readFileSync(`posts/${postFiles[i]}`, {
        encoding: "utf-8",
    });
    const { body, ...frontMatter } = fm(postContent);
    posts.push({
        html: marked(body),
        ...frontMatter,
    });
}

// posts will now be an array of objects with the following structure:
/*
posts = [
    {
        attributes: { date, title, slug } <- from our front matter,
        html: "A string with our HTML content"
    }
]
*/

export default posts;
```

Since we're exposing a new structure from `pages/_posts.js` we also need to change how the `BlogPage` component defined in `pages/blog/index.js` renders these files, only the Component part has changed, the rest remains the same. This is what it looks like now:

```javascript
// part of `pages/blog/index.js`
const BlogPage = ({ posts }) => {
  return (
    <Main>
      <Ul>
        {posts.map((post) => (
          <Li key={post.attributes.slug}>
            <Link href={`blog/${post.attributes.slug}`}>
              <a>
                <BlogLink>
                  <h3>{post.attributes.title}</h3>
                  <h5>{post.attributes.date}</h5>
                </BlogLink>
              </a>
            </Link>
          </Li>
        ))}
      </Ul>
    </Main>
  )
}
```

Notice that we're accessing `Front Matter` properties here on the `.attributes` object.

Our `pages/blog/[slug].js` also needs to be updated since it was also reading posts the old way. All the references to `title`, `slug` and `date` are now from a nested object. Here's that file updated:


```javascript
// `pages/blog/[slug].js`
import styled from "styled-components"
import posts from "../_posts"

const Article = styled.article`
  max-width: 56em;
  padding: 0.8em;
  margin: 0 auto;
`

const BlogPost = ({ post }) => (
  <Article>
    <h1>{post.attributes.title}</h1>
    <p>{post.attributes.date}</p>
  </Article>
)
export default BlogPost

export async function getStaticPaths() {
  return {
    paths: posts.map((post) => ({ params: { slug: post.attributes.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  return {
    props: {
      post: posts.find((post) => post.attributes.slug === params.slug),
    },
  }
}

```

You should be able to use your page as you did in the previous step now, but the information is now dynamic and comes from `Markdown` files located in the `posts` directory! Try and add another post for example, it should show up next to our first blog post. Note however, that when you change a file in the `posts` directory the dev server (`yarn dev`) has to be restarted since these are only read and parsed once (when the pages are being generated by `Next.js`).

----

# Displaying the HTML content

So far, our posts only show the data from the `Front Matter` of the `Markdown` documents, let's also make them display the `HTML` content. Doing this in `React` is easy but it sounds, well, dangerous:

```javascript
// part of pages/blog/[slug].js
const BlogPost = ({ post }) => (
  <Article>
    <h1>{post.attributes.title}</h1>
    <p>{post.attributes.date}</p>
    <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }}></div>
  </Article>
)
export default BlogPost
```

The `dangerouslySetInnerHTML` is accurately named. This is normally something that isn't a good thing to do, but when you have an HTML string that you want rendered as actual HTML, it's the way to go. You should never do this unless you have *full control* of the string that gets passed in here!

The `className` here is specified as a simple `string`. That's so that we can style all of our blog post related things in the global stylesheet since these elements are created in the `dangerouslySetInnerHTML` part and can't be accessed at this point.

Refresh one of the blog post pages now and you should see that the post content shows up.

Now even the content of the post is dynamic and read from a file, go ahead and change the content below the front matter in the `posts/my_first_post.md` file and restart the server and you should see that the content on the page has changed too.

You may have tried code blocks in `Markdown` and realized that it it doesn't have any syntax highlighting, read the next section if you want to know how to get that working.

----

# Adding syntax highlighting

Code blocks are nice. But they're even nicer if they actually contain syntax highlighting. For this we'll use a library called [`highlight.js`](https://highlightjs.org/):

```bash
yarn add -D highlight.js
```

To make use of this library we have to take two steps, one is to include a theme stylesheet and the other is to have the `marked` library, that we installed earlier, use the `highlight.js` lib.

Let's start by having `marked` use the `highlight.js` library in the `pages/_posts.js` file:

```javascript
// Add this below the require statements at the top of `pages/_posts.js` 
const hljs = require("highlight.js")

marked.setOptions({
    highlight: function (code, lang) {
        if (lang) return hljs.highlight(lang, code).value;
        return code
    }
});
```

This makes it so that when `marked` runs across a code block, it'll run the `hljs.highlight` function and put classes for the relevant elements in the `HTML` string that gets generated by `marked`.

Then, let's make sure to import a theme in our `BlogPost` component in the `pages/blog/[slug].js` file:

```javascript
const BlogPost = ({ post }) => (
  <Article>
    <Head><link
      rel="stylesheet"
      href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/styles/atom-one-dark-reasonable.min.css"
    /></Head>
    <h1>{post.attributes.title}</h1>
    <p>{post.attributes.date}</p>
    <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }}></div>
  </Article>
)
export default BlogPost
```

Make sure to put `import Head from "next/head"` at the top of the file too, to import the `Head` component from `Next.js`.

More themes available here: `https://highlightjs.org/static/demo/`. Replace the `href` in the `link` element with the theme of your choice and it should work.

----

# Styling our generated HTML

In a previous post, we've just styled components we created ourselves. Now since `marked` will be creating a bunch of components for us. Let's try to do some styling in our `styles/globals.css`.

If you're completely caught up with the tutorial series at this point, your page looks something like this:

![Page at this point](images/next/page.png)

It's not awful, but obviously the code block could really use a background, it doesn't stand out enough from the rest of the text in my opinion. Let's do that now.

Earlier in this post, we defined a class on the content element called `blog-post-content`. This class is what we'll use to target the blog post elements. Inspect the element and you'll find that the code block is simply a `<pre>` tag with a `<code>` tag inside. 

Let's make our code block prettier, in `styles/globals.css`:

```css
/* at the bottom add */
pre {
  color: white;
  background: #282c34;
  padding: 10px;
  border-radius: 6px;
}
```

Refreshing the page should give you a nicer looking code block. You can repeat for other components created by `marked` too, of course. Just inspect the DOM and see what tags were rendered and style those in `styles/globals.css`.

----

Now we have a styled `Next.js` app that supports dynamic routing based on dynamic data specified in markdown files set ready to go for the next part of this tutorial series.

Here's what my project looks like at this stage: https://github.com/simon-nystrom/nextjs-blog-example/tree/p4

I hope you'll keep following along with the tutorial, please don't hesitate to ask if you have any questions or tell me if I missed something!


