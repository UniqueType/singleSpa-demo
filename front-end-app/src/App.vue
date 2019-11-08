<template>
  <div id="contract-app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'app2',
    components: {}
}
</script>

<style scoped lang="css">
* {
    padding: 0;
    margin: 0;
    list-style: none;
}
#contract-app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
