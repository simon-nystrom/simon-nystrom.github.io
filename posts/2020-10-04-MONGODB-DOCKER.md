---
date: "2020-10-04"
title: "Setting up MongoDB in Docker for development"
slug: "docker-mongodb-development"
summary: "Learn how to setup MongoDB using Docker on your local machine."
categories: []
published: true
tags: ["docker", "mongodb"]
---

This post will go through the steps needed to setup a working MongoDB environment inside a Docker container on your local machine. The benefits of having MongoDB inside a container on your local machine is that you can easily change versions and use different MongoDB instances without having to have multiple different versions installed. It also allows you to share your MongoDB setup with your team so that everyone can connect to a similar local database that can be used for testing and development.

You need to have Docker installed to be able to follow this guide, instructions for this can be found [here](https://docs.docker.com/get-docker/). I am using version `2.4.0.0 (48506)` at the time of writing.

Disclaimer: The following approach stores data inside the container itself, meaning that **you will lose all your data if you remove the container!** This is intended to be used for development and testing purposes.

---

# Running the MongoDB instance

It's surprisingly easy to get this up and running.

Run the following command from a terminal window:

```bash
docker run -p27017:27017 --name my-mongodb-container -d mongo:latest
```

This will:

- Start the `mongo:latest` image in a container
- Detach the container `-d`
- Name it `my-mongodb-container`
- Map the container port `27017` to our own machine's `27017`

You can find more tags [here](https://hub.docker.com/_/mongo) if you don't want to use the `latest` version.

---

# Connecting to the MongoDB instance

Now that we have a MongoDB container up and running, we can try to connect to it using the following command:

```bash
docker run -it --rm mongo mongo --host host.docker.internal
```

This will:

- Start the `mongo` image in a container
- Using interactive mode `-it`
- Removing the container once we exit `--rm`
- Run the `mongo` command inside the container, with the argument `--host host.docker.internal`

The `host.docker.internal` address is special and can be used as a workaround to [connect to the host machine from a container](https://docs.docker.com/docker-for-mac/networking/#use-cases-and-workarounds).

---

That's all there is to it. You should be able to go ahead and use this container instance of MongoDB now for local development and testing purposes.
