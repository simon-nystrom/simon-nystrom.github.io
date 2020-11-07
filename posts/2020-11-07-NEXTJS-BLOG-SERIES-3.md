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

There are multiple ways of styling your components in a Next.js project, just like in any other React project. I prefer using [`styled-components`](https://styled-components.com/) though as they make it very easy to modify the CSS and to have everything properly scoped out of the box, no worrying about clashing CSS classes and what not. This post will walk you through how to set up `styled-components` for your statically generated Next.js project.

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

`styled-components` is the library itself and `babel-plugin-styled-components` is needed to consistently hash `classNames` between environments (styled-components won't behave well with SSR/SSG otherwise).

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

# Styling our components 

Our blog as we left it in [part 2] isn't very pretty. Let's change that and make it look more like an actual layout.

Let's begin by extracting our inline `nav` from `_app.js` and make it its own component.

Start by creating a folder at the root level and create a file called `NavBar.js`:

```javascript
// NavBar.js



```


----

Now we have a `Next.js` app that supports dynamic routing based on a data set ready to go for the next part of this tutorial series.

Here's what my project looks like at this stage: https://github.com/simon-nystrom/nextjs-blog-example/tree/p2

I hope you'll keep following along with the tutorial, please don't hesitate to ask if you have any questions or tell me if I missed something!
