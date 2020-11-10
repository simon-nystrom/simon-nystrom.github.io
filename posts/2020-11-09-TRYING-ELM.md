---
date: "2020-11-10"
title: "Free of runtime errors with Elm"
slug: "no-runtime-errors-elm"
summary: "Learn about the basics of Elm and how it can help you eliminate runtime errors for good."
categories: []
published: true
tags: ["elm", "javascript"]
---

We will build a simpler version of [this](https://todo.newcurrent.se/) in this blog post. It goes through the steps of setting up an [`Elm`](https://elm-lang.org/) project and the benefits of using `Elm` on the front-end and how it provides some really nice help for you as a developer.


----

# Prerequisites

You need a few things to get started. Knowledge of JavaScript, HTML and CSS is expected as this guide skips over all those steps and I recommend following my [devcontainer guide](https://newcurrent.se/blog/containerized-development-environment) and using an `Elm` container (instead of a `Node` container like that guide) since that eliminates any sort of installation process for you. For this tutorial I will be using a devcontainer, but if you want to install `Elm` on your local filesystem you can do so too by following the steps [here](https://guide.elm-lang.org/install/elm.html). Knowing the basics of some functional programming concepts won't hurt either 😊.

----

# The Elm architecture

`Elm` uses something it refers to as [`The Elm Architecture`](https://guide.elm-lang.org/architecture/). This architecture is really useful when dealing with transformations of data and reactive updates. Perhaps you've heard of a popular state management library called Redux? The Redux architecture is inspired by the one used in Elm. This pattern is built into `Elm`, so no need for a third-party lib.

The Elm Architecture builds on three core principles:
- Model - The model (often called state in other frameworks) of your application
- View - Convert the model to HTML
- Update - Update the model

You can already see how this architecture works: The model turns into HTML that is then acted upon (updated) which then triggers an update and the HTML is re-rendered etc. You can think of this as a render loop.

----

# Creating a basic page

Let's start by initializing the project, this is done by running the following:

```bash
elm init
```

This creates a folder called `src` and a file called `elm.json`. You can think of this like the `package.json` for a `node` project, basically it describes your project and its dependencies.

Let's create our first page, create a page called `Main.elm` and place it in the `src` directory.

```elm
-- Don't worry about this line, we can expose everything because
-- we will only be using this file, so exposing something doesn't
-- matter
module Main exposing (..)

-- Imports that we need the run our initial example
import Browser
import Html exposing (Html, div, text)

-- Initialize the empty record, this is used by Elm
-- to create the initial model
init : Model
init =
     Model


-- We don't have a type annotation here, which is normally
-- recommended but that's okay because we don't have to worry
-- about what this function returns
main =
    Browser.sandbox { init = init, update = update, view = view }


-- Right now, our Model is just an empty Record
type alias Model =
    {}


-- Prepare the Msg type that will be used to trigger
-- updates in the render loop
type Msg
    = Never


-- Right now, whatever Msg we get we won't update the model
-- Msg -> Model -> Model simplified means this function takes
-- in a Msg and a Model and produces a new Model.
update : Msg -> Model -> Model
update msg model =
    Model


-- Our view is a function that takes the model and produces Html
-- and messages that in turn trigger the update function
view : Model -> Html Msg
view model =
    div [] [ text "Hello world" ]
```

Now that we have our `src/Main.elm` file set up, let's try to run our code and view it in a browser. We'll use `elm reactor` for this. `elm reactor` allows you to inspect your program in a file browser in the browser and whatever file you click on gets compiled and rendered, try it out by visiting http://localhost:8000 and browsing to `src/Main.elm` after running:

```
elm reactor
```

This should show you an HTML page that only contains the string _Hello world_.

----

# Adding an Input field and tying it to our Model

Our page is useless at the moment. All it does is display a static string and since we want to create a todo tracker, let's start by adding an input field where we can type our todos. Modify the `view` function to look like this instead:

```elm
view model =
    div []
        [ input [] []
        ]
```

Also make sure you add `input` as an exposed field near the start of the file:

```elm
import Html exposing (Html, div, input, text)
```

These HTML functions that correspond to HTML element names are functions that take two parameters, one list of attributes and one list of children, so our example with the updated model would generate HTML equal to this:

```html
<div>
  <input />
</div>
```

Now, our `input` can't really do anything, so we need to tie some behavior to it. Let's create a type of `Msg` for that, call it `UpdateInput`. Change the `type Msg` we created earlier to look like this:

```elm
type Msg
    = UpdateInput String
```

We also need to let our `Model` know that we need to track the state of a field:

```elm
type alias Model =
    { value : String }
```

The `Elm` compiler will complain now, because the type of our `Model` changed, so our `init` function needs to handle this new type of model:

```elm
init =
    { value = "" }
```

And let's have our `input` fire the event when it's changed, let's also create a new `div` element to display whatever the value of our `model.value` is:

```elm
-- Make sure to import the onInput event near the top of the file
import Html.Events exposing (onInput)

-- ...

view model =
    div []
        [ input [ onInput UpdateInput ] []
        , div [] [text model.value]
        ]
```

Now we need to let our `update` function react to this type of `Msg`:

```elm
update msg model =
    case msg of
        -- Whenever we get the UpdateInput message, assign the new value to our state's
        -- value and set that to be the new value. Whatever update returns is the new
        -- state of the application
        UpdateInput input ->
            { value = input }
```

Run your app again and you should see that whatever you type into the `input` field is reflected on a line below.

----

# Creating a type for our Todo

We've come pretty far already, our next step should be preparing the `type` needed by our application to track Todo items.

Let's create a Todo alias type, this let's you treat the type Todo as a record consisting of the fields within:

```elm
type alias Todo =
    { id : Int, task : String, isComplete : Bool }
```

Our model should track the Todos, so that we can display them:

```elm
type alias Model =
    { value : String, todos : List Todo }
```

Again, the power of static typing will give two handy errors for us to fix, since our `Model` now contains one more field, we need to update both the `init` and `update` function:

```elm
init =
    -- Let the todo list be empty to start with
    { value = "", todos = [] }

-- ...

update msg model =
    case msg of
        UpdateInput input ->
            -- This is syntax sugar to let Elm know that when
            -- this message is fired, the model should stay
            -- unmodified except for the value property that
            -- should be set to the new value of the input field
            { model | value = input }
```

That's great. We've added a new type and handled the addition of it. You can't interact with it at all yet though, let's make that happen in the next section.

----

# Adding Todos to our state

First of all, we need a button we can press so that the value of our input is added as a todo in our Todo list.

Let's start by defining a new type of message:

```elm
type Msg
    = UpdateInput String
    | AddTodo
```

You'll notice our code has another error now. This is the beauty of `Elm`. You should see a compiler error telling you the following:

![Compiler error in Elm](/images/elm/compiler_error.png)

This is amazing, the compiler is letting us know that we haven't handled the case of the `AddTodo` message and `Elm` has no idea what to do if that was to happen, so it's forcing us to deal with it immediately. Let's do that:

```elm
update msg model =
    case msg of
        UpdateInput input ->
            { model | value = input }

        AddTodo ->
            case model.value of
                -- If the value of the input field is empty, do nothing
                "" ->
                    model

                -- Whatever else the input field is set to, add it as a todo
                _ ->
                    { model
                        | todos =
                            -- Let's update our todos field to include the new Todo item.
                            -- Its ID will be the number of todos at creation, its value
                            -- will be the value of our input and it will initially not
                            -- be marked as complete
                            { id = List.length model.todos, task = model.value, isComplete = False }
                                -- (::) is a function in Elm that can be used to add something to the
                                -- front of a list
                                :: model.todos
                    }
```

Good. We're handling all the messages our app can pass at this stage. We're never firing the `AddTodo` message at the moment, let's implement that next and add a way to display our list of Todos:

```elm
-- Make sure button is imported at the top for this step
import Html exposing (Html, button, div, input, text)

-- And make sure the onClick event is included too
import Html.Events exposing (onClick, onInput)
--...

-- Create a helper function to render our todos
viewTodo : Todo -> Html Msg
viewTodo t =
    div [] [ text t.task ]

view model =
    div []
        [ input [ onInput UpdateInput ] []
        -- When we click the Add button, fire the AddTodo event
        , button [onClick AddTodo] [ text "Add" ]
        -- Run all our todos through the viewTodo function
        , div [] (List.map viewTodo model.todos)
        ]
```

Run your app now and you should be able to type text into the input field and click add and you should see an increasing number of todos being added to the list.

----

# Summary

`Elm` is an excellent programming language in my opinion. The compiler really helps you out with extremely friendly error messages that tell you what you need to do to make it compile. Once it compiles, it's probably going to work.

You can achieve close to no runtime errors by using Elm. Sure, writing the code up front might take a bit longer but Elms compiler really helps you when you need to refactor or fix bugs. `Elm` doesn't even have a concept of `null`! Everything must have a value.

I think the barrier of entry to `Elm` is a big high, but if you have some basic functional programming experience and knowledge of HTML, CSS and JavaScript you should be able to create web apps with `Elm`.

The repository for this app is here: https://github.com/simon-nystrom/basic-elm-todo.

I hope you found it interesting and that you'll try out `Elm` yourself!