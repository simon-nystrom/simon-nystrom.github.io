<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog/${params.slug}.json`)
      .then((r) => r.json())
      .then((d) => ({
        post: d,
      }));
  }
</script>

<script>
  import Tag from "../../components/design/tag/Tag.svelte";
  import Meta from "../../components/Meta.svelte";

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
    margin-top: 20px;
    margin-bottom: 20px;
    border: 1px solid #282c34;
    transition: border 0.2s ease, filter 0.2s ease;
    position: relative;
  }

  .content :global(pre:hover) {
    filter: brightness(110%);
    border: 1px solid #d19a66;
  }

  .content :global(pre:hover) :global(.copy-me) {
    opacity: 1;
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

<Meta metadata={{ title: post.title, description: post.summary }} />

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
