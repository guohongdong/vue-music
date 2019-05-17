<template>
  <div class="tabs">
    <router-link tag="div" class="tabs-item" to="/recommend">
      <span>推荐</span>
    </router-link>
    <router-link tag="div" class="tabs-item" to="/singer">
      <span>歌手</span>
    </router-link>
    <router-link tag="div" class="tabs-item" to="/rank">
      <span>排行</span>
    </router-link>
    <router-link tag="div" class="tabs-item" to="/search">
      <span>搜索</span>
    </router-link>
  </div>
</template>
<style lang="scss" scoped>
@import "../../assets/style//variable.scss";
.tabs {
  background: $color-pane;
  color: $color-font-content;
  display: flex;
  justify-content: space-around;
  &-item {
    font-size: $font-size-lg;
    padding: 10px 0 7px;
    cursor: pointer;
  }
  .router-link-active {
    color: $color-font-light;
    border-bottom: 3px solid $color-font-light;
  }
}
</style>

