<script>
  export let fullWidth;
</script>

<style>
  hr {
    color: #262e40;
    margin-left: 30px;
    margin-right: 30px;
    transition: all 0.2s ease;
  }

  .full {
    margin-left: 0;
    margin-right: 0;
    color: #83a0e1;
  }
</style>

<hr class={fullWidth ? 'full' : null} />
