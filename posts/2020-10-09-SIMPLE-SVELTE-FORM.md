---
date: "2020-10-09"
title: "Create a simple Form component in Svelte"
slug: "simple-svelte-form"
summary: "Learn how to create a simple form component for Svelte."
categories: []
published: true
tags: ["svelte", "javascript"]
---

It quickly becomes repetitive typing out all the code needed for forms on the web, with a simple form component you can quickly get started doing what it was you wanted the form for in the first place.

This post will guide you through the process of designing a simple form component for [Svelte](https://svelte.dev/) projects that lets you specify a number of fields and their properties the form component will deal with the rest.

This guide is aimed at people new to Svelte. To follow along I assume that you know a few things about Svelte already, like how to create and start a project and how a Svelte file is structured. I also assume that you are fairly fluent in HTML, CSS and JavaScript.

---

# Project setup

Setup a new Svelte project from the default template by running the following commands:

```bash
npx degit sveltejs/template simple-svelte-form
cd simple-svelte-form
npm run dev
```

This scaffolds a Svelte project and starts a local web server at http://localhost:5000 that will reload automatically as you make changes in the project.

---

# Creating the first basic Input component

Start by creating a directory called `components` under `src` and create a file named `Input.svelte` here with the following contents:

```html
<!-- src/components/Input.svelte -->
<script>
  export let value;
  export let placeholder;
  export let label;
  export let name;
  export let id;
</script>

<label for={id}>{label}</label>
<input bind:value {placeholder} {id} {name} type="text" />
```

This creates a simple Input component where we can specify some predetermined fields. You can read more about [shorthand property notation](https://svelte.dev/docs#Attributes_and_props) if you are unsure about how the `{placeholder}` and the `bind:value` work.

Let's use this in our `src/App.svelte` component so that we can see what it looks like now:

```html
<!-- src/App.svelte -->
<script>
  import Input from "./components/Input.svelte";
  let value = "Initial input";
</script>

<main>
  <Input
    bind:value
    name="name"
    label="Name"
    id="name"
    placeholder="Enter name..." />
</main>
```

Now your site should contain a simple labeled input with the value "Initial input" and should be editable in the field.

---

# Creating the Form component

Now that our Input component is working, we need to create a Form component that can wrap this Input field for us in a handy way. Let's begin by creating a `src/components/Form.svelte` file:

```html
<!-- src/components/Form.svelte -->
<script>
  import Input from "./Input.svelte";

  export let onSubmit;
  export let fields;

  // Convert fields from [ { name: 'name', value: 'Value' } ] to { name : Value } which is more useful when submitting a form
  const fieldsToObject = (fields) =>
    fields.reduce((p, c) => ({ ...p, [c.name]: c.value }), {});

  // When submitting, turn our fields representation into a JSON body
  const handleSubmit = () => onSubmit(fieldsToObject(fields));
</script>

<style>
  :global(input, select) {
    margin: 5px;
  }
</style>

<!-- When submitting, prevent the default action which would result in a refreshed page -->
<form on:submit|preventDefault={() => handleSubmit(fields)}>
    <!-- Loop the fields and render the correct representation based on field.type -->
    {#each fields as field}
        {#if field.type === 'Input'}
        <Input bind:value={field.value} label={field.label} placeholder={field.placeholder} />
        {/if}
    {/each}
    <button type="submit">Submit</button>
</form>
```

Let's update our `src/App.svelte` file to use this component:

```html
<!-- src/App.svelte -->
<script>
  import Form from "./components/Form.svelte";

  //   Our field representation, let's us easily specify several inputs
  let fields = [
    {
      name: "firstName",
      type: "Input",
      value: "",
      placeholder: "Enter first name...",
      label: "First name",
    },
    {
      name: "lastName",
      type: "Input",
      value: "",
      placeholder: "Enter last name...",
      label: "Last name",
    },
  ];

  let result = {};
</script>

<Form
  onSubmit={(body) => {
    result = body;
  }}
  {fields} />

<!-- Show the current state of our Form -->
<pre><code>{JSON.stringify(result, 0, 2)}</code></pre>
```

Your page should look something like this after submitting some values in the new Form component:

![Form](/images/svelte/svelte_form.png)

---

# Adding another field type to our Form component

Now that we have a Form component that we can extend ourselves, let's go through how to add a Select field to our form. First, we create a file `src/components/Select.svelte`:

```html
<!-- src/components/Select.svelte -->
<script>
  export let value;
  export let options;
  export let label;
  export let id;
</script>

<label for={id}>{label}</label>
<select bind:value {id}>
  {#each options as option}
    <option value={option.value}>{option.label}</option>
  {/each}
</select>
```

This component will let us render a Select field that takes options as a property. Now we need to add support for this new component in our `src/components/Form.svelte` component. Let's extend the loop over fields to look like this instead:

```html
<script>
  import Input from "./Input.svelte";
  import Select from "./Select.svelte";

  export let onSubmit;
  export let fields;

  // Convert fields from [ { name: 'name', value: 'Value' } ] to { name : Value } which is more useful when submitting a form
  const fieldsToObject = (fields) =>
    fields.reduce((p, c) => ({ ...p, [c.name]: c.value }), {});

  // When submitting, turn our fields representation into a JSON body
  const handleSubmit = () => onSubmit(fieldsToObject(fields));
</script>

<style>
  :global(input, select) {
    margin: 5px;
  }
</style>

<!-- When submitting, prevent the default action which would result in a refreshed page -->
<form on:submit|preventDefault={() => handleSubmit(fields)}>
    <!-- Loop the fields and render the correct representation based on field.type -->
    {#each fields as field}
        {#if field.type === 'Input'}
            <Input bind:value={field.value} label={field.label} placeholder={field.placeholder} />
        {:else if field.type === "Select"}
            <Select bind:value={field.value} label={field.label} options={field.options}/>
        {/if}
    {/each}
    <button type="submit">Submit</button>
</form>
```

We also need to add another field to our `src/App.svelte` so that it shows up on our page:

```html
<script>
  import Form from "./components/Form.svelte";

  //   Our field representation, let's us easily specify several inputs
  let fields = [
    {
      name: "firstName",
      type: "Input",
      value: "",
      placeholder: "Enter first name...",
      label: "First name",
    },
    {
      name: "lastName",
      type: "Input",
      value: "",
      placeholder: "Enter last name...",
      label: "Last name",
    },
    {
      name: "favoriteColor",
      type: "Select",
      value: "green",
      label: "Favorite color",
      options: [
        { label: "Red", value: "red" },
        { label: "Green", value: "green" },
        { label: "Blue", value: "blue" },
      ],
    },
  ];

  let result = {};
</script>

<Form
  onSubmit={(body) => {
    result = body;
  }}
  {fields} />

<!-- Show the current state of our Form -->
<pre><code>{JSON.stringify(result, 0, 2)}</code></pre>
```

After all this is done, your page should now look something like the following after pressing submit:

![Form](/images/svelte/svelte_form_1.png)

---

# Summary

You now have a Form component that you can extend with styling and other types of fields as you wish that you can use to easily create JSON bodies that can be sent to backend services or used for other purposes on the front end. Having a Form component like this that handles all the logic around transforming the data from a representation of fields to a JSON-like body is really nice for quick prototyping or just all around generic forms that follow the same rules without custom logic.

It's now up to you to build upon this to add validation, other field types, styling etc. 😎

The repository for this project can be found [here](https://github.com/simon-nystrom/simple-svelte-form).

---