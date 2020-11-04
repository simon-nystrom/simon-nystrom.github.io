---
date: "2020-10-26"
title: "Host a static website for free using Netlify and GitHub"
slug: "host-static-website-netlify"
summary: "Learn how to host your static website for free by using Sapper, Netlify and GitHub."
categories: []
published: true
tags: ["svelte", "sapper", "netlify", "javascript"]
---

Static websites are all the jam these days and you might have heard about the [JAMStack](https://jamstack.org/). Static sites allow you to host very performant pre-built sites like my example site [Compound interest calculator](https://interest.newcurrent.se). Some popular static site frameworks include [Sapper](https://sapper.svelte.dev/) (uses Svelte), [Next.js](https://nextjs.org/) and [Gatsby](https://www.gatsbyjs.com/) (uses React) and [VuePress](https://vuepress.vuejs.org/) (ses Vue). This tutorial will show you how to build and host a static site on Netlify by using a GitHub repository for your code. For this tutorial I will be using Sapper, but any of the frameworks above should do just fine.

----

# Project setup

To follow along with the blog you will need to have the following:

- [Node](https://nodejs.org/en/download/) installed
- A [GitHub](https://github.com/) account and an empty repository
- A [Netlify](https://www.netlify.com/) account
- A GitHub project with the code for your static site
- Knowledge of how your chosen framework creates bundles ready for static hosting

Initialize your project with your tool of choice. Since I'm using sapper, it's done by running the following command:

```bash
npx degit "sveltejs/sapper-template#rollup" my-static-site
cd my-static-site
npm install
```

Sapper sites are prepared for static site hosting by running the `export` command like below, (if you aren't following along with Sapper run whatever is the corresponding built/export command for your chosen site)

```bash
npm run export
```

The above step isn't crucial, but it helps to know that your app can be served statically. To test our exported Sapper app, we can run the following in our terminal (if you're using another framework, look in the documentation how to serve your site statically):

```
npx serve __sapper__/export
```

This will start a local webserver on your computer and it should greet you with something like the following image:

![serve start up indicator](/images/sapper/npx_serve_startup.png)

Visit the URL in the above notification and make sure your site is served properly.

----

# Pushing our site to GitHub

Now that we've made sure our site can be hosted and accessed statically, it's time to push our site to GitHub to prepare it for release on Netlify.

Let's initialize our project directory as a git repository:

```bash
git init
git add .
git commit -m "Initial commit"
```

I mentioned in the intro that you need will need an empty (don't initialize it with a README, gitignore or license) GitHub repository. If you don't have one, go to your [GitHub account](https://github.com/) and create a new repository.

To be able to push our code to GitHub, we need to run the following commands to connect our local repo to the remote. Replace `my-username` with your GitHub username and `my-static-site` with the name of your GitHub repo.

```bash
git remote add origin git@github.com:my-username/my-static-site.git
git branch -M main
git push -u origin main
```

If you refresh your GitHub repository after this, you should see your code there.

----

# Deploying our site to Netlify

Log in to your [Netlify](https://www.netlify.com/) account and go to the `Team overview` tab. Here you should see something similar to the image below:

![Netlify sites](/images/netlify/netlify_sites.png)

All we have to do now is complete the following steps:

1. Click on `New site from Git`, this takes you to a three step process, the first being `1. Connect to Git Provider`
2. Click on `GitHub` under the Continuous Deployment header to proceed
3. Go through the Netlify/GitHub auth process and make sure to allow Netlify access to your new repository. This takes you to section `2. Pick a repository`.
4. Select your repository from the list. This takes you to section `3. Build options, and deploy!`.
5. Fill out the information, for Sapper this involves the following settings (follow your chosen frameworks docs for this process if you're using something else):
    - Owner should be yourself
    - `Branch to deploy` should be set to `main`
    - Build command should be `npm run export`
    - Publish directory should be `__sapper__/export`
6. Click `Deploy site`.

After completing the steps above, you should be sent to a view that looks something like this:

![Netlify built](/images/netlify/netlify_built.png)

Visiting that URL should take you to your deployed app 😎.

----

# Redeploying our site after updating it

One of the best things with Netlify is that once we push changes to the `main` branch, Netlify will build and deploy our project with all the new changes.

Go ahead and change something in your project and commit and push it to GitHub. Once that's done you can head over to the `Deploys` tab on Netlify under your site and see that a new deploy is in progress.

Once it's deployed, you can visit your site again and see your changes.

----

# Summary

Hosting your site on Netlify is a great option if you're just serving static content and you want to get something up and running quickly on the web. Netlify supports a bunch of other features like custom domain names, plugins and analytics that aren't free and I have yet to try them but I'm impressed so far.

Feel free to ask any questions. 🙂
