import { writable } from "svelte/store";

const initial = {
    elements: [],
    layout: "cola"
}

export const graphStore = writable(initial);

