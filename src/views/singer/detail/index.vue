<template>
  <transition name="slide">
    <m-musiclist :title="name" :avatar="avatar"></m-musiclist>
  </transition>
</template>

<script>
import MMusiclist from '../../../components/m-musiclist'
import { mapGetters } from 'vuex'
export default {
  components: {
    MMusiclist
  },
  created() {},
  computed: {
    name() {
      // console.log(this.singer.name)
      return this.singer.name
    },
    avatar() {
      return this.singer.avatar
    },
    ...mapGetters(['singer'])
  }
}
</script>

<style scoped lang="scss">
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}

.slide-enter,
.slide-leave-to {
  transform: translate3d(100%, 0, 0);
}
</style>
