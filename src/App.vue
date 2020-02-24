<template>
  <div id="app">
    <top />
    <index />
  </div>
</template>

<script>
import top from '@/components/top';
import index from '@/components/index';
export default {
  name: 'app',
  components: {
    top,
    index
  }
};
</script>

<style lang="scss">
#app {
  height: 100%;
  .top-container {
    height: 60px;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
  }
  .index-container {
    height: 100%;
    padding-top: 60px;
  }
}
</style>
