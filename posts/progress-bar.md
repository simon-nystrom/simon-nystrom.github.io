---
title: "Building a Progress Bar"
author: "Simon Nyström"
date: "2022-02-15"
tags: ["react", "storybook", "tailwind"]
slug: "progress-bar"
series: "UI Kit with React, TypeScript, Storybook and Tailwind"
---

## Introduction

This is part of the `UI Kit with React, TypeScript, Storybook and Tailwind`, make sure you've checked out the previous entries in the series if you find anything confusing 😊.

In this series I aim to implement a basic progress bar and integrate it with `Storybook`.

This will be a simple component compared to the ones we've made previously.

The finished product will look like this:

![progress-bar](https://newcurrent.se/images/progress-bar.png)

---

## The `ProgressBar`

In the project, create two files:

- `src/components/ProgressBar/ProgressBar.tsx`
- `src/stories/ProgressBar/ProgressBar.stories.tsx`

This component is so simple that we can write it all in one go without really making any intermediate steps, so let's do that:

```typescript
// ProgressBar.tsx

export type ProgressBarProps = {
  progress: number;
  progressText?: string;
};

const ProgressBar = ({ progress, progressText = "" }: ProgressBarProps) => {
  // Make sure our value stays between 0 and 100.
  const _progress = Math.min(Math.max(0, progress), 100);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full border-2 border-indigo-700 h-6 rounded-md">
        <div
          className="bg-indigo-500 h-full transition-all duration-250"
          style={{ width: `${_progress}%` }}
        ></div>
      </div>
      <span>{progressText}</span>
    </div>
  );
};

export default ProgressBar;
```

There is nothing fancy going on in this component, basically we have an outer-most `div` to let us place the optional `progressText` where we want it to. There is also a wrapper for the progress bar outline and then there is the progress bar `div` itself which scales its width based on the progress (from 0 to 100).

---

## Adding the Stories

In the file we created earlier, `src/stories/ProgressBar/ProgressBar.stories.tsx`, place the following:

```typescript
import { ComponentMeta, Story } from "@storybook/react";
import ProgressBar, {
  ProgressBarProps,
} from "../../components/ProgressBar/ProgressBar";

export default {
  title: "Progress Bar",
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: Story<ProgressBarProps> = (args) => (
  <div className="w-56">
    <ProgressBar {...args} />
  </div>
);

export const WithLoadingText = Template.bind({});
WithLoadingText.args = {
  progressText: "Loading...",
  progress: 23,
};

export const WithoutLoadingText = Template.bind({});
WithoutLoadingText.args = {
  progress: 50,
};
```

This is a lot simpler than our stories from previous entries in this series, and it's nice to do something simpler for a change. This is all we need and we will now have two predefined stories, one with text and one without.

---

## Running `Storybook`

To see how this actually looks in reality, we'll need to start our `Storybook` by running `yarn storybook`.

Run `Storybook`, visit http://localhost:6006 and you'll find the `ProgressBar` component in the sidebar.

---

## Troubleshooting

If you can't get it to run, or have some other concerns, check it out from my repo and see if that works:

https://github.com/simon-nystrom/newcurrent-react-ui/tree/progressbar

---

Stay tuned for the next entry in the series 😊. What component would you like to see next?
