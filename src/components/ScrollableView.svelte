<script>
  import { onMount, onDestroy } from "svelte";
  import { sections } from "../content";
  import { graphElements } from "../stores/graph.store";


  let observer = new IntersectionObserver(
    function (entries) {
      if (entries[0].isIntersecting === true) {
        let idx = entries[0].target.id.split("_")[1];
        console.log(idx);
        let section = sections[idx];
        let graph = section.graph;

        graphElements.set(graph);
      }
    },
    { threshold: [0.8] }
  );

  onMount(() => {
    for (let section of sections) {
      observer.observe(section.el);
    }
  });

  onDestroy(() => {
    observer.disconnect();
  });
</script>

<div class="container main">
  <section class="hero is-medium is-link">
    <div class="hero-body">
      <p class="title">Graph Theory</p>
      <p class="subtitle">A visual introduction</p>
    </div>
  </section>

  {#each sections as section, i}
    <section class="section content" bind:this={section.el} id="section_{i}">
      <h2 class="subtitle">
        {section.title}
      </h2>
      <p>
        {section.contents}
      </p>
    </section>
  {/each}
</div>

<style>
  .main {
    flex-grow: 1;
    min-width: 100%;
    max-height: 50vh;
    overflow-y: auto;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  .main::-webkit-scrollbar {
    display: none;
  }

  .section {
    min-height: 50vh;
  }

  @media screen and (min-width: 800px) {
    .main {
      min-width: 50%;
      max-height: 100vh;
      overflow-y: auto;
    }

    .section {
      min-height: 100vh;
    }
  }
</style>
