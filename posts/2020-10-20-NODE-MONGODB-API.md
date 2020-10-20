---
date: "2020-10-20"
title: "Create a CRUD API with Node.js and MongoDB"
slug: "crud-api-node-mongodb"
summary: "Learn how to create a CRUD API using Node.js, MongoDB and Express."
categories: []
published: true
tags: ["node", "mongodb", "express", "javascript", "mongoose"]
---

This post will walk you through how to create your own base for a CRUD (Create, Read, Update, Delete) API that will handle todos. We will be using Node.js, MongoDB, Express and Mongoose to create the API. 

---

# Project setup

To follow along with the blog you will need to have the following:

- [Node](https://nodejs.org/en/download/) installed
- [MongoDB](https://www.mongodb.com/try/download/community) installed and running on 27017 (default port)

Alternatively you can check out [my blog post for using dev containers](https://newcurrent.se/blog/containerized-development-environment) and follow that guide but select the `Node.js & Mongo DB` when creating the dev container. If you can't get the dev container way to work, you can refer to the [repository for this blog post](https://github.com/simon-nystrom/node-mongodb-crud-api).

The first course of action is to initialize a project in a new folder using `npm`, in your terminal run the following and complete the project setup:

```bash
mkdir my-crud-api
cd my-crud-api
npm init
```

Some basic dependencies are needed to create the API:

```bash
npm install mongoose body-parser express@^5.0.0-alpha.8
```

- `mongoose` will be used to connect to MongoDB easily and create a schema for the Todo item.
- `body-parser` will be used to enable parsing JSON requests easily.
- `express` will be used to set up the HTTP server, we'll use the alpha version for 5.0 to simplify our code a little bit.

---

# Setting up the web server

Begin by creating a file called `index.js`. This will be the entry point to our application and it is in this file that we will start and initialize our web server.

```javascript
// index.js
const express = require("express");

const app = express();

// Wrap our starting logic in an async function so we can use await syntax
const startApplication = async () => {
  await app.listen(8000);
  console.log("Listening on 8000...");
};

startApplication();
```

Now if you run `node index.js` in your terminal, your web server should be running and listening on port `8000`, you can verify that by going to http://localhost:8000 and you should be greeted with the string `Cannot GET /`. That means your server is working, albeit quite meaningless for now.

---

# Creating the Todo model and router

Create a new folder in the root directory of your project and call it `src`, inside this new folder create two files called `todo.js` and `todoRouter.js`.

We'll place our model in the `todo.js` file. This will be the schema defined with help of `Mongoose` that we installed earlier.

```javascript
// src/todo.js
const mongoose = require("mongoose");

// Create a mongoose schema, make title and createdAt be the properties and make them required
const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  createdAt: { type: Date, required: true },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
```

This `Todo` object that we export from `src/todo.js` is the object that we will use to handle the database connections needed to interact with the database and create, read, update and delete todos. Let's use it in our router and define routes for all the actions we want to support:

```javascript
// src/todoRouter.js
const express = require("express");
const Todo = require("./todo");

const todoRouter = express.Router();

// List all todos
todoRouter.get("/", async (_, res) => {
  res.json(await Todo.find({}));
});

// Read todo by ID
todoRouter.get("/:todoId", async (req, res) => {
  const { todoId } = req.params;
  res.json(await Todo.findById({ _id: todoId }));
});

// Delete todo by ID
todoRouter.delete("/:todoId", async (req, res) => {
  const { todoId } = req.params;
  await Todo.deleteOne({ _id: todoId });
  res.status(204).send();
});

// Update todo by ID
todoRouter.put("/:todoId", async (req, res) => {
  const { title } = req.body;
  const { todoId } = req.params;
  res.json(await Todo.updateOne({ _id: todoId }, { title }));
});

// Create a todo
todoRouter.post("/", async (req, res) => {
  const { title } = req.body;
  res.json(await Todo.create({ title, createdAt: new Date() }));
});

module.exports = todoRouter;
```

----

# Using the router in our server

Once the two files in the previous example have been created, it's time to hook the router up to our app and to connect to MongoDB using `mongoose`:

```javascript
// index.js
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const todoRouter = require("./src/todoRouter");

const app = express();

// Add body-parser middleware to automatically parse JSON requests
app.use(bodyParser.json());
// Requests done to the base path /todo should go through the todoRouter
app.use("/todo", todoRouter);

const startApplication = async () => {
  await mongoose.connect("mongodb://localhost:27017/todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(
    "Successfully connected to MongoDB at: mongodb://localhost:27017/todo"
  );
  await app.listen(8000);
  console.log("Listening on 8000...");
};

startApplication();
```

----

# Sending some requests

Once the `index.js` file has been extended with the additional functionalities above, you can restart your server and we are ready to send some requests using our terminal (you can of course use Postman or Insomnia or other ways of sending requests too):

### Create a todo (note the _id):
```bash
curl -XPOST -H'Content-Type:application/json' -d'{"title": "My first todo!"}' localhost:8000/todo
```

### Update the todo (use the _id from above):
```bash
curl -XPUT -H'Content-Type:application/json' -d'{"title": "My first todo! But updated!"}' localhost:8000/todo/5f8f221fdb30b30457e23e1c
```

### Read the todo (use the _id from above):
```bash
curl -XPUT -H'Content-Type:application/json' -d'{"title": "My first todo! But updated!"}' localhost:8000/todo/5f8f221fdb30b30457e23e1c
```

### Delete the todo (use the _id from above):
```bash
curl -XDELETE localhost:8000/todo/5f8f221fdb30b30457e23e1c
```

### List all todos:
```bash
curl -H'Content-Type:application/json' localhost:8000/todo
```

----

I hope you learned something. Creating a basic API using the method above is quick and easy if you want to get a prototype up and running fast.

Enjoy!