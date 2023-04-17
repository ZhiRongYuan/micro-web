<!--
 * @Author: yuanzhirong
 * @Date: 2023-04-13 16:00:57
 * @LastEditors: yuanzhirong
 * @LastEditTime: 2023-04-17 10:37:36
 * @Description: 
-->
<template>
  <div class="car-list-container">
    <div
      v-for="(item, index) in carList"
      class="car-list-item"
      :key="index"
    >
      <img :src="item.img" alt="">
      {{ item.name }}
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
export default {
  name: 'carList',
  data () {
    return {
      carList: [],
    }
  },
  methods: {
    async getCarList() {
      const res = await axios.get('/vue2/car/list?a=1&b=2')
      this.carList = res.data
    }
  },
  mounted() {
    this.getCarList()
  }
};
</script>

<style lang="scss">
.car-list{
  &-container{
    width: 100%;
    height: 153px;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;

  }
  &-item{
    width: 128px;
    margin: 0 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
    color: #333333;

    img{
      width: 128px;
      height: 96px;
    }
  }
}
</style>
