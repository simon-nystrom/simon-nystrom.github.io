---
title: "Building a Text Field"
author: "Simon Nyström"
date: "2022-01-30"
tags: ["react", "storybook", "tailwind"]
slug: "text-field"
series: "UI Kit with React, TypeScript, Storybook and Tailwind"
---

## Introduction

This is part of the `UI Kit with React, TypeScript, Storybook and Tailwind`, make sure you've checked out the previous entries in the series if you find anything confusing 😊.

In this series I aim to implement a basic text field and integrate it with `Storybook`.

---

## The text field

Let's start off by creating what's necessary for the text field. I want my text field to support the very basics of a simple text-input field. It should support being `disabled`, having a `placeholder` and so on. On top of that I want it to integrate with `react-hook-form` as that is one of my favorite form libraries for `React`.

In the end, I want it to look like this:

![text-field-complete](/images/text-field.png)

In the project, create the files:

- `src/components/TextField/TextField.tsx`
- `src/stories/TextField/TextField.stories.tsx`

First, we'll create the necessary structure for the `TextField`:

```typescript
// TextField.tsx

export type TextFieldProps = {
  label?: string;
  id: string;
  register: UseFormRegisterReturn;
  isDisabled?: boolean;
  isRequired?: boolean;
  placeholder?: string;
  error?: string;
};

const TextField = ({
  label,
  id,
  register,
  isDisabled = false,
  isRequired = false,
  placeholder,
  error,
}: TextFieldProps) => {
  return (
    <label htmlFor={id}>
      <input id={id} type="text" />
    </label>
  );
};

export default TextField;
```

Now we have the very basics, but it doesn't look very good and it doesn't really do anything at all for now. It's basically just a completely blank field with no border, no label etc.

### Adding the label

To start with I'll add the desired label functionality. I want the label to be above the input field, and I want the field itself to look a bit better.

First, I'll make sure to add a style that will always apply to the input which we can later combine with error-state styling or disabled-state styling.

Add the following to `TextField.tsx`:

```typescript
// TextField.tsx

const shared =
  "rounded-sm bg-indigo-100 border-indigo-300 border-2 p-2 hover:bg-indigo-200 focus:bg-indigo-200 duration-150 transition-all outline-none focus:ring-2 ring-indigo-300";
```

And update the component to contain the following

```typescript
// TextField.tsx

const TextField = ({
  label,
  id,
  register,
  isDisabled = false,
  isRequired = false,
  placeholder,
  error,
}: TextFieldProps) => {
  return (
    <label htmlFor={id} className="flex flex-col">
      <span className="mb-1 text-sm">{label}</span>
      <input id={id} type="text" className={shared}></input>
      <span className="text-red-500 font-semibold text-sm">{error}</span>
    </label>
  );
};
```

Now it's starting to look like what I want.

### Adding styling for error/disabled state

It's also good to be visually clear to your users that your field is disabled, in an error state and why that might be or if the field is required.

Let's proceed by adding these conditional styles:

```typescript
// TextField.tsx

const disabled = "opacity-50 hover:bg-indigo-100";

const errored =
  "bg-red-200 border-red-400 focus:bg-red-100 hover:bg-red-100 focus:ring-red-400";
```

And update the component to conditionally display these styles as well as show an `*` character next to the label of a required field. Let's also add some other props that I want my text field to support.

```typescript
// TextField.tsx

import cx from "classnames"; // add this import to combine styles easily

const TextField = ({
  label,
  id,
  register,
  isDisabled = false,
  isRequired = false,
  placeholder,
  error,
}: TextFieldProps) => {
  return (
    <label htmlFor={id} className="flex flex-col">
      <span className="mb-1 text-sm">
        {label}
        <span className="font-semibold ml-0.5">{isRequired ? "*" : ""}</span>
      </span>

      <input
        placeholder={placeholder}
        autoComplete="off"
        disabled={isDisabled}
        id={id}
        type="text"
        className={cx(shared, { [disabled]: isDisabled, [errored]: error })}
      ></input>
      <span className="text-red-500 font-semibold text-sm">{error}</span>
    </label>
  );
};
```

The following line:

```typescript
className = { cx(shared, { [disabled]: isDisabled, [errored]: error }); };
```

