<script>
  import { onMount } from "svelte";
  import cytoscape from "cytoscape";

  let el;

  onMount(() => {
    let cy = cytoscape({
      container: el, // container to render in
      wheelSensitivity: 0.3,
      elements: [
        // list of graph elements to start with
        {
          // node a
          data: { id: "a" },
        },
        {
          // node b
          data: { id: "b" },
        },
        {
          // edge ab
          data: { id: "ab", source: "a", target: "b" },
        },
      ],

      style: [
        // the stylesheet for the graph
        {
          selector: "node",
          style: {
            "background-color": "#666",
            label: "data(id)",
          },
        },

        {
          selector: "edge",
          style: {
            width: 3,
            "line-color": "#ccc",
            "target-arrow-color": "#ccc",
            "target-arrow-shape": "triangle",
            "curve-style": "bezier",
          },
        },
      ],

      layout: {
        name: "grid",
        rows: 1,
      },
    });
  });
</script>

<div bind:this={el} class="graph" />

<style>
  .graph {
    flex-grow: 1;
    top: 0px;
    left: 0px;
    border: 1px solid black;
    min-width: 100%;
    max-height: 50vh;
  }

  @media only screen and (min-width: 800px) {
    .graph {
      min-width: 50%;
      max-height: 100vh;
    }
  }

</style>
