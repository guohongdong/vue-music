<template>
  <div>
    <img width="24" height="24" src="./loading.gif" alt="加载动图">
    <p class>{{title}}</p>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "正在加载..."
    }
  }
};
</script>
<style scoped lang="scss">
@import "../../assets/style/variable";

.loading {
  width: 100%;
  text-align: center;

  .desc {
    line-height: 20px;
    font-size: $font-size-md;
    color: $color-font-content;
  }
}
</style>

