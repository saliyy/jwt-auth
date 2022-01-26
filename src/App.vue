<template>
  <div id="app">
    <!-- <router-view /> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    console.dir(this.$store.state.user)
  }
}
</script>

<style lang="scss">
</style>
