<script>
  import "../app.css";
</script>

<style>

  :global(body) {
    background-color: whitesmoke;
  }

  main {
    background-color: white;
    inset: 1.5em;
    position: absolute;
    display: grid;
    place-items: center;
  }

  @media (min-width: 800px) {

    main {
      inset: 6em;
    }
  }

</style>

<main class='shadow-md'>
  <div>
    <slot />
  </div>
</main>