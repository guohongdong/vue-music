<template>
  <div class="singer" ref="singer">
    <m-listview @select="selectSinger" :list="singetList" ref="list" />
    <router-view />
  </div>
</template>
<script>
import MListview from '../../components/m-listview'
import { ERR_OK } from '../../api/config'
import { getSingerList } from '../../api/singer'
import { createSinger } from '../../assets/js/singer'
import { mapMutations } from 'vuex'

const HOT_NAME = '热门'
const HOT_SINGER_LENGTH = 10
export default {
  name: 'singer',
  components: {
    MListview
  },
  data() {
    return {
      singetList: []
    }
  },
  created() {
    this._getSingerList()
  },
  methods: {
    selectSinger(singer) {
      this.$router.push({
        path: `/singer/${singer.id}`
      })
      this.setSinger(singer)
    },
    _getSingerList() {
      getSingerList().then(res => {
        if (ERR_OK == 0) {
          this.singetList = this._normalizeSinger(res.data.list)
        }
      })
    },
    _normalizeSinger(list) {
      let resultList = {
        hot: {
          title: HOT_NAME,
          children: []
        }
      }
      list.forEach((item, index) => {
        if (index < HOT_SINGER_LENGTH) {
          resultList.hot.children.push(
            createSinger({
              id: item.Fsinger_mid,
              name: item.Fsinger_name
            })
          )
        }
        let key = item.Findex
        if (!resultList[key]) {
          resultList[key] = {
            title: key,
            children: []
          }
        }
        resultList[key].children.push(
          createSinger({
            id: item.Fsinger_mid,
            name: item.Fsinger_name
          })
        )
      })

      let hot = []
      let narmal = []
      for (let k in resultList) {
        let v = resultList[k]
        if (v.title.match(/[a-zA-Z]/)) {
          narmal.push(v)
        } else if (v.title == HOT_NAME) {
          hot.push(v)
        }
      }
      narmal.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
      return hot.concat(narmal)
    },
    ...mapMutations({
      setSinger: 'SET_SINGER'
    })
  }
}
</script>
<style lang="scss" scoped>
@import './index';
</style>
