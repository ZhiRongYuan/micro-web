<!--
 * @Author: yuanzhirong
 * @Date: 2023-04-13 17:47:03
 * @LastEditors: yuanzhirong
 * @LastEditTime: 2023-04-14 11:29:02
 * @Description: 
-->
<template>
  <div class="index-container">
    <div class="index-content">
      <NavTitle />
      <IndexAd />
      <CarSwapper />
      <IndexAd />
      <NewsList />
    </div>
  </div>
</template>

<script>
import { main } from '../../utils/global'
import NavTitle from './components/navTitle.vue'
import IndexAd from './components/ad.vue'
import CarSwapper from './components/carSwapper.vue'
import NewsList from './components/newsList.vue'

export default {
  name: 'index',
  components: {
    NavTitle,
    IndexAd,
    CarSwapper,
    NewsList,
  },
  setup() {
    if (main.appInfo) {
      main.appInfo.crumbsState.setCrumbs([])
    }
  },
};
</script>

<style lang="scss">
.index{
  &-container{
    width: 100%;
  }
  &-content{
    width: 1200px;
    margin: 40px auto 0;
  }
}
</style>
