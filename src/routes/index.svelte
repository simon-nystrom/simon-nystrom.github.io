<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
  }
</script>

<script>
  import BlogPosts from "../components/blog/BlogPosts.svelte";
  import Divider from "../components/design/Divider.svelte";
  export let posts;
</script>

<style>
  p {
    font-weight: 300;
    font-size: 1.1em;
  }
  .intro2 {
    margin-bottom: 30px;
  }
</style>

<svelte:head>
  <title>Simon Nyström's Space</title>
</svelte:head>

<h2>Hi! 👋</h2>
<p>
  Welcome to my personal site. My name is Simon Nyström and I work as a software
  engineer with a primary focus on backend Java development.
</p>
<p class="intro2">
  This site is a place for me to drop notes and write about things that I find
  interesting and want to learn more about. This means I won't always be writing
  about topics that I feel like I know everything (or even a lot) about, I may
  even sometimes write about things that aren't directly related to software
  engineering. I am likely just learning in public, thus, you are unlikely to
  find some sort of source of truth on this site. I hope my thoughts can offer
  you some assistance and/or entertainment 🙂.
</p>

<!-- <Divider /> -->
<BlogPosts {posts} />
