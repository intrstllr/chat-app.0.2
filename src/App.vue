<template>
  <links/>
  <RouterView />
</template>

<script>
import links from "./components/links.vue";
export default {
  components: {
      links,
  },
};
</script>

<style scoped>
* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: sans-serif;
    font-size: 36px;
}
body {
    margin: 0%;
    padding: 0%;
    height: 100%;
}
#app {
    width: 100%;
}
</style>