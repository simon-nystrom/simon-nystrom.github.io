---
title: "Building a Radio Button Group"
author: "Simon Nyström"
date: "2022-02-11"
tags: ["react", "storybook", "tailwind"]
slug: "radio-button-gruop"
series: "UI Kit with React, TypeScript, Storybook and Tailwind"
---

## Introduction

This is part of the `UI Kit with React, TypeScript, Storybook and Tailwind`, make sure you've checked out the previous entries in the series if you find anything confusing 😊.

In this series I aim to implement a basic radio button group and integrate it with `Storybook`.

---

## The Checkbox

Let's start off by creating what's necessary for the radio button group. I want it to support being `disabled`, support focus for keyboard accessibility, and have visible transitions between states. On top of that I want it to integrate with `react-hook-form` as that is one of my favorite form libraries for `React`.

In the project, create two files:

- `src/components/RadioButtonGroup/RadioButtonGroup.tsx`
- `src/stories/RadioButtonGroup/RadioButtonGroup.stories.tsx`

First, we'll create the necessary structure for the `RadioButton` and `RadioButtonGroup` (since a radio button on its own is useless):

```typescript
// RadioButtonGroup.tsx

export type RadioButtonProps = {
  label: string;
  name: string;
  isSelected: boolean;
};

const RadioButton = ({ label, name, isSelected }: RadioButtonProps) => {
  return (
    <label className="flex items-center">
      <span className="mr-2.5 text-sm">{label}</span>
      <div
        style={{ width: "0.8em", height: "0.8em" }}
        className="ring ring-indigo-700 rounded-full relative"
      >
        {isSelected && (
          <div
            style={{ width: "70%", height: "70%", top: "15%", left: "15%" }}
            className="bg-indigo-700 rounded-full absolute"
          ></div>
        )}{" "}
      </div>
      <input type="radio" name={name} className="opacity-0" />
    </label>
  );
};

export type RadioButtonGroupProps = { name: string };

const RadioButtonGroup = ({ name }: RadioButtonGroupProps) => {
  return (
    <div>
      <RadioButton isSelected={false} name={name} label="Test"></RadioButton>
    </div>
  );
};

export default RadioButtonGroup;
```

Similar to how we created the `Checkbox` component in the last entry in this series, we're doing a similar trick here where we specify the `input` field to be hidden by saying `opacity-0`, this lets us still focus this field with our keyboard by using built-in functionality.

For now, this is a good step in the right direction, but we've hard coded the select state to always be false. We want to determine which radio button in the group is selected by examining its value, that's what we'll do next.

### Integrating `react-hook-form`

To make sure our radio buttons work as they are supposed to, our `RadioButtonGroup` needs to support receiving multiple `options`. Let's update the code to let us hook up `react-hook-form`. We need our `RadioButton` component to be able to call the `react-hook-form` version of the `onChange` function, as well as support value attribute. We also need to wrap the `RadioButtonGroup` in a `<Controller />` just like we did for the `Checkbox` component in the previous entry in this post series.

```typescript
import { Control, Controller, FieldValues, Path } from "react-hook-form";

export type RadioButtonProps = {
  label: string;
  name: string;
  isSelected: boolean;
  onChange: () => void;
  value: string;
};

const RadioButton = ({
  label,
  name,
  isSelected,
  onChange,
  value,
}: RadioButtonProps) => {
  return (
    <label className="flex items-center">
      <span className="mr-2.5 text-sm">{label}</span>
      <div
        style={{ width: "0.8em", height: "0.8em" }}
        className="ring ring-indigo-700 rounded-full relative"
      >
        {isSelected && (
          <div
            style={{ width: "70%", height: "70%", top: "15%", left: "15%" }}
            className="bg-indigo-700 rounded-full absolute"
          ></div>
        )}
      </div>
      <input
        type="radio"
        name={name}
        value={value}
        className="opacity-0"
        onChange={onChange}
      />
    </label>
  );
};

export type RadioButtonGroupOption = {
  value: string;
  label: string;
};

export type RadioButtonGroupProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  options: RadioButtonGroupOption[];
};

const RadioButtonGroup = <T extends FieldValues>({
  name,
  options,
  control,
}: RadioButtonGroupProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <div>
            {options.map((opt) => (
              <RadioButton
                value={opt.value}
                isSelected={field.value === opt.value}
                name={name}
                label={opt.label}
                key={opt.label}
                onChange={field.onChange}
              ></RadioButton>
            ))}
          </div>
        );
      }}
    ></Controller>
  );
};

export default RadioButtonGroup;
```

### Adding Styling

Just like how our `Checkbox` works with its styling and supporting the possibility to be disabled, let's add similar styling to our radio button:

