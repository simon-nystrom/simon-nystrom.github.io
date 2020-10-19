---
date: "2020-10-19"
title: "Containerizing your development environment"
slug: "containerized-development-environment"
summary: "Learn how to container your development environment with Docker and Visual Studio Code."
categories: []
published: false
tags: ["docker", "visual-studio-code", "node", "javascript"]
---

If you often work from different machines or on different projects where you want to be able to share a development environment within the team to ensure consistent use of versions and so on, containerizing your development environment is the way to go.

This post will go through the needed steps to containerizing your development environment for a Node.js project in Visual Studio Code using Docker.

---

# Project setup

To follow along with the blog you will need to have the following:

- [Visual Studio Code](https://code.visualstudio.com/download) installed
- An empty directory opened in Visual Studio Code
- [Docker](https://docs.docker.com/get-docker/) installed and perferably some prior knowledge of what Docker is and how it works

Utilizing a development container easily in Visual Studio Code has another requirement: the plugin `ms-vscode-remote.remote-containers` provisioned by Microsoft. Go ahead and install this in Visual Studio Code, either earch for it on the marketplace inside the editor or run 
```bash
code --install-extension ms-vscode-remote.remote-containers
``` 
from the command line.

Once the extension is installed, you need to reload Visual Studio Code to activate the extension.

---

# Your first dev container

Once you've completed the previous step, press the key combination `CMD + SHIFT + P` (Mac) `CTRL + SHIFT + P` (Windows) to open the command palette. Type `remote-containers` and you should be greeted with something similar to the image below:

![Command palette with remote containers search results](./images/vscode/command_palette_remote_containers.png)

To initialize the devcontainer files, select the `Remote-Containers: Add Development Container Configuration Files...` option and you will get an extensive list presented to you where you get to pick which predefined container definition to use. Since this example will set up a Node.js project, select the `Node.js` container definition then pick a version, I went with `14`. If it doesn't show up, you might have to search for it and click `Show all definitions...`.

If you can't find the `Node.js` container definition, you can refer to the `.devcontainer` folder in the [repository created for this blog post.](https://github.com/simon-nystrom/devcontainer-example)

When the step above has been completed, you should have a `devcontainer.json` file open under the `.devcontainer` folder. This file is generated and contains some helpful starter options and comments. It looks like this:

```json
{
	"name": "Node.js",
	"build": {
		"dockerfile": "Dockerfile",
		// Update 'VARIANT' to pick a Node version: 10, 12, 14
		"args": { "VARIANT": "14" }
	},

	// Set *default* container specific settings.json values on container create.
	"settings": { 
		"terminal.integrated.shell.linux": "/bin/bash"
	},

	// Add the IDs of extensions you want installed when the container is created.
	"extensions": [
		"dbaeumer.vscode-eslint"
	]

	// Use 'forwardPorts' to make a list of ports inside the container available locally.
	// "forwardPorts": [],

	// Use 'postCreateCommand' to run commands after the container is created.
	// "postCreateCommand": "yarn install",

	// Uncomment to connect as a non-root user. See https://aka.ms/vscode-remote/containers/non-root.
	// "remoteUser": "node"
}
```

It is possible that Visual Studio Code noticed the creation of this `.devcontainer` folder and might now be prompting you in the bottom right corner to reopen the folder to develop in a container. Go ahead and click `Reopen in Container` if that is the case. Otherwise you might need to do it manually via the command palette like we did when we created the devcontainer earlier, but type and select the `Remote-Containers: Open Folder in Container...` option and select the current folder.

You should now be connected to the dev container, indicated in the bottom left like this:

![Dev container indicator](./images/vscode/dev_container.png)

You might also have noticed that the open folder in the Explorer window has been appended with `[DEV CONTAINER: NODE.JS]`.

Now that we're connected to our dev container, let's continue by putting it to use and exploring the benefits.

---

# Using the dev container

Our directory isn't empty anymore since we now have a `.devcontainer` folder, however, this folder alone is meaningless. Open an integrated terminal inside Visual Studio Code, this can be done by searching for `Terminal: Create New Integrated Terminal` in the command palette and selecting it. This will open a terminal inside the dev container.

Now we're ready to use Node.js inside the container with the version we specified earlier (`14` in this case):

![Node running inside the dev container](./images/vscode/node_dev_container.png)

---

# Summary

Using dev containers you can easily reproduce your own development environment on other machines or share the development environment with your team. Dev containers even allow you to install container specific extensions such as in the `devcontainer.json` example earlier where the extension `dbaeumer.vscode-eslint` is installed in the container.

A multitude of dev container templates are available various languages/development environments but you can also just as easily create your own by modifying the generated `devcontainer.json` and `Dockerfile` files.

Another major benefit is that your development environment is now easily backed up to a remote file storage or a Git repository. It's no longer a major hassle to get your computer set up properly if you make sure to always use dev containers. You also no longer have to worry about running differing versions to what was expected/intended for the project.

For more advanced usages and more information I recommend the following resources:
- [Basics](https://code.visualstudio.com/docs/remote/containers)
- [Advanced usage](https://code.visualstudio.com/docs/remote/containers-advanced)
- [Tips & Tricks](https://code.visualstudio.com/docs/remote/troubleshooting#_containers-tips)

---