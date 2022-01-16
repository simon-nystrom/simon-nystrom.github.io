---
title: "jq: Querying JSON"
author: "Simon Nyström"
series: "command line tool monthly"
date: "2021-01-16"
tags: ["terminal", "json"]
slug: "jq"
---

## What is `jq`?

The goal of this blog post is just to make a quick introduction to `jq` and why you might want to explore it on your own.

<br/>

`jq` is an open-source command line tool for interacting with JSON data, you can find the repository [here](https://github.com/stedolan/jq) and installations instructions for your system [here](https://stedolan.github.io/jq/download/).

<br />

Sometimes you (well, I do) end up in a situation where you wish you could explore and wrangle JSON data on the command line. `jq` let's you do exactly that and I believe it's a tool worth adding to your proverbial toolbox.

<br />

The examples in this blog post might seem contrived, but it is for the benefit of using a JSON API that you can all use without any extra dependencies needed. I hope the examples will make enough sense for you to utilize `jq` in a more pragmatic manner.

<br />

The API I will utilize in this blog post is the https://jsonplaceholder.typicode.com/ open API.

---

## The Basics

If you feel like you don't often have to query and explore specific parts of a JSON response, then at least the basic identity operator should provide some value.

<br/>

The identity operator in `jq` is simply the `.` character, running the following command highlights and pretty-prints your JSON:

```bash
curl -s https://jsonplaceholder.typicode.com/posts/1 | jq '.'
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
```

If you want the value of a specific field, you can use following forms:

```bash
curl -s https://jsonplaceholder.typicode.com/posts/1 | jq '.userId'
1
curl -s https://jsonplaceholder.typicode.com/posts/1 | jq '.["userId"]'
1
```

---

## Operating on JSON Arrays

`jq` also allows you to easily operate on JSON arrays, the simplest case is to just print whatever is at a specified index:

```bash
curl -s https://jsonplaceholder.typicode.com/posts | jq '.[2]'
{
  "userId": 1,
  "id": 3,
  "title": "ea quasi exercitationem repellat qui ipsa sit aut",
  "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
}
```

You can also return a slice of an array:

```bash
curl -s https://jsonplaceholder.typicode.com/posts | jq '.[0:2]'
[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  }
]
```

Or even the entire array:

```bash
curl -s https://jsonplaceholder.typicode.com/posts | jq '.[]'
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
…
{
  "userId": 10,
  "id": 100,
  "title": "at nam consequatur ea labore ea harum",
  "body": "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
}
```

---

## Operator Chaining

Fetching nested properties in `jq` is simple, you simply access it like you would in for example JavaScript:

```bash
curl -s https://jsonplaceholder.typicode.com/posts | jq '.[].title'
"sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
"qui est esse"
"ea quasi exercitationem repellat qui ipsa sit aut"
"eum et est occaecati"
…
```

The above can be accomplished in the following way too:

```bash
curl -s https://jsonplaceholder.typicode.com/posts | jq '.[] | .title'
```

As you might expect, the `|` character in a `jq` script works similar to how it works in common command line environments. The above script basically reads "for every element in the array, print the `title` field".

<br/>

We'll see more examples utilizing piping.

---

## `jq` Operators and Functions

`jq` comes with a bunch of built in functions and operators, for example you could make sure the titles of the first three entries end with an exclamation mark using the `+` operator:

```bash
curl -s https://jsonplaceholder.typicode.com/posts | jq '.[0:3] | .[].title + "!"'
"sunt aut facere repellat provident occaecati excepturi optio reprehenderit!"
"qui est esse!"
"ea quasi exercitationem repellat qui ipsa sit aut!"

```

Or you could combine functions, such as selecting all titles of a length greater than 78:

```bash
curl -s https://jsonplaceholder.typicode.com/posts | jq '.[] | select(.title | length > 78)'
{
  "userId": 5,
  "id": 50,
  "title": "repellendus qui recusandae incidunt voluptates tenetur qui omnis exercitationem",
  "body": "error suscipit maxime adipisci consequuntur recusandae\nvoluptas eligendi et est et voluptates\nquia distinctio ab amet quaerat molestiae et vitae\nadipisci impedit sequi nesciunt quis consectetur"
}
```

The above script combines two functions `select` and `length`, the `select` function which takes a boolean expression and keeps whatever satisfies the constraint; in this case the constraint where the title's `length` has to be greater than 78.

---

## Combining `jq` with Other Tools

The true power of command line utilities and tools is the power of chaining them together with the `|` character. This holds true for `jq` as well.

<br/>

Let's say we want to figure out the top 5 most frequent words and the counts of their respective occurences appearing in all the `body` properties of the posts:

```bash
curl -s https://jsonplaceholder.typicode.com/posts | jq '[.[].body] | add | split(" ")' | sort | uniq -c | sort | tail -5 | awk '{$1=$1};1' | sed s/"[\",]"/""/g
26 est
39 ut
43 qui
45 aut
84 et
```

---

## TLDR

`jq` is great if you ever want to wrangle JSON data in an easy and scriptable way.

<br/>

Find out more about `jq` here: https://stedolan.github.io/jq/
