<script>
  import BlogLink from "./BlogLink.svelte";

  export let posts;
</script>

<style>
  .container {
    margin-top: 60px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  }

  .inline-divide {
    border-bottom: 1px solid #262e40;
    margin-left: 20px;
    margin-right: 30px;
    flex: 1;
    margin-top: 4px;
  }

  h3 {
    letter-spacing: 0.1rem;
  }
</style>

<div class="container">
  <h3>Recent posts</h3>
  <div class="inline-divide" />
</div>

{#each posts as post}
  <BlogLink
    title={post.title}
    href={`blog/${post.slug}`}
    tags={post.tags}
    date={post.date} />

  <!-- <li><a rel="prefetch" href="blog/{post.slug}">{post.title}</a></li> -->
{/each}
