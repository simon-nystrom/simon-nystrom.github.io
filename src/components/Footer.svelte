<script>
  import Icon from "fa-svelte";

  import { faLinkedinIn, faGithub } from "@fortawesome/fontawesome-free-brands";
  import { faEnvelope } from "@fortawesome/fontawesome-free-regular";
</script>

<style>
  footer {
    max-width: 48em;
    padding-left: 2em;
    padding-right: 2em;
    padding-bottom: 10px;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .copyright {
    font-size: 0.7em;
  }
  .social {
    display: flex;
  }

  :global(a.icon):not(:last-child) {
    margin-right: 14px;
  }

  :global(a.icon) {
    transition: color 0.2s ease;
    color: white;
  }

  :global(a.icon):hover {
    cursor: pointer;
    color: #83a0e1;
  }
</style>

<footer>
  <div class="copyright">Simon Nyström © {new Date().getFullYear()}</div>

  <div class="social">
    <a
      class="icon"
      target="_blank"
      rel="noopener"
      href="https://www.linkedin.com/in/simon-nystr%C3%B6m-192b12a5/">
      <Icon icon={faLinkedinIn} />
    </a>
    <a
      class="icon"
      target="_blank"
      rel="noopener"
      href="https://github.com/simon-nystrom/">
      <Icon icon={faGithub} class="icon" />
    </a>
    <a
      class="icon"
      href="mailto:simon.nystrom90@gmail.com"
      target="_blank"
      rel="noopener">
      <Icon icon={faEnvelope} class="icon" />
    </a>
  </div>
</footer>
