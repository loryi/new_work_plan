<template lang="html">
  <ul class="item-detail">
      <li class="clearfix" v-for="item in name" @click="">
          <div class="img-box">
            <!-- <img :src="item.headImg" alt=""> -->
            <img src="../../../assets/images/2.png" alt="">
          </div>
          <div class="name">{{item}}</div>
      </li>
  </ul>

</template>

<script>
export default {
  props: ['partItemCopy'],
  data () {
    return {
      name: this.partItemCopy.person
    }
  },
  methods: {

  }
}
</script>
<style lang="css">
.item-detail li{
  font-size: 0;
  padding: 6px 0;
  color: #666;
}
.item-detail li:hover{
  background-color: #f5f5f5;
  color: #333;
}
.item-detail .img-box{
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  margin-right: 6px;
  margin-left: 24px;
}
.item-detail .img-box img{
  display: block;
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
.item-detail .name{
  display: inline-block;
  vertical-align: middle;
  font-size: 12px;
}
</style>
