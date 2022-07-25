<template>
  <div id="app" class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0 32px;
}
</style>
