import { writable } from "svelte/store";

let initialGraph = [
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
  ];

const initial = {
    elements: initialGraph,
    layout: "circle"
}

export const graphStore = writable(initial);

