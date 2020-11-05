---
date: "2020-11-05"
series_title: "Creating a blog with React and Next.js"
title: "Initializing a Next.js project"
slug: "initialize-nextjs-project"
part: 1
last_part: "?"
summary: "Initialize a Next.js project and get it up and running with a basic page."
categories: []
published: true
tags: ["react", "javascript", "nextjs", "tutorial"]
---

This tutorial series shows you how to create a blog similar to the one on my site: https://newcurrent.se, and how to host it on GitHub Pages, it won't be locked to host on GitHub Pages though, the result will be a site that is able to be statically exported and hosted anywhere.

I made a post in the past describing how to create a blog using Sapper, but I've decided to migrate to [`Next.js`](https://nextjs.org/) because I'm more versed in React and I wanted to try something new. I've used Gatsby in the past so I thought, why not try Next.js this time.

----

# Prerequisites

You don't need a lot of programming experience to follow this tutorial, I wouldn't recommend this tutorial series unless you have some HTML, CSS and JavaScript knowledge and some knowledge of how `React` works though. The focus will be more on how `Next.js` can help us build our blog rather than what `React` helps us do. You are also expected how to use GitHub to create a repository.

All you really need other than that is a `node` version that is high enough to support `npx` and a GitHub account.

I will be using `yarn` for this project, but using `npm` is fine as well. The syntax varies slightly but generally `yarn` does not need to specify `run` to run something, see example below:

```bash
yarn dev
# is the same as
npm run dev
```

Let's get started 😊

----

# Initializing the project

To initialize a new `Next.js` project, all we have to do is run the following code:

```bash
npx create-next-app my-blog
cd my-blog
```

This will create a project in a folder called `my-blog` (you can name it whatever you want) and set up all the basics needed for the project and then change your working directory to be `my-blog`.

If you want to try running the app already, you can do so by running `yarn dev` or `npm run dev` and visiting http://localhost:3000.

----

# File overview and walkthrough

Let's look at the file and directory tree that `create-next-app` created for us:

![Next.js folder structure](/images/next/nextjs_folder_structure.png)

### .next
Contains files needed by the Next.js framework. No need to touch this folder.

### node_modules
Contains dependencies for our project. No need to touch this folder.

### pages
This folder is used by Next.js. It looks here at our JavaScript files to determine what the routes in our page will look like and how they will work. We'll go through this in more detail further down the page. This is the primary folder used in a Next.js project.

### public
This is where you put all the things that you want to be reached statically on your hosted site like images and the favicon.

### styles
Use this folder for your global CSS stylesheets and your CSS modules. You can remove the `Home.module.css` file from this folder as we won't be using that.

Those are the folders in a Next.js project, we'll probably create a component directory later where we can organize our React components, but for now this is all we have. Let's go through the contents of the `pages` folder.

## The pages folder

First of all, let's remove the `api` folder, we don't need that.

Let's look at `_app.js` and `index.js` a bit closer, they are important.

#### _app.js

`_app.js` looks like this:

```javascript
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
```

Seems innocuous, and it is at this stage. The `_app.js` is executed for all your pages defined in the `pages` directory, it is passed to the `MyApp` function as the `Component` argument and is accessible here. We'll be using the `MyApp` component in another part of this tutorial series to define things we want present on all pages, like a header and a footer. For now this code does nothing but return the page as it is handed to it.

#### index.js

`index.js` is a big longer and we'll actually remove the majority of it, you want your `index.js` to look like this before moving on with the next part of this tutorial: 

```javascript
export default function Home() {
  return "Home sweet home";
}
```
This `index.js` file is what will be served when we visit the root of our site. Start your project by running `yarn dev` and then visit http://localhost:3000/ and you should see a basic web site that just says *Home sweet home*.

----

# Adding our project to GitHub

Only storing our code locally is not safe or good practice, let's create a repository on GitHub and push our code there. Since this is one of the prerequisites, I assume you already know how to do this. Just make sure the project you create is an empty project that is not initialized with any files like a `README.md` or a license file.

Once you've created your GitHub account, follow the steps they provide:

```bash
git remote add origin git@github.com:<your_username>/<your_github_project>.git
git branch -M main
git push -u origin main
```

----

Now we have a basic `Next.js` set up and ready to go for the next part of this tutorial series.

Here's what my project looks like at this stage: https://github.com/simon-nystrom/nextjs-blog-example/tree/p1

I hope you'll follow along with the tutorial, please don't hesitate to ask if you have any questions or tell me if I missed something!
