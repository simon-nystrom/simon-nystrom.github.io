---
title: "Building a UI Kit with React, TypeScript, Storybook and Tailwind"
author: "Simon Nyström"
date: "2022-01-30"
tags: ["react", "storybook", "tailwind"]
slug: "nextjs-tailwind-storybook"
series: "UI Kit with React, TypeScript, Storybook and Tailwind"
---

## Introduction

Welcome to the `UI Kit with React, TypeScript, Storybook and Tailwind` series where I aim to build a basic UI kit that I can use in my hobby projects and continuously update so that all my projects will have the same features.

The goal of this series is to share my experience when learning these different technologies, I have some previous experience of `React`, `TypeScript`, and `tailwindcss`, but I haven't used `Storybook` a lot in the past.

Quick about me: Full-stack engineer with 6 years experience with a back-end bias working mostly with `Java` and `Kotlin`.

Maybe you'll learn something as well 😊.

---

## Why my own UI kit?

There are a bunch of ready-made, true and tested UI libraries out there already such as `Material-UI`, but I would like to attempt to create my own for learning purposes. I can also build some libraries that I like right into the UI kit such as `react-table` and `react-select`.

---

## Prerequisites

- You should have `node` and `npm` installed
- You should be somewhat familiar with `TypeScript`, `React` and `tailwindcss`.
- You should expect this series to contain suboptimal implementations and possible mistakes (which I will try to fix!).
- Some familiarity with `Storybook`.

---

## Setting up the required tools

If you want to follow along on your own in this journey, you need to do the following:

- [Install `yarn`](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
- [Create a fresh `React` app with `TypeScript`](https://create-react-app.dev/docs/adding-typescript/)
- [Add `storybook`](https://storybook.js.org/docs/react/get-started/install)
- [Add `tailwindcss`](https://tailwindcss.com/docs/guides/create-react-app)

---

## Set up `tailwind` with `storybook`

Assuming you followed the steps above, you should have the following lines in your `index.css` file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

This file is already included by the template we used (you will find `import './index.css';` stated in the `src/index.tsx` file).

However, we also need to include this file when running `storybook`. To do this, your `.storybook/preview.js` needs to look like this:

```js
import "../src/index.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
```

---

## Making sure everything works

Let's make sure everything works as expected by running `yarn storybook`, this should start `storybook` on your system and run a server accessible at `http://localhost:6006`. Visit this page and make sure it works.

To ensure that `tailwind` is working as expected, go to the `src/stories/Button.tsx` and add some `tailwind` class, for example change the `button` element to look like this:

```jsx
// src/stories/Button.tsx
<button
  type="button"
  className={"text-red-400"}
  style={{ backgroundColor }}
  {...props}
>
  {label}
</button>
```

Now, visit this component in `storybook` and there should be the word "Button" written in red text. If it's not red, then something went wrong in the setup.

---

## Cleaning up

Let's remove resources we don't intend to use ourselves so that our `storybook` is as clean as possible for the upcoming tutorials.

Remove everything from the `src/stories` directory except the `src/stories/asset` folder and the `Introduction.stories.mdx` file. Might as well keep that one for having something to show in our `storybook` for now.

Feel free to remove anything else that you feel adds clutter to the project.

---

## Troubleshooting

If you had any problems with anything getting started, I suggest you compare your solution to [my repo at this stage](https://github.com/simon-nystrom/newcurrent-react-ui/tree/p1).

---

## What's next

That's it for part 1 in this series. I think it makes sense to keep all the initial setup in one consolidated place.
