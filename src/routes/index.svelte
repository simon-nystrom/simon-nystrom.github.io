<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then((r) => r.json())
      .then((posts) => {
        return {
          posts: posts,
        };
      });
  }
</script>

<script>
  import BlogPosts from "../components/blog/BlogPosts.svelte";
  import H3 from "../components/design/headers/H3.svelte";
  export let posts;
</script>

<style>
  p {
    font-weight: 300;
    font-size: 1.1em;
  }
  .intro {
    margin-bottom: 30px;
  }
</style>

<svelte:head>
  <title>Newcurrent Blog</title>
  <meta
    name="description"
    content="Blog posts and notes from a software engineer with an interest in always learning new skills and technologies and to share my knowledge." />
</svelte:head>

<h2>Hi! 👋</h2>
<p class="intro">
  Welcome to my site. My name is Simon Nyström. I'm a 30 year old software
  engineer with a big interest in tech and programming. This site is a place for
  me to share my thoughts and learnings with whoever may be interested 🙂.
</p>

<H3 text="Recent posts" />
<BlogPosts {posts} />
