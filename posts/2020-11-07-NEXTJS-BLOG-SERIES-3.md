---
date: "2020-11-07 22:51"
series_title: "Creating a blog with React and Next.js"
title: "Styled Components in Next.js"
slug: "nextjs-styled-components"
part: 3
last_part: "?"
summary: "Learn about using styled components in Next.js."
categories: []
published: true
tags: ["react", "javascript", "nextjs", "tutorial"]
---

Although this post is part of a series, the aim is for the post to be able to stand on its own, you should be able to take away some knowledge even if you're not following the tutorial series. If you're interested, the tutorial series starts here: [Part 1](https://newcurrent.se/blog/initialize-nextjs-project).

----

# Prerequisites

The prerequisites for this tutorial are stated in [Part 1](https://newcurrent.se/blog/initialize-nextjs-project) and the components we will be using in this tutorial are from [Part 1](https://newcurrent.se/blog/initialize-nextjs-project) and [Part 2](https://newcurrent.se/blog/nextjs-routing)

----

# Styling in Next.js

There are multiple ways of styling your components in a Next.js project, just like in any other React project. I prefer using [`styled-components`](https://styled-components.com/) though as they make it easy to modify the CSS and to have everything properly scoped out of the box, no worrying about clashing CSS classes and what not. This post will walk you through how to set up `styled-components` for your statically generated Next.js project.

Some other approaches to styling include:

- [Global styles](https://nextjs.org/learn/basics/assets-metadata-css/global-styles) (we will actually utilize this as well in a later tutorial in this series).
- [CSS Modules](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css)
- [Inline styling](https://reactjs.org/docs/dom-elements.html#style)

----

# Enabling `styled-components` in Next.js

To enable `styled-components` in Next.js, we need to install some dependencies namely:

```bash
yarn add -D styled-components babel-plugin-styled-components
```

`styled-components` is the library itself and `babel-plugin-styled-components` is needed to consistently hash `classNames` between environments (`styled-components` won't behave well with SSR/SSG otherwise).

We also need to create our own `.babelrc` in the root of the project to be able to override the default babel behaviour used by Next.js:

```json
{
    "presets": [
        "next/babel"
    ],
    "plugins": [
        "babel-plugin-styled-components"
    ]
}
```

----

# Extracting and styling our nav bar 

Our blog as we left it in [part 2](https://newcurrent.se/blog/nextjs-routing) isn't pretty. Let's change that and make it look more like an actual layout.

Let's begin by extracting our inline `nav` from `_app.js` and make it its own component.

Start by creating a folder called `components` at the root level and create a file called `NavBar.js` inside:

`components/NavBar.js`

```javascript
import styled from "styled-components"
import Link from "next/link"

const Nav = styled.nav`
  max-width: 56em;
  margin: 0 auto;
  padding: 0.4em;
`

const Ul = styled.ul`
  display: flex;
  padding: 0;
`

const Li = styled.li`
  display: block;
  padding: 0.4em;
`

// Note that styled-components lets you use SCSS syntax
const A = styled.a`
  &:hover {
    color: blue;
  }
`

const NavBar = () => (
  <Nav>
    <Ul>
      <Li>
        <Link href="/" passHref>
          <A>Home</A>
        </Link>
      </Li>
      <Li>
        <Link href="/blog" passHref>
          <A>Blog</A>
        </Link>
      </Li>
    </Ul>
  </Nav>
)

export default NavBar
```

`_app.js` can now be simplified to look like this instead:

```javascript
import NavBar from "../components/NavBar"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
```

----

# Styling our other components

Let's also add some basic styling to our other components so they look a little bit more pleasing. Feel free to experiment here with `styled-components` if you want to do something more advanced.

`pages/index.js`

```javascript
import styled from "styled-components"

const Main = styled.main`
  max-width: 56em;
  padding: 0.8em;
  margin: 0 auto;
`

export default function Home() {
  return (
    <Main>
      <h1>Welcome!</h1>
      <p>This is the main page</p>
    </Main>
  )
}
```

`pages/blog/index.js`

```javascript
import Link from "next/link"
import styled from "styled-components"
import posts from "../_posts"

const Main = styled.main`
  max-width: 56em;
  padding: 0.8em;
  margin: 0 auto;
`

const Ul = styled.ul`
  padding: 0;
`

const Li = styled.li`
  display: block;
`

// Create a flex box wrapper that can group our blog post attributes
const BlogLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  transition: margin-left 0.2s ease;

  &:hover {
    margin-left: 20px;
  }
`

// Notice here on the Link element that we do not need passHref,
// that's possible because the anchor tag is the direct child
// of the Link element
const BlogPage = ({ posts }) => (
  <Main>
    <Ul>
      {posts.map((post) => (
        <Li key={post.slug}>
          <Link href={`blog/${post.slug}`}>
            <a>
              <BlogLink>
                <h3>{post.title}</h3>
                <h5>{post.date}</h5>
              </BlogLink>
            </a>
          </Link>
        </Li>
      ))}
    </Ul>
  </Main>
)

export default BlogPage

export async function getStaticProps() {
  return {
    props: {
      posts,
    },
  }
}
```

This only really leaves us with one component left to style (`pages/blog/[slug].js`), I'll leave that as an exercise for the reader. If you want to see how I did it you can visit the repository [here](https://github.com/simon-nystrom/nextjs-blog-example/tree/p3). 

----

Now we have a styled `Next.js` app that supports dynamic routing based on a data set ready to go for the next part of this tutorial series.

Here's what my project looks like at this stage: https://github.com/simon-nystrom/nextjs-blog-example/tree/p3

I hope you'll keep following along with the tutorial, please don't hesitate to ask if you have any questions or tell me if I missed something!
