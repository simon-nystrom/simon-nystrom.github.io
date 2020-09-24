---
date: "2020-09-24"
title: "Setting up a blog using Svelte, Sapper and GitHub Pages"
slug: "sapper-svelte-github-pages-blog"
categories: []
tags: ["svelte", "sapper", "javascript", "blog", "github", "rollup"]
isDraft: true
---

The blog where you're reading this is built using the tools mentioned in this post, it's not an exact replica but it has a very similar setup. This post will guide you through the process of creating your own blog by combining [Svelte](https://svelte.dev/), [Sapper](https://sapper.svelte.dev/) and [GitHub](https://www.github.com) Pages (free). The focus will be on creating a blog with these tools and not so much the details of Svelte and Sapper.

Note that even though this project will use GitHub pages as its deployment method, it is in no way required to be deployed to GitHub pages. There is a clear decoupling of the blog itself and its method of deployment.

------ 

# Setting up the project

To follow along with the blog you will need to have the following:
- `node` 8.2.0 or later (for `npx` support)
- A GitHub account
- A GitHub repository named *username*.github.io where *username* is your username at GitHub

Now that you're all set up and ready to go, let's begin. Begin by running the following commands in a terminal window:

```bash
npx degit "sveltejs/sapper-template#roolup" my-blog
cd my-blog
npm install
```

This will have created a folder called `my-blog` that contains the base template provided by Sapper, change your working directory into said folder and install the required `npm` dependencies.

If you want to see what your site looks like at this point, you can go ahead and run.
```bash
npm run dev
```
This will start the development server at http://localhost:3000.




