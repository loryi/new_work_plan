<template lang="html">
  <div class="check-box">
    <div class="none-div"></div>
    <div style="display:inline-block;vertical-align: center;">
      <span class="demonstration">周数</span>
      <el-date-picker
        v-model="value3"
        type="week"
        format="yyyy年 第 WW 周"
        placeholder="选择周">
      </el-date-picker>
    </div>
    <div class="check-btn">查询</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value3: ''
    }
  }
}
</script>

<style lang="css">
  .el-input__inner{
    height: 26px !important;
    line-height: 26px !important;
  }
  .el-input__icon{
    line-height: 26px !important;
  }
  .none-div{
    height: 44px;
  }
  .demonstration{
    margin: 0 10px;
  }
  .check-box{
    min-width: 500px;
    height: 44px;
    padding: 0 10px;
    /*border-bottom: 1px solid #ddd;*/
  }
  .check-box .check-btn{
    display: inline-block;
    vertical-align: -1px;
    width: 60px;
    height: 24px;
    border-radius: 3px;
    color: #fff;
    background-color: #24a7ff;
    text-align: center;
    line-height: 24px;
    font-size: 12px;
    margin-left: 10px;
    cursor: pointer;
  }
  .check-box .check-btn:hover{
    background-color: #239ef0;
  }
</style>
