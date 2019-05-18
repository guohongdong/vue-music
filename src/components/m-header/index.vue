<template>
  <div class="m-header">
    <div class="m-header-logo" />
    <h1 class="m-header-name">D_DMusic</h1>
  </div>
</template>
<style lang="scss" scoped>
@import '../../assets/style/variable.scss';
.m-header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $color-font-content;
  background: $color-pane;
  padding: 10px 0;
  &-logo {
    width: 30px;
    height: 30px;
    background: url('../../assets/images/logo.png') no-repeat left top;
    background-size: cover;
    margin-right: 10px;
  }
}
</style>
