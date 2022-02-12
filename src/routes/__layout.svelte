<script>
  import "../app.css";
</script>

<style>

  :global(body) {
    background-color: whitesmoke;
  }

  main {
    background-color: white;
    inset: 6em;
    position: absolute;
    display: grid;
    place-items: center;
  }

</style>

<main class='shadow-md'>
  <div>
    <slot />
  </div>
</main>