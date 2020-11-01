---
date: "2020-11-01"
title: "Web scraping with Python"
slug: "web-scraping-python"
summary: "Learn how to scrape web sites to access information programmatically using Python3, BeautifulSoup and Requests."
categories: []
published: true
tags: ["python", "web-scraping", "requests", "tutorial", "beautifulsoup"]
---

Sometimes you want to access data on the web that isn't easily available through an API. For that, web scraping is a viable alternative. Web scraping is in essence a way to programmatically visit a web site as if you were a browser and fetch the data that way. This tutorial post will guide you through the process of web scraping using Python3, and two libraries [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/) and [Requests](https://requests.readthedocs.io/en/master/). As an example, we will build a command line application to search and print ratings for movies and TV shows on IMDB.

---

# Project setup

To follow along with the tutorial you will need to have the following:

- [Python](https://www.python.org/downloads/) installed
- Some basic knowledge of Python and some basic HTML/CSS knowledge

Alternatively you can check out [my blog post for using dev containers](https://newcurrent.se/blog/containerized-development-environment) and follow that guide but select the `Python 3` container spec when creating the dev container. If you can't get the dev container way to work, you can refer to the [repository for this blog post](https://github.com/simon-nystrom/simple-web-scrape).


Let's begin by creating a folder for our project and installing the required dependencies:

```bash
mkdir web-scrape
cd web-scrape
pip3 install beautifulsoup4 requests
```

- `beautifulsoup4` lets us easily access DOM elements programmatically
- `requests` gives us a nice and easy to use interface to make HTTP requests

---

# Researching the application's lifecycle

As stated in the introduction, we're going to focus on searching on IMDB showing the rating for some selected title. Our first step should be to do these steps in a browser and see what it looks like there.

Visit www.imdb.com in your browser and search for a movie of your choice. I searched for *Jurassic Park*, you should be greeted with something like the following image:

![Jurassic Park search result on IMDB](./images/imdb/jurassic_park_search_res.png)

Once you're on this page, inspect one of the rows in the *"Titles"* table by right clicking and pressing *"Inspect element"*, this varies from browser to browser but in Firefox it looks like this:

![Inspect element](./images/imdb/inspect_element.png)

You might also have noticed that something opened up at the bottom of your browser, that section is commonly referred to as the dev tools. We'll be using that now to figure out the structure of the data that we're after. At the time of writing this, it looks like this:

![Dev tools open](./images/imdb/dev_tools.png)

What's displayed here is the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) structure. The highlighted row here is what I selected when taking the *"Inspect element"* action earlier. This shows us how all the HTML nodes relate to each other and where in the DOM the data we're after is located. Since we want to be able to list these results in our application, we need to be able to present these search results.

We can see that the data we're interested in is located inside the `<td>` element with the class `result_text`, the name of the title is wrapped in an `<a>` element with the `href` holding the relative link to the title. This is all the data we need from this page.

Let's follow the link to this title to see what the next page we need to tackle looks like, click the link to one of the search results and you should end up on the page for the movie/show you picked:

![Jurassic park](./images/imdb/jurassic_park.png)

When on this page, let's repeat the step and *"Inspect element"* on the rating display:

![Inspect rating element](./images/imdb/inspect_element_2.png)
![Dev tools on inspect rating element](./images/imdb/dev_tools_2.png)

Here we can see that for this page the data we're interested in is located inside a `span` element wrapped by a `strong` element that is in turn wrapped by a `div` element with the class `ratingValue`.

Now that we have gathered all the information we need for our app, let's proceed to the coding part.

---

# Searching on IMDB and listing the titles

Create a file `scrape.py`, this will be our only file for this project. In it we will begin by importing the required dependencies and adding search functionality:

```python
# scrape.py
import requests
from bs4 import BeautifulSoup

def search(search_term):
    # Make the search request to IMDB
    response = requests.get(f"https://www.imdb.com/find?q={search_term}")
    html = response.text
    soup = BeautifulSoup(html, "html.parser")
    # Find the table with the class findList
    table = soup.find("table", {"class": "findList"})
    # Use CSS selector syntax to get all td elements from the table with the class result_text
    rows = table.select("tr td.result_text")
    # Construct a list with the search results, store the title and the href in dicts
    return [{"title": row.get_text().strip(), "href": row.a['href']} for row in rows]
```

Let's add another function to this file where we'll place our user interaction code:

```python
def run():
    search_term = input("Search IMDB: ")
    results = search(search_term)
    num_results = len(results)
    print(f"Found {num_results} results:")
    # Use built-in function enumerate to access the index variable i
    for i, result in enumerate(results):
        print(f"({i+1}) {result['title']}")

# Don't forget this line! We have to call the run function or nothing will happen when we run our program.
run()
```

Save the file and we're ready to try our app to see what it looks like right now, run it by going to the terminal and running:

```bash
python3 scrape.py
```

Enter a search term and something similar should show up:

![in app search results](./images/imdb/in_app_search_res.png)

You might notice that selecting a result does nothing at the moment, and that's cause we only implemented half the logic. It's always good to test that what you've got so far is working at least, and if you're seeing search results in your terminal then you're good to continue.

----

# Printing the rating for the selected title

We need some more logic to request the next page and print the value from the `span` element we identified earlier. You may have noticed that in the `search` function we defined, we're returning the `href`s but we're yet to use them. Let's incorporate them now.

In `scrape.py`, add another function:

```python
def get_rating(href):
    # href passed in here should be from what we found earlier, the href from the <a> tag that the title was wrapped in
    response = requests.get(f"https://www.imdb.com{href}")
    html = response.text
    soup = BeautifulSoup(html, "html.parser")
    # Select by CSS selector for .ratingValue class and get the first result (index 0), we only expect there to be one
    rating = soup.select(".ratingValue")[0].span.get_text()
    return rating
```

And let's use it in our `run` function:

```python
def run():
    # Main interaction
    search_term = input("Search IMDB: ")
    results = search(search_term)
    num_results = len(results)

    print(f"Found {num_results} results:")
    for i, result in enumerate(results):
        print(f"({i+1}) {result['title']}")

    # Convert to int and subtract one to undo the addition to the index in the above loop
    selection = int(input(f"Select by entering a number (1-{num_results}): ")) - 1
    selected_result = results[selection]
    # Pass in the href to the title we want to get the rating for
    rating = get_rating(selected_result["href"])

    print(f"{selected_result['title']} has a rating of {rating}!")

# Again, make sure you call this in scrape.py
run()
```

Running our app now results in the following behavior:

![Final output](./images/imdb/final.png)

----

# Summary

If you can use an API to get ahold of the data that you're after, you should always do so, it's faster and less prone to errors. Scraping the web can get messy sometimes depending on the structure of the DOM. As you may have already figured out, if something was to change on the layout of IMDB, it would potentially break our app.

I hope you learned something new and that you find the information provided here useful, maybe you were looking to use data from some site in your own project? Go ahead and try it out 😊.

Feel free to ask any questions.

Enjoy! [Here](https://github.com/simon-nystrom/simple-web-scrape) is the associated repository for this post.