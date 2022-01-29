---
title: "Building a Loading Spinner"
author: "Simon Nyström"
date: "2022-01-30"
tags: ["react", "storybook", "tailwind"]
slug: "loading-spinner"
series: "UI Kit with React, TypeScript, Storybook and Tailwind"
---

## Introduction

This is part of the `UI Kit with React, TypeScript, Storybook and Tailwind`, make sure you've checked out the previous entries in the series if you find anything confusing 😊.

In this series I aim to implement a basic loading spinner and integrate it with `Storybook`.

---

## The loading spinner

Let's start off by creating what's necessary for the loading spinner. I want my loading spinner to consist of three bars pulsing in and out from the sides. I also want to be able to specify a text to go along with the loading spinner.

In the project, create two files:

- `src/components/LoadingSpinner/LoadingSpinner.tsx`
- `src/components/LoadingSpinner/LoadingSpinner.module.css`

First, we'll create the necessary structure for the `LoadingSpinner`:

```typescript
// LoadingSpinner.tsx

import cx from "classnames";
import styles from "./LoadingSpinner.module.css";

export type LoadingSpinnerProps = {
  isLoading: boolean;
  color?: string;
  text?: string;
};

const LoadingSpinner = ({
  isLoading,
  color = "bg-black",
  text = "",
}: LoadingSpinnerProps) => {
  if (!isLoading) return null;
  return (
    <div className={styles.wrapper}>
      <div className={cx(styles.div1, color)}></div>
      <div className={cx(styles.div2, color)}></div>
      <div className={cx(styles.div3, color)}></div>
      <span>{text}</span>
    </div>
  );
};

export default LoadingSpinner;
```

This component at this stage won't do much or look how I want it to, but this should be all my component would need.

At the top you'll see that I import a library called `classnames`, I love using this library in all my `React` apps. It lets you easily manipulate `classNames` strings to combine them in ways that would be a hassle to do on your own. You can read more about `classnames` here if you're interested: https://github.com/JedWatson/classnames. In my case here they simply join the two strings together (the ones imported from `styles` and the `color` string from the props).

---

## Adding the `css`

We don't need a lot of `css` to accomplish what I'm aiming for here:

```css
/* LoadingSpinner.module.css */

.wrapper {
  width: fit-content;
  min-width: 24px;
}

.wrapper div {
  margin: 3px auto;
  height: 0.33em;
}

.div1 {
  animation: pulse 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  margin-bottom: 2px;
}

.div2 {
  animation: pulse 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  animation-delay: -0.2s;
  margin-bottom: 2px;
}

.div3 {
  animation: pulse 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  animation-delay: -0.4s;
}

@keyframes pulse {
  0% {
    width: 0.4em;
  }
  50% {
    width: 1.4em;
  }
  100% {
    width: 0.4em;
  }
}
```

---

## The result

Using this component now, it will look like this, but animated:

![loading-spinner](/images/loading-spinner.png)

---

## Integrating the component with `Storybook`:

Create a file called `src/stories/LoadingSpinner/LoadingSpinner.stories.tsx` with the following content:

```ts
import { ComponentMeta, Story } from "@storybook/react";
import LoadingSpinner, {
  LoadingSpinnerProps,
} from "../../components/LoadingSpinner/LoadingSpinner";

export default {
  argTypes: {
    color: {
      options: ["bg-red-200", "bg-indigo-700", "bg-black"],
      control: { type: "select" },
    },
  },
  title: "Loading Spinner",
  component: LoadingSpinner,
} as ComponentMeta<typeof LoadingSpinner>;

const Template: Story<LoadingSpinnerProps> = (args) => (
  <LoadingSpinner {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  isLoading: true,
};

export const WithText = Template.bind({});
WithText.args = {
  isLoading: true,
  text: "Loading...",
};
```

This will create everything that is required by `Storybook` to render our component and its controls.

We tell `Storybook` that the `color` prop should be controllable with a `select` control where the options can be one of the values in `["bg-red-200", "bg-indigo-700", "bg-black"]`. We also tell `Storybook` that we want to show two different variants, one `Basic` and one `WithText`, this way we can show different pre-built use cases of our components.

---

## Running `Storybook`

To see how this actually looks in reality, we'll need to start our `Storybook` by running `yarn storybook`.

Running `Storybook` and visiting http://localhost:6006 will show that, indeed, our Loading Spinner is available from the sidebar. We're also able to test the component live by changing properties as we like illustrated by the image below:

![loading-spinner](/images/loading-spinner-storybook.png)

---

Stay tuned for the next entry in the series 😊. What component would you like to see next?
