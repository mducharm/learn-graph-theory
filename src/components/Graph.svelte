<script>
  import { onMount } from "svelte";
  import { graphStore } from "../stores/graph.store";
  import cytoscape from "cytoscape";
  import cola from 'cytoscape-cola';

  cytoscape.use( cola );

  let el;
  let cy;

  onMount(() => {
    cy = cytoscape({
      container: el, // container to render in
      wheelSensitivity: 0.3,
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

    graphStore.subscribe((store) => {
      cy.elements().remove();
      cy.add(store.elements);
      cy.layout({
        name: store.layout
      }).run();
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
