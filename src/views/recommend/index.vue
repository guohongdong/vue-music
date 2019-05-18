<template>
  <div class="recommend">
    <m-scroll ref="scroll" class="recommend-content" :data="discList">
      <div>
        <div class="sidler-wrapper" v-if="recommendList.length > 0">
          <m-slider>
            <div v-for="item in recommendList" :key="item.id">
              <a :href="item.linkUrl">
                <img @load="loadImage" :src="item.picUrl" />
              </a>
            </div>
          </m-slider>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li v-for="item in discList" class="item" :key="item.dissid">
              <div class="icon">
                <img width="60" height="60" v-lazy="item.imgurl" />
              </div>
              <div class="text">
                <h2 class="name" v-html="item.creator.name"></h2>
                <p class="desc" v-html="item.dissname"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="loading-container" v-show="!discList.length">
        <m-loading />
      </div>
    </m-scroll>
  </div>
</template>
<script>
import { getRecommend, getDiscList } from '../../api/recommend'
import MSlider from '../../components/m-slider/index'
import MScroll from '../../components/m-scroll/index'
import MLoading from '../../components/m-loading/index'
export default {
  components: {
    MSlider,
    MScroll,
    MLoading
  },
  data() {
    return {
      recommendList: [],
      discList: []
    }
  },
  created() {
    this._getRecommend()
    this._getDiscList()
  },
  methods: {
    loadImage() {
      if (!this.checkloaded) {
        this.checkloaded = true
        this.$refs.scroll.refresh()
      }
    },
    _getRecommend() {
      getRecommend().then(res => {
        if (res.code == 0) {
          this.recommendList = res.data.slider
        }
      })
    },
    _getDiscList() {
      getDiscList().then(res => {
        if (res.code == 0) {
          this.discList = res.data.list
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/style/variable';
.recommend {
  position: fixed;
  width: 100%;
  top: 86px;
  bottom: 0;

  .recommend-content {
    height: 100%;
    overflow: hidden;

    .slider-wrapper {
      position: relative;
      width: 100%;
      overflow: hidden;
    }

    .recommend-list {
      .list-title {
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: $font-size-md;
        color: $color-font-light;
      }

      .item {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        padding: 0 20px 20px 20px;

        .icon {
          flex: 0 0 60px;
          width: 60px;
          padding-right: 20px;
        }

        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          line-height: 20px;
          overflow: hidden;
          font-size: $font-size-md;

          .name {
            margin-bottom: 10px;
            color: $color-font-title;
          }

          .desc {
            color: $color-font-content;
          }
        }
      }
    }

    .loading-container {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
