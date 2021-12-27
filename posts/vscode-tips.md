---
title: "A few Visual Studio Code keybindings to improve your efficiency"
author: "Simon Nyström"
date: "2021-12-27"
tags: ["webdev", "editor", "productivity"]
slug: "vscode-tips"
---

## Proficiency for efficiency

As a developer, you're spending most of your time at the keyboard; reading, navigating, modifying and writing code. Just like a carpenter should master his tools, us developers should master ours. The more proficient you can become at speeding up the menial tasks that are repeated many times throughout the day, the more time you can spend on what you actually set out to do: **code**.

<br/>

This post aims to provide some useful starter tips to get more proficient at the above tasks. Wouldn't it be nice if you could stop using your mouse so much?

<br/>

I use a Windows machine, so I'll be specifying `ctrl` and `alt` in the post, but most things in VS Code are interchangeable and simply become replaced by `cmd` and `option` on a Mac. For those that aren't interchangeable, read on to find out how to efficiently look up keybindings that you might have forgotten.

---

## Open command palette (`ctrl` + `shift` + `p`)

If you haven't been using this, you've really been missing out. All of the following tips and tricks in this blog post can be found via this menu.

When you enter this key combination, the following window pops up:
![command_palette](/images/commandpalette.png)

This menu let's you search for all the actions that you can trigger inside of Visual Studio Code. For example, try searching for `quick fix` and the next tip in this blog post shows up.

<br/>

This shortcut is one of my most used, it let's me forget keybindings without making me feel bad.

<br/>

Maybe you forgot how to organize imports? Simply search for it and it will be there, including information about the keybinding for that action. Not only can it help you with things that are bound to key combinations, but it can also trigger actions that have no corresponding keybinding.

---

## Quick open (`ctrl` + `p`)

Ever click around the file tree? Well, you shouldn't. Once you're familiar with a project, you more or less know what all the files are called. Jump to a file easily by using this keybinding and typing a substring of the file name and your file navigation in Visual Studio Code will speed up by miles.

---

## Trigger quickFix (`ctrl` + `.`)

This shortcut triggers a contextual suggestion for actions you can take based on your current cursor placement.

For example, you can add and remove braces to an arrow function:

![add_braces_arrow_fn](/images/ctrldot.png)

This is really useful when you want to add functionality to a one line arrow function defined somewhere in your project.

<br/>

You can do many nice things with this command, try it out every here and there and see what you can find. It can be especially helpful to trigger an import suggestion or to add all required parameters to a React component for example (provided you use `typescript`).

---

## Remove current line (`ctrl` + `shift` + `k`)

I find myself using this one maybe too often, but it's really nice being able to delete lines without selecting the text.

---

## Expand selection (`alt` + `shift` + `right/left arrow`)

Ever find yourself wanting to select text in between two parentheses? Or between two quotes? Well, this let's you do exactly that. To use it, place your cursor somewhere and try it out. You expand the selection by hitting `right` in the key combination specified above, or `left` if you go too far. This is especially great when you want to remove all text inside a block, or rewrite the arguments to a log statement.

---

## Add selection to next match (`ctrl` + `d`)

This is a keybinding that is more versatile than you might think. What this keybinding does it that it looks for the next match of your current selection, and marks that as well while duplicating your selection box. This is easier to illustrate with an image:

![duplicated_selection](/images/ctrld.png)

Here I marked the word `day` and hit `ctrl` + `d` a bunch of times, this selected all occurrences and I can either replace `day` with something else just by typing or remove it by hitting delete for example.

This really starts to shine once you can visualize common substrings or parts of text that you wish to manipulate all at once. A common task where this is great is to turn a comma-separated list into a space-separated one for example, or to insert new lines after every space.

---

## Learn more

I intentionally kept this blog post pretty short, if you try to learn too many keybindings at once you might end up feeling overwhelmed. Try to focus on learning one at a time, once it feels second nature to you, move along and learn another one.

<br/>

If you want some inspiration, open up the command palette and search for _Keyboard Shortcuts_ and you'll find an extensive list of built-in keybindings available out of the box in Visual Studio Code.

<br/>

Don't forget, you can always add your own keybindings or rebind the ones that are already present.
