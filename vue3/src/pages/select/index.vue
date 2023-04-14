<!--
 * @Author: yuanzhirong
 * @Date: 2023-04-13 17:47:03
 * @LastEditors: yuanzhirong
 * @LastEditTime: 2023-04-14 11:28:18
 * @Description: 
-->
<template>
  <div class="select-container">
    <div class="select-content">
      <LeftNav />

      <selectDetail />
    </div>
  </div>
</template>

<script>
import LeftNav from './components/leftNav.vue'
import selectDetail from './components/selectDetail.vue'
export default {
  name: 'index',
  components: {
    LeftNav,
    selectDetail,
  },
};
</script>

<style lang="scss">
.select{
  &-container{
    margin-top: 50px;
  }
  &-content{
    width: 1200px;
    margin: 0 auto;
    display: flex;
  }
}
</style>
