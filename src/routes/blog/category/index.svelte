<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog/category/category.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { categories: [posts] };
      });
  }
</script>

<script>
  import Collapsible from "../../../components/Collapsible.svelte";

  export let categories;
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h2>Blog / Categories</h2>

{#each categories as category}
  <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
  <li><a rel="prefetch" href="blog/category/{category}">{category}</a></li>
  <Collapsible title={category}>Woop</Collapsible>
{/each}
