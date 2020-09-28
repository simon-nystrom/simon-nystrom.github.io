<script>
  import Divider from "../design/Divider.svelte";
  import Tag from "../design/tag/Tag.svelte";

  export let href;
  export let title;
  export let tags;
  export let date;

  let isHovered = false;
  const onMouseEnter = () => {
    isHovered = true;
  };
  const onMouseExit = () => {
    isHovered = false;
  };
</script>

<style>
  a {
    text-decoration: none;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 4px;
    padding-top: 4px;
  }

  .tags {
    display: flex;
  }

  .meta {
    /* display: flex; */
    display: flex;
    align-items: center;
  }
  .date {
    font-size: 0.7em;
    margin-left: 6px;
  }

  h4 {
    color: #83a0e1;
  }

  @media screen and (max-width: 992px) {
    .meta {
      display: none;
    }
    .tags {
      flex-direction: column;
    }
  }
</style>

<a {href} rel="prefetch" on:mouseover={onMouseEnter} on:mouseout={onMouseExit}>
  <div class="container">
    <h4>{title}</h4>
    <div class="meta">
      <div class="tags">
        {#each tags.filter((_, i) => i < 2) as tag}
          <Tag title={tag} />
        {/each}
        {#if tags.length > 2}
          <Tag title="..." />
        {/if}
      </div>
      <p class="date">{date}</p>
    </div>
  </div>
  <Divider fullWidth={isHovered} />
</a>
