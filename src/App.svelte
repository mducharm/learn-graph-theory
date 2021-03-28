<script>
	import ScrollableView from "./components/ScrollableView.svelte";
	import Graph from "./components/Graph.svelte";
  </script>
  
  <div class="app">
	<ScrollableView />
	<Graph />
  </div>
  
  <style>
	:global(body) {
	  margin: 0;
	  font-family: Arial, Helvetica, sans-serif;
	}
  
	.app {
	  display: flex;
	  flex-flow: column-reverse nowrap;
	  min-height: 100vh;
	}
  
	@media only screen and (min-width: 800px) {
	  .app {
		flex-flow: row nowrap;
	  }
	}
  
	@keyframes App-logo-pulse {
	  from {
		transform: scale(1);
	  }
	  to {
		transform: scale(1.06);
	  }
	}
  </style>
  