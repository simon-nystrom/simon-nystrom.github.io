<script>
  export let fullWidth;
</script>

<style>
  hr {
    border:none;
    border-bottom: 1px solid #262e40;
    margin: 0;
    margin-top: 10px;
    margin-left: 4px;
    margin-right: 4px;
    transition: all 0.2s ease;
  }

  .full {
    border-bottom: 1px solid #83a0e1;
    margin-left: 0;
    margin-right: 0;
  }

  @media screen and (max-width: 992px) {
    hr {
      margin-left: 0px;
      margin-right: 0px;
    }
  }
</style>

<hr class={fullWidth ? 'full' : null} />
