<template lang="html">
  <div class="no-grounp-wrap">
    <div class="no-grounp">
      <img src="../../../assets/images/no-img.png" alt="">
      <p>您还没有创建任何关注小组哦~</p>
      <div class="create-btn">
        <i></i>创建新组
      </div>
    </div>
    <div class="no-div" @click="addFun"></div>
  </div>


</template>

<script>
export default {
  methods: {
    addFun () {
      this.$prompt('请输入组名', '创建群组', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
        // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        // inputErrorMessage: '邮箱格式不正确'
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
  .no-grounp-wrap{
    position: absolute;
    top: 45px;
    bottom: 0;
    width: 100%;
    text-align: center;
  }
  .no-grounp{
    display: inline-block;
    vertical-align: middle;
  }
  .no-grounp img{
    display: block;
    width: 273px;
    height: 258px;
  }
  .no-grounp p{
    font-size: 14px;
    color: #666;
    text-align: center;
    margin-top: 20px;
  }
  .no-grounp .create-btn{
    width: 120px;
    height: 34px;
    border-radius: 3px;
    background-color: #24a7ff;
    margin: 14px auto 0 auto;
    text-align: center;
    color: #fff;
    font-size: 14px;
    line-height: 34px;
    cursor: pointer;
  }
  .no-grounp .create-btn:hover{
    background-color: #239ef0;
  }
  .no-grounp .create-btn i{
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 6px;
    background: url("../../../assets/images/icon-add-white.png");
  }
  .no-div{
    height: 100%;
    display: inline-block;
    vertical-align: middle;
  }
</style>
