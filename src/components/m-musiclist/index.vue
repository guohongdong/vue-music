<template>
  <div class="music-list">
    <h1>{{ title }}</h1>
    <img :src="avatar" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    avatar: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index';
</style>
