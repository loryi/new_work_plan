<template lang="html">
  <div class="left-search clearfix">
    <div class="input-box fl">
      <input type="text">
      <i></i>
    </div>
    <div class="add-btn fr" @click="addFun"></div>
  </div>
</template>

<script>
// import LeftSearch from './LeftSearch.vue'
export default {
  methods: {
    addFun () {
      this.$prompt('请输入组名', '创建群组', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(({ value }) => {
        this.$message({
          type: 'success',
          // message: '你的邮箱是: ' + value
          message: '创建成功'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消创建'
        })
      })
    }
  }
}
</script>

<style lang="css">
  .left-search{
    padding: 10px;
  }
  .left-box .left-search .input-box{
    position: relative;
    width: 124px;
    height: 22px;
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #fafafa;
  }
  .left-search .input-box input{
    padding: 6px;
    border: none;
    outline:none;
    height: 22px;
    background-color: transparent;
    width: 85%;
  }
  .left-search .input-box i{
    position: absolute;
    width: 13px;
    height: 13px;
    right: 4px;
    top: 3px;
    cursor: pointer;
    background: url(../../../assets/images/icon-sear.png) no-repeat 0 0;
  }
  .left-search .input-box i:hover{
    background-position: 0 -13px;
  }
  .left-search .add-btn{
    width: 22px;
    height: 22px;
    border: 1px solid #ccc;
    border-radius: 3px;
    cursor: pointer;
    background: url(../../../assets/images/icon-add-black.png) no-repeat center center #fafafa;
  }
  .left-search .add-btn:hover{
    background-color: #f0f0f0
  }
</style>
