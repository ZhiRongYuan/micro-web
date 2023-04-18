<!--
 * @Author: yuanzhirong
 * @Date: 2023-04-17 16:34:47
 * @LastEditors: yuanzhirong
 * @LastEditTime: 2023-04-17 16:47:18
 * @Description: 
-->
<template>
  <div class="main-footer-container">
    <div class="main-footer-content">
      <div class="main-footer-url">
        <span>选车吗 © 2023 x.gmail.com</span>
        公司地址: 广东省深圳市福田区
      </div>
      <div class="main-footer-phone">
        <span>联系方式: 020-00000000</span>
        <span>粤ICP备999999号</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
};
</script>

<style lang="scss">
.main-footer{
  &-container{
    width: 100%;
    height: 100px;
    background: #F5F5F5;
  }
  &-content{
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &-url{
    font-size: 14px;
    color: #9E9E9E;
    margin-bottom: 10px;

    span{
      font-size: 16px;
      color: #A1A1A1;
    }
  }
  &-phone{
    font-size: 14px;
    color: #9E9E9E;
  }
}
</style>
