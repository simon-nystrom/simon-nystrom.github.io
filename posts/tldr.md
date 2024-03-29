---
title: "tldr: Remember your commands"
author: "Simon Nyström"
series: "command line tool monthly"
date: "2021-12-18"
tags: ["terminal"]
slug: "tldr"
---

## What is `tldr`?

`tldr` is an open-source command line tool distributed both via `npm` and `pip3` that lets you easily look up common use cases for various commands.

Have you ever been in the position where you:

- Forgot how to use the `tar` command?
- Forgot how to open an `ssh` tunnel?
- Forgot how `git rebase` works?
- Forgot how to `…` in the terminal?

Well, I have. `tldr` lets you easily look up common uses cases for commands and subcommands. All the `tldr` pages are open-source and community driven, and if a command you are trying to use `tldr` for is not available, you can always add it yourself to help out both yourself and others.

---

## How do I install it?

To get your hands on `tldr`, all you have to do is install it in one of the following ways:

- `npm install -g tldr`
- `pip3 install tldr`

After that, provided the package location is in your path, all you need to do is run `tldr git rebase` for example.

Here's an example of what that might look like:

![tldr_img](/images/tldr.png)

---

## More information

If you have further interest in this, please visit [https://tldr.sh/](https://tldr.sh/)
