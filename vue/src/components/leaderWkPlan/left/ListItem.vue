<template lang="html">
  <div class="list-item">
    <div class="item-box" :class="boxshow ? 'on' : ''" @click.stop="togglebox">
      <i class="arrow"></i>
      <div class="txt">
        <slot name="className"></slot>
      </div>
      <div class="handle-box">
        <i class="revise" @click.stop.self="reviseFun"></i>
        <i class="delete" @click.stop.self="deleteFun"></i>
      </div>
    </div>
    <transition name="fade">
      <ItemDetail :partItemCopy="partItem" v-show="boxshow"></ItemDetail>
    </transition>
  </div>
</template>

<script>
import ItemDetail from './ItemDetail.vue'
export default {
  props: ['partItem'],
  data () {
    return {
      boxshow: false
    }
  },
  components: {
    ItemDetail
  },
  methods: {
    togglebox () {
      this.boxshow = !this.boxshow
    },
    reviseFun () {
      // console.log("点击了修改按钮")
    },
    deleteFun () {
      // console.log("点击了删除按钮")
    }
  }
}
</script>

<style lang="css">
  .list-box .list .list-item{
    position: relative;
    cursor: pointer;
    margin-bottom: 6px;
  }
  .list-box .list .list-item .item-box:hover{
    background-color: #f5f5f5;
  }
  .list-box .list .list-item .item-box.on i.arrow{
    background-position: 0 -7px;
  }
  .list-box .list .list-item .item-box.on:hover i.arrow{
    background-position: 0 -7px;
  }
  .list-box .list .list-item .item-box:hover i.arrow{
    background-position: -7px 0;
  }
  .list-box .list .list-item .item-box:hover .handle-box{
    display: block;
  }
  .list-box .list .list-item i.arrow{
    display: inline-block;
    vertical-align: middle;
    width:  7px;
    height: 7px;
    margin-left: 15px;
    background: url("../../../assets/images/icon-arrow.png") 0 0 no-repeat;
  }
  .list-box .list .list-item .txt{
    display: inline-block;
    vertical-align: middle;
    line-height: 30px;
    font-size: 14px;
    color: #666;
  }
  .list-box .list .list-item .handle-box{
    display: none;
    font-size: 0;
    position: absolute;
    right: 10px;
    top: 9px;
  }
  .list-box .list .list-item .handle-box i{
    display: inline-block;
    vertical-align: middle;
    width: 12px;
    height: 13px;
    margin-left: 10px;
    background-image: url("../../../assets/images/icon-function.png");
  }
  .list-box .list .list-item .handle-box i.revise{
    background-position: 0 0;
  }
  .list-box .list .list-item .item-box .handle-box i.revise:hover{
    background-position: 0 -13px;
  }
  .list-box .list .list-item .handle-box i.delete{
    background-position: -12px 0;
  }
  .list-box .list .list-item .item-box .handle-box i.delete:hover{
    background-position: -12px -13px;
  }
</style>
