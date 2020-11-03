<!--<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
  }
</script><script>
  import BlogPosts from "../../components/blog/BlogPosts.svelte";
  import H3 from "../../components/design/headers/H3.svelte";

  export let posts;
</script><svelte:head>
  <title>Blog</title>
</svelte:head>

<H3 text="Recent posts" />
<BlogPosts {posts} /> -->
