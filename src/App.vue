<template>
  <div id="app">
    <m-header></m-header>
    <m-tabs></m-tabs>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
import MHeader from "./components/m-header";
import MTabs from "./components/m-tabs";
export default {
  components: {
    MHeader,
    MTabs
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss"></style>
