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
  export let categories;
</script>

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
{/each}
