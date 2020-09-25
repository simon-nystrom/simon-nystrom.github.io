---
date: "2020-09-24"
title: "Creating a Markdown powered blog with Svelte, Sapper and GitHub Pages"
slug: "create-markdown-sapper-svelte-blog"
categories: []
tags: ["svelte", "sapper", "markdown", "javascript", "blog", "github", "rollup"]
isDraft: true
---

The blog where you're reading this is built using the tools mentioned in this post. It's not a replica but it has a similar setup, just more focused on the blog setup. This post will guide you through the process of creating your own blog by combining [Svelte](https://svelte.dev/), [Sapper](https://sapper.svelte.dev/) and [GitHub](https://www.github.com) Pages (free). The focus will be on creating a blog with these tools and not so much the details of Svelte and Sapper.

Note that even though this project will use GitHub pages as its deployment method, it is in no way required to be deployed to GitHub pages. There is a clear decoupling of the blog itself and its method of deployment.

------ 

# Project setup

To follow along with the blog you will need to have the following:
- `node` 8.2.0 or later (for `npx` support)
- A GitHub account
- A GitHub repository named *username*.github.io where *username* is your username at GitHub

Now that you're all set up and ready to go, let's begin. Begin by running the following commands in a terminal window:

```bash
npx degit "sveltejs/sapper-template#rollup" my-blog
cd my-blog
npm install
```

This will execute [`degit`](https://github.com/Rich-Harris/degit) with `npx` to scaffold a Sapper template project in a folder called `my-blog` and change your working directory into said folder and install the required `npm` dependencies.

If you want to see what your site looks like at this point, you can go ahead and run:
```bash
npm run dev
```
This will start the local development server at http://localhost:3000.

Now it's time to open the project in your favorite code editor. You should have a folder structure similar to the image below at this point:

![Folder structure](./images/sapper/sapper_folder_structure.png)

The files/folders that we will be interacting with are listed below:

- `__sapper__`, Sapper files such as the dev, build and export bundles.
- `src` the source code for the site
- `static` resources needed for the page to run, these are included in the built version

You can run the following command if you'd like to clean up the project a bit (removing files we won't be using) so that it contains fewer files as we start to modify the template to suit our needs. Make sure your working directory is still set to `my-blog`.

```bash
rm -r scripts static/*.png static/*.jpg
```

Since this blog post is focused on enabling blogging functionality, let's simplify our site a some more. Remove the list item containing the link to **about** in the `src/components/Nav.svelte` file and removing `src/routes/about.svelte`. Your site should now only have two items in the nav bar, like the image below:

![Nav bar](./images/sapper/sapper_nav_bar.png)

Now would also be a great time to personalize the `src/routes/index.svelte` file. I will leave it as it is and move on to the blog portion of the site.

----

# Enabling Markdown support

As it stands, the blog posts and their content is hard coded and static, located inside the `src/routes/blog/_posts.js` file and aren't able to be written in [Markdown](https://en.wikipedia.org/wiki/Markdown) just yet. To change that, we'll need to install some extra libraries that can help us convert Markdown files into a format suitable to us:

```bash
npm install -D marked highlight.js front-matter
```

I like keeping my blog posts separate from the code itself since they should be independent of where they are rendered vice versa. Let's create a `posts` directory alongside our `src` and `static` folders.

Now we can start rewriting `src/routes/blog/_posts.js` to suit our needs, you can empty the file out completely as we'll replace all the existing code.

Let's write some code that can take a Markdown file, including YAML front matter and parse it into something that can be used programmatically.


```javascript
// src/routes/blog/_posts.js

const fs = require('fs');
const fm = require('front-matter');
const marked = require('marked');
const hljs = require('highlight.js');

const files = fs.readdirSync("posts");

const posts = [];
for (let i = 0; i < files.length; i++) {
    const content = fs.readFileSync(`posts/${files[i]}`, { encoding: 'utf-8' });
    // Use the front-matter library to separate the body from the front matter
    const { body, ...frontMatter } = fm(postContent);
    const { attributes } = frontMatter;
    const { slug, title, categories, tags, date, isDraft } = attributes;
}

```



```
---
date: "2020-09-24"
title: "My first blog post"
slug: "create-markdown-sapper-svelte-blog"
---

# Hello! 👋

This is great!

```

The code block above will read the contents of the posts located in the 

----

# Deploying to GitHub Pages