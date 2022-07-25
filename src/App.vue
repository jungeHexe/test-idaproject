<template>
  <div id="app">
      <cards/>
  </div>
</template>

<script>
import Cards from "@/components/Cards";

export default {
  name: 'App',
  components: {Cards}
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0 32px;
}
</style>
