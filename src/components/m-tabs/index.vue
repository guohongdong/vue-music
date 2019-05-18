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
@import '../../assets/style//variable.scss';
.tabs {
  background: $color-pane;
  color: $color-font-content;
  display: flex;
  justify-content: space-around;
  &-item {
    font-size: $font-size-lg;
    padding: 10px 0;
    cursor: pointer;
    position: relative;
  }
  .router-link-active {
    color: $color-font-light;
    &::after {
      position: absolute;
      content: '';
      height: 3px;
      width: 100%;
      left: 0;
      bottom: 0;
      background: $color-font-light;
    }
  }
}
</style>
