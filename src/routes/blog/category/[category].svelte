<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`blog/category/${params.category}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { category: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let category;
</script>

<svelte:head>
  <title>{category}</title>
</svelte:head>

<h1>{category}</h1>

<div class="content">
  {@html category}
</div>
