<script>
  import H3 from "../design/headers/H3.svelte";
  import BlogLink from "./BlogLink.svelte";

  export let posts;
</script>

{#each posts as post}
  <BlogLink
    title={post.title}
    href={`blog/${post.slug}`}
    tags={post.tags}
    date={post.date} />

  <!-- <li><a rel="prefetch" href="blog/{post.slug}">{post.title}</a></li> -->
{/each}