Basically says the following: "Combine the style `shared` with the style `disabled` if the `isDisabled` variable is set to `true` and do the same with the `errored` style." For more info on how `classnames` works visit the following link: [classnames](https://github.com/JedWatson/classnames).

### Adding integration with `react-hook-form`

`react-hook-form` is one of my favorite form libraries for `React`. You can read more about it here if you are curious: [react-hook-form](https://react-hook-form.com/)

One way to integrate an input field with `react-hook-form` is to call `register` and spread the return value over the concerned input field, so let's do that.

You might recall this line from the prop type definition:

```typescript
register: UseFormRegisterReturn;
```

This is there to let us pass the `register` function returned by `useForm` (which in turn comes from `react-hook-library`, more on that in a bit when we integrate it with a story for our `Storybook`).

Let's update our component to actually use this prop:

```typescript
// TextField.tsx

const TextField = ({
  label,
  id,
  register,
  isDisabled = false,
  isRequired = false,
  placeholder,
  error,
}: TextFieldProps) => {
  return (
    <label htmlFor={id} className="flex flex-col">
      <span className="mb-1 text-sm">
        {label}
        <span className="font-semibold ml-0.5">{isRequired ? "*" : ""}</span>
      </span>

      <input
        {...register}
        placeholder={placeholder}
        autoComplete="off"
        disabled={isDisabled}
        id={id}
        type="text"
        className={cx(shared, { [disabled]: isDisabled, [errored]: error })}
      ></input>
      <span className="text-red-500 font-semibold text-sm">{error}</span>
    </label>
  );
};
```

I'm happy with the implementation so far, and I will leave it like this until I might need to make changes to it, this is good enough for now.

It's ready to be put to the test in a story in `Storybook`.

---

## Adding the stories

In the file we created earlier, `src/stories/TextField/TextField.stories.tsx`, place the following:

```typescript
// TextField.stories.tsx

import { ComponentMeta, Story } from "@storybook/react";
import { useForm, useWatch } from "react-hook-form";
import TextField, {
  TextFieldProps,
} from "../../components/TextField/TextField";

export default {
  title: "Text Field",
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Basic = Template.bind({});
Basic.args = { label: "Name", placeholder: "Enter name" };
```

That's all we need to show of the very basics of what the text field can do, and since we've integrated it with `Storybook` now we can test it interactively and change props as we wish, such as toggling its disabled status and so on. Illustrated with an image below:

![text-field-disabled](/images/text-field-disabled.png)

Let's also add a more advanced story where we actually use the `react-hook-form` integration, in the same file, add the following:

```typescript
// TextField.stories.tsx

export const InForm = () => {
  const {
    register,
    control,
    getValues,

    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: { name: "test" },
  });

  useWatch({ control, name: "name" });

  return (
    <div className="w-56">
      <TextField
        id="name"
        register={register("name", {
          required: "This field is required",
          maxLength: { value: 20, message: "Name cannot exceed 20 characters" },
        })}
        placeholder="Enter name"
        error={errors.name?.message}
        label="Name"
        isDisabled={false}
        isRequired={true}
      ></TextField>
      <pre>
        <code>{JSON.stringify(getValues(), null, 2)}</code>
      </pre>
    </div>
  );
};
```

For specifics on `react-hook-form`, I placed a link to it earlier in the post where you can read more. To explain it in simple terms what the above story does:

- Retrieve the `register`, `control`, `getValues` and `errors` from the `useForm`-hook where we supply that the `mode` should be `onChange` (basically revalidate when we type something in the registered field(s), and the default value for the field with name )

- Call the `useWatch`-hook so that our field will be rerendered when the `name` field changes, useful to display in the `Storybook`.

- Register the field by calling `register` and passing the return value to the `register`-prop. We also specify here that the field is required, and if the field is missing something display the _"This field is required"_ message. The same goes for the `maxLength` property except it also expects a value.

- Pass the error down to the component if there is one.

The resulting story looks like this in `Storybook`:

![text-field-error](/images/text-field-error.png)

---

## Running `Storybook`

To see how this actually looks in reality, we'll need to start our `Storybook` by running `yarn storybook`.

Run `Storybook`, visit http://localhost:6006 and you'll find the text-field component in the sidebar.

---

## Troubleshooting

If you can't get it to run, or have some other concerns, check it out from my repo and see if that works:

https://github.com/simon-nystrom/newcurrent-react-ui/tree/text-field

---

Stay tuned for the next entry in the series 😊. What component would you like to see next?
