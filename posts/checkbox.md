---
title: "Building a Checkbox"
author: "Simon Nyström"
date: "2022-02-09"
tags: ["react", "storybook", "tailwind"]
slug: "checkbox"
series: "UI Kit with React, TypeScript, Storybook and Tailwind"
---

## Introduction

This is part of the `UI Kit with React, TypeScript, Storybook and Tailwind`, make sure you've checked out the previous entries in the series if you find anything confusing 😊.

In this series I aim to implement a basic checkbox and integrate it with `Storybook`.

---

## The Checkbox

Let's start off by creating what's necessary for the checkbox. I want my text field to support two different styles, one checkmark and one cross. It should support being `disabled`, support focus for keyboard accessibility, and have visible transitions between states. On top of that I want it to integrate with `react-hook-form` as that is one of my favorite form libraries for `React`.

In the end, I want it to look like this:

![checkbox-complete](https://newcurrent.se/images/checkboxes.png)

In the project, create the files:

- `src/components/Checkbox/Checkbox.tsx`
- `src/stories/Checkbox/Checkbox.stories.tsx`

First, we'll create the necessary structure for the `Checkbox`:

```typescript
// Checkbox.tsx

import { Control, FieldValues, Path } from "react-hook-form";

export type CheckboxProps<T extends FieldValues> = {
  type?: CheckboxType;
  control: Control<T>;
  name: Path<T>;
  label?: string;
  isDisabled?: boolean;
};

export enum CheckboxType {
  CROSS = "cross",
  CHECK = "check",
}

const Checkbox = <T extends FieldValues>({
  name,
  label = "",
  control,
  isDisabled = false,
  type = CheckboxType.CHECK,
}: CheckboxProps<T>) => {
  return <input type="checkbox" />;
};

export default Checkbox;
```

That's the basics of it, but now all we have a simple ordinary checkbox that looks kind of boring, has no label and it is not hooked up through `react-hook-form`.

### Adding the Label

Let's follow a similar approach to how the label was handled in the `TextField` component from a previous post in this series.

Add the following to `Checkbox.tsx`:

```typescript
// Checkbox.tsx

const Checkbox = <T extends FieldValues>({
  name,
  label = "",
  control,
  isDisabled = false,
  type = CheckboxType.CHECK,
}: CheckboxProps<T>) => {
  return (
    <label className={"flex items-center"}>
      <span className="mr-2.5 text-sm">{label}</span>
      <input type="checkbox" />
    </label>
  );
};
```

At least we have a label now, but let's tackle styling the checkbox itself now.

### Adding Custom Styles

Since I want my checkbox to support different types of styles, like a checkmark and a cross, let's create a function that can make these for us. I won't go into detail on how this works specifically, there's a lot of fiddling around with values until you get what you're after. Here's the function:

```typescript
// Checkbox.tsx

const getCheckboxType = (type: CheckboxType) => {
  switch (type) {
    case CheckboxType.CROSS:
      return (
        <>
          <div
            className="absolute rounded-md bg-white"
            style={{
              width: "100%",
              height: "25%",
              top: "40%",
              transform: "rotate(45deg)",
            }}
          ></div>
          <div
            className="absolute rounded-md bg-white"
            style={{
              width: "100%",
              height: "25%",
              top: "40%",
              transform: "rotate(135deg)",
            }}
          ></div>
        </>
      );
    case CheckboxType.CHECK:
      return (
        <>
          <div
            className="absolute bg-white rounded-md"
            style={{
              width: "50%",
              height: "25%",
              transform: "rotate(35deg)",
              left: "6%",
              bottom: "15%",
            }}
          ></div>
          <div
            className="absolute bg-white rounded-md"
            style={{
              width: "90%",
              height: "25%",
              transform: "rotate(125deg)",
              left: "18%",
              bottom: "35%",
            }}
          ></div>
        </>
      );
  }
};
```

And use it in the component like so:

```typescript
// Checkbox.tsx

const Checkbox = <T extends FieldValues>({
  name,
  label = "",
  control,
  isDisabled = false,
  type = CheckboxType.CHECK,
}: CheckboxProps<T>) => {
  return (
    <label className={"flex items-center"}>
      <span className="mr-2.5 text-sm">{label}</span>
      <div
        className="relative ring-indigo-700 ring"
        style={{ width: "0.8em", height: "0.8em" }}
      >
        <div className={"w-full h-full transition-all bg-indigo-700"}>
          {getCheckboxType(type)}
          <input className="opacity-0" type="checkbox" />
        </div>
      </div>
    </label>
  );
};
```

Note that the regular input field is now `hidden` (by saying `opacity-0` it is fully transparent). It is important to keep it in the DOM. If we hide it with for example `display: none;` we lose the ability to focus the field and we also lose built-in keyboard controls.

At this point the checkbox looks like this:

![checkbox-p1](https://newcurrent.se/images/checkbox-p1.png)

That's a bit problematic, it's currently stuck looking like it's checked.

### Integrating `react-hook-form`

I talked more about `react-hook-form` and `cx` (`classnames`) which will both get in the following updates to the code, visit those posts to learn more or read up on their documentation.

Similar to how we integrated the `TextField` from a previous post with `react-hook-form` we will be following a similar approach here but this one is slightly different.

As can be seen earlier in the post, we define a type on our props called `Control`, this is a type from `react-hook-form` that we need in our component.

To integrate the component with `react-hook-form`, the component looks like this:

```typescript
// Checkbox.tsx

const Checkbox = <T extends FieldValues>({
  name,
  label = "",
  control,
  isDisabled = false,
  type = CheckboxType.CHECK,
}: CheckboxProps<T>) => {
  return (
    <Controller
      control={control}
      render={({ field }) => {
        return (
          <label
            className={cx("flex items-center", { "opacity-50": isDisabled })}
          >
            <span className="mr-2.5 text-sm">{label}</span>
            <div
              className="relative ring-indigo-700 ring"
              style={{ width: "0.8em", height: "0.8em" }}
            >
              <div
                className={cx("w-full h-full transition-all", {
                  "hover:bg-indigo-200": !field.value && !isDisabled,
                  "hover:bg-indigo-900": field.value && !isDisabled,
                  "bg-indigo-700": field.value,
                  "focus-within:ring-4 focus-within:ring-indigo-400":
                    !isDisabled,
                })}
              >
                {field.value && getCheckboxType(type)}
                <input
                  ref={field.ref}
                  name={field.name}
                  checked={field.value}
                  onChange={(...args) => {
                    if (isDisabled) return;
                    field.onChange(...args);
                  }}
                  className="opacity-0"
                  type="checkbox"
                />
              </div>
            </div>
          </label>
        );
      }}
      name={name}
    />
  );
};
```

Instead of using `register` which we used for our `TextField` component, we use the `Controller` component from `react-hook-form` this time. By doing this, we can get the value of the current field inside the component itself, available on the `field` render prop.

The rest of the code doesn't contain too many new things, you might recognize the use of `cx` again to combine classes based on properties in the class. You'll also notice how `focus-within` is used rather than `focus`, this is because we want to apply those styles when the focus is _actually_ on the invisible `input` field. We now also utilize the `isDisabled` property to be able to prevent the field from being interacted with when it is disabled.

Now our component is integrated with `react-hook-form` and we are ready to create some stories in `Storybook`.

---

## Adding the Stories

In the file we created earlier, `src/stories/Checkbox/Checkbox.stories.tsx`, place the following:

```typescript
// Checkbox.stories.tsx

import { ComponentMeta, Story } from "@storybook/react";
import { FieldValues, useForm, useWatch } from "react-hook-form";
import Checkbox, {
  CheckboxProps,
  CheckboxType,
} from "../../components/Checkbox/Checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: Story<CheckboxProps<FieldValues>> = (args) => {
  const form = useForm();
  return <Checkbox {...args} name="test" control={form.control} />;
};

export const Basic = Template.bind({});
Basic.args = { label: "Name" };

export const Disabled = Template.bind({});
Disabled.args = { label: "Name", isDisabled: true };

export const InForm = () => {
  const { control, getValues } = useForm({
    mode: "onChange",
    defaultValues: { cheese: true, onions: true, mayo: false },
  });

  useWatch({ control, name: "cheese" });
  useWatch({ control, name: "onions" });
  useWatch({ control, name: "mayo" });

  return (
    <div className="w-56">
      <div className="flex gap-4">
        <Checkbox
          name="cheese"
          label="Cheese"
          control={control}
          type={CheckboxType.CHECK}
        />
        <Checkbox
          name="onions"
          label="Onions"
          control={control}
          type={CheckboxType.CROSS}
        />
        <Checkbox
          name="mayo"
          label="Mayo"
          control={control}
          type={CheckboxType.CROSS}
        />
      </div>
      <pre>
        <code>{JSON.stringify(getValues(), null, 2)}</code>
      </pre>
    </div>
  );
};
```

---

## Running `Storybook`

To see how this actually looks in reality, we'll need to start our `Storybook` by running `yarn storybook`.

Run `Storybook`, visit http://localhost:6006 and you'll find the checkbox component in the sidebar.

---

## Troubleshooting

If you can't get it to run, or have some other concerns, check it out from my repo and see if that works:

https://github.com/simon-nystrom/newcurrent-react-ui/tree/checkbox

---

Stay tuned for the next entry in the series 😊. What component would you like to see next?
