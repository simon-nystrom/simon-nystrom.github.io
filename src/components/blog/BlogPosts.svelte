<script>
  import BlogLink from "./BlogLink.svelte";

  export let posts;
</script>

{#each posts as post}
  <BlogLink
    title={post.title}
    href={`blog/${post.slug}`}
    tags={post.tags}
    date={post.date} />
{/each}
