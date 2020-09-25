<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Tag from "../../components/design/tag/Tag.svelte";

  export let post;
</script>

<style>
  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .content :global(hr) {
    color: #262e40;
    margin: 30px;
  }

  .content :global(pre) {
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 4px;
    overflow-x: auto;
  }

  .content :global(pre) :global(code) {
    padding: 0;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
  }

  .meta {
    padding: 0.8em;
    padding-left: 0;
    display: flex;
    align-items: center;
  }

  .gray {
    color: #85858c;
  }

  h1 {
    font-size: 2.4em;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>
<div class="meta">
  <h5 class="gray">{post.date}</h5>
  <div class="gray">・</div>
  <div class="tags">
    {#each post.tags as tag}
      <Tag title={tag} />
    {/each}
  </div>
</div>
<div class="content">
  {@html post.html}
</div>
