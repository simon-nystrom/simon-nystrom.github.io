<script>
  import { onMount } from "svelte";

  import Footer from "../components/Footer.svelte";
  import Nav from "../components/Nav.svelte";
  export let segment;

  onMount(() => {
    if (!window.copyCode)
      window.copyCode = (el) => {
        let codeElement = el.nextSibling;
        let range = document.createRange();
        range.selectNode(codeElement);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
        el.innerHTML = "Copied!";
        el.style.color = "#32e678";
        el.parentElement.addEventListener(
          "mouseleave",
          () => {
            setTimeout(() => {
              el.innerHTML = "Copy";
              el.style.color = "white";
            }, 200);
          },
          { once: true }
        );
      };
  });
</script>

<style>
  main {
    position: relative;
    max-width: 48em;
    padding: 2em;
    padding-bottom: 4.5em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>

<Footer />
