<script>
  export let text;
</script>

<style>
  .container {
    display: flex;
    align-items: center;
  }

  h3 {
    font-size: 1.4em;
  }

  .inline-divide {
    border-bottom: 1px solid #262e40;
    margin-left: 0.6em;
    margin-right: 6px;
    flex: 1;
    margin-top: 4px;
  }

  @media screen and (max-width: 992px) {
    .inline-divide {
      /* margin-left: 1em; */
      margin-right: 0;
    }
  }
</style>

<div class="container">
  <h3>{text}</h3>
  <div class="inline-divide" />
</div>
