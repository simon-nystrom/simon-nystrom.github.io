---
date: "2020-09-27"
title: "Creating a blog with Svelte, Sapper and GitHub Pages"
slug: "create-markdown-sapper-svelte-blog"
summary: "Learn how to create your own blog using Svelte, Sapper, Markdown and how to host it for free on GitHub Pages."
categories: []
tags: ["svelte", "sapper", "markdown", "javascript", "blog", "github", "rollup"]
---

The blog where you're reading this is built using the tools mentioned in this post. It's not a replica but it has a similar setup, just more focused on the blog setup. This post will guide you through the process of creating your own blog by combining [Svelte](https://svelte.dev/), [Sapper](https://sapper.svelte.dev/) and [GitHub](https://www.github.com) Pages (free). The focus will be on creating a blog with these tools and not so much the details of Svelte and Sapper.

Note that even though this project will use GitHub pages as its deployment method, it is in no way required to be deployed to GitHub pages. There is a clear decoupling of the blog itself and its method of deployment.

------ 

# Project setup

To follow along with the blog you will need to have the following:
- `node` 8.2.0 or later (for `npx` support)
- A GitHub account
- An empty (uninitialized) GitHub public repository named *username*.github.io where *username* is your username at GitHub
- Access to your GitHub account through the terminal

When you're all set up and ready to go, let's begin. Begin by running the following commands in a terminal window (replace `<username>` by your GitHub username):

```bash
npx degit "sveltejs/sapper-template#rollup" <username>.github.io
cd <username>.github.io
npm install
```

This will execute [`degit`](https://github.com/Rich-Harris/degit) with `npx` to scaffold a Sapper template project in a folder called `<username>.github.io` and change your working directory into said folder and install the required `npm` dependencies.

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

You can run the following command if you'd like to clean up the project a bit (removing files we won't be using) so that it contains fewer files as we start to modify the template to suit our needs. Make sure your working directory is still set to `<username>.github.io`.

```bash
rm -r scripts static/*.png static/*.jpg
```

Since this blog post is focused on enabling blogging functionality, let's simplify our site a some more. Remove the list item containing the link to **about** in the `src/components/Nav.svelte` file and delete the file `src/routes/about.svelte`. Your site should now only have two items in the nav bar, like the image below:

![Nav bar](./images/sapper/sapper_nav_bar.png)

Now would also be a great time to personalize the `src/routes/index.svelte` file. I will leave it as it is and move on to the blog portion of the site.

----

# Enabling Markdown support

As it stands, the blog posts and their content is hard coded and static, located inside the `src/routes/blog/_posts.js` file and aren't able to be written in [Markdown](https://en.wikipedia.org/wiki/Markdown) just yet. To change that, we'll need to install some extra libraries that can help us convert Markdown files into a format suitable to us:

```bash
npm install -D marked highlight.js front-matter
```

We also need to add a CSS theme to make `highlight.js` do something, go to https://highlightjs.org/static/demo/ and pick a theme and then include it in the `src/template.html` like so:

```html
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/styles/atom-one-dark-reasonable.min.css">
```

I like keeping my blog posts separate from the code itself since they should be independent of where they are rendered vice versa. Let's create a `posts` directory alongside our `src` and `static` folders.

Now we can start rewriting `src/routes/blog/_posts.js` to suit our needs. We'll write some code that can take a Markdown file, including YAML front matter and parse it into something that can be used programmatically. You can replace the contents in `src/routes/blog/_posts.js` with the following code:

```javascript
// src/routes/blog/_posts.js

const fs = require('fs');
const fm = require('front-matter');
const marked = require('marked');
const hljs = require('highlight.js');

const files = fs.readdirSync("posts");

// Use highlight.js as the highlighter for the marked library
marked.setOptions({
	highlight: function (code, lang) {
		return hljs.highlight(lang, code).value;
	}
});

const posts = [];
for (let i = 0; i < files.length; i++) {
	const content = fs.readFileSync(`posts/${files[i]}`, { encoding: 'utf-8' });
	// Use the front-matter library to separate the body from the front matter
	const { body, ...frontMatter } = fm(content);
	// Use the marked library to turn markdown into html
	const html = marked(body);
	posts.push({ html, ...frontMatter.attributes });
}

export default posts;

```

The code above will read the contents of the posts located in the `posts` folder and create an array of the posts and their contents so that we can access these posts programmatically.

----

# Creating your first post

Now that we've prepared the code to parse our Markdown files, we can create our first post. Create a file in the `posts` folder we created earlier called `my-first-blog.md` with the following content:

```
---
title: "My first blog post"
slug: "my-first-blog"
---

## Look at the `title` above, it's straight out of the front matter! ↖

The slug is what's used to navigate/link to this specific post, visible right now in the URL.

```

Now you should be able to restart the local development server by re-running `npm run dev`. Now visit http://localhost:3000/blog and see your newly created post in the list of recent posts, click the link and it should navigate you to the post.

----

# Deploying to GitHub Pages

First, we need to make our project into a Git repository and push it to GitHub. To do this, we'll initialize our current directory (should still be `<username>.github.io`) as a Git repository, stage all the files and create our first commit. Finally we also need to push it to GitHub:

```
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/temporary-duck/<username>.io.git
git push -u origin master
```

Once that's done, we'll install one final dependency to make it easy for us to deploy the site:
```
npm install -D gh-pages
```

We'll also add this as a new script called `deploy` to our `package.json`'s `scripts` section:

```json
"scripts": {
	"dev": "sapper dev",
	"build": "sapper build --legacy",
	"export": "sapper export --legacy",
	"start": "node __sapper__/build",
	"deploy": "sapper export --legacy &&  gh-pages -d __sapper__/export"
},
```

The new script will make sure that we `sapper export` our latest changes before deploying the `__sapper__/export` folder to GitHub Pages. `gh-pages` will create a branch in our repository called `gh-pages` and this branch is what will be deployed to your site at `<username>.github.io`, where username is your username at GitHub.

Now you're all set to simply deploy the site by running:

```
npm run deploy
```

We're close to being done now, only one step left. We have to set the `gh-pages` branch that was just deployed as the main branch for GitHub Pages to read from. To do this, visit the GitHub repository you created for your blog, go to settings and scroll down until you see the **GitHub Pages** section. Under **Source** you have to change the branch to the `gh-pages` branch. It might take a few minutes until your page is correctly deployed to `<username>.github.io`.

That's it. All done. Enjoy your newly created and freely hosted blog! 🥳

----