```typescript
// RadioButtonGroup.tsx

import { Control, Controller, FieldValues, Path } from "react-hook-form";
import cx from "classnames";

export type RadioButtonProps = {
  label: string;
  name: string;
  isSelected: boolean;
  onChange: () => void;
  value: string;
  isDisabled?: boolean;
};

const RadioButton = ({
  label,
  name,
  isSelected,
  onChange,
  value,
  isDisabled = false,
}: RadioButtonProps) => {
  return (
    <label className={cx("flex items-center", { "opacity-50": isDisabled })}>
      <span className="mr-2.5 text-sm">{label}</span>
      <div
        style={{ width: "0.8em", height: "0.8em" }}
        className="ring ring-indigo-700 rounded-full relative"
      >
        <div
          className={cx("w-full h-full transition-colors rounded-full", {
            "hover:bg-indigo-200": !isSelected && !isDisabled,
            "focus-within:ring-4 focus-within:ring-indigo-400": !isDisabled,
          })}
        >
          {isSelected && (
            <div
              style={{ width: "70%", height: "70%", top: "15%", left: "15%" }}
              className="bg-indigo-700 rounded-full absolute"
            ></div>
          )}
          <input
            disabled={isDisabled}
            type="radio"
            name={name}
            value={value}
            className="opacity-0"
            onChange={onChange}
          />
        </div>
      </div>
    </label>
  );
};

export type RadioButtonGroupOption = {
  value: string;
  label: string;
  isDisabled?: boolean;
};

export type RadioButtonGroupProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  options: RadioButtonGroupOption[];
  isDisabled: boolean;
};

const RadioButtonGroup = <T extends FieldValues>({
  name,
  options,
  control,
  isDisabled,
}: RadioButtonGroupProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <div className={cx("flex gap-4", { "opacity-50": isDisabled })}>
            {options.map((opt) => (
              <RadioButton
                value={opt.value}
                isSelected={field.value === opt.value}
                name={name}
                label={opt.label}
                key={opt.label}
                onChange={field.onChange}
                isDisabled={opt.isDisabled || isDisabled}
              ></RadioButton>
            ))}
          </div>
        );
      }}
    ></Controller>
  );
};

export default RadioButtonGroup;
```

---

## Adding the Stories

In the file we created earlier, `src/stories/RadioButtonGroup/RadioButtonGroup.stories.tsx`, place the following:

```typescript
// RadioButtonGroup.stories.tsx

import { ComponentMeta, Story } from "@storybook/react";
import { FieldValues, useForm, useWatch } from "react-hook-form";

import RadioButtonGroup, {
  RadioButtonGroupProps,
} from "../../components/RadioButtonGroup/RadioButtonGroup";

export default {
  title: "Radio Button Group",
  component: RadioButtonGroup,
} as ComponentMeta<typeof RadioButtonGroup>;

const Template: Story<RadioButtonGroupProps<FieldValues>> = (args) => {
  const { control } = useForm();
  return <RadioButtonGroup {...args} control={control} />;
};

export const Basic = Template.bind({});
Basic.args = {
  name: "test",
  options: [
    { label: "Option 1", value: "opt1" },
    { label: "Option 2", value: "opt2" },
  ],
};

export const DisabledOption = Template.bind({});
DisabledOption.args = {
  name: "test",
  options: [
    { label: "Option 1", value: "opt1", isDisabled: true },
    { label: "Option 2", value: "opt2" },
  ],
};

export const DisabledGroup = Template.bind({});
DisabledGroup.args = {
  name: "test",
  isDisabled: true,
  options: [
    { label: "Option 1", value: "opt1" },
    { label: "Option 2", value: "opt2" },
  ],
};

export const InForm = () => {
  const { control, getValues } = useForm({
    mode: "onChange",
    defaultValues: { test: "1" },
  });

  useWatch({ control, name: "test" });

  return (
    <div>
      <div className="flex gap-4">
        <RadioButtonGroup
          control={control}
          name={"test"}
          options={[
            { label: "Option 1", value: "1" },
            { label: "Option 2", value: "2" },
            { label: "Option 3", value: "3", isDisabled: true },
          ]}
          isDisabled={false}
        ></RadioButtonGroup>
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

Run `Storybook`, visit http://localhost:6006 and you'll find the `RadioButtonGroup` component in the sidebar.

The `InForm` story should look something like this:

![radio-button-group](/images/radiobutton.png)

---

## Troubleshooting

If you can't get it to run, or have some other concerns, check it out from my repo and see if that works:

https://github.com/simon-nystrom/newcurrent-react-ui/tree/radiobutton

---

Stay tuned for the next entry in the series 😊. What component would you like to see next?
