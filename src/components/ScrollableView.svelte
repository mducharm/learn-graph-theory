<script>
  import { onMount, onDestroy } from "svelte";
  import { sections } from "../content";
  import { graphStore } from "../stores/graph.store";

  let observer = new IntersectionObserver(
    function (entries) {
      if (entries[0].isIntersecting === true) {
        let idx = entries[0].target.id.split("_")[1];
        let section = sections[idx];
        // console.log(idx);

        graphStore.set({
          layout: section.layout,
          elements: section.graph,
        });
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

<div class="main">
  {#each sections as section, i}
    {#if i === 0}
      <section
        class="hero is-large is-info"
        bind:this={section.el}
        id="section_{i}"
      >
        <div class="hero-body">
          <h1 class="title">Graph Theory</h1>
          <p class="subtitle">A visual introduction</p>
        </div>
      </section>
    {:else}
      <section
        class="section is-medium content"
        bind:this={section.el}
        id="section_{i}"
      >
        <div class="container">
          <h1 class="subtitle">
            {section.title ?? ""}
          </h1>
          <p>
            {section.contents}
          </p>
        </div>
      </section>
    {/if}
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

  .section,
  .hero {
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
