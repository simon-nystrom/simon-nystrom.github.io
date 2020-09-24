<script>
  let open = false;
  export let title;

  export let subitems = [1, 2, 3];

  const onClick = () => {
    open = !open;
  };
</script>

<style>
  .container {
    background: #282c34;
    padding: 10px;
    transition: filter 0.2s ease-in-out;
  }

  .container:hover {
    cursor: pointer;
    filter: brightness(120%);
  }

  p {
    font-size: 1.4rem;
    margin: 0;
  }

  .collapsible {
    height: 0;
    overflow: hidden;
    transition: height 0.4s ease;
  }

  .open {
    height: var(--collapsible-height);
    transition: height 0.4s ease;
  }
</style>

<div class="container" on:click={onClick}>
  <p>{title}</p>
  <div
    class={open ? 'open collapsible' : 'collapsible'}
    style="--collapsible-height: {subitems.length * 40}px">
    <slot />
  </div>
</div>
