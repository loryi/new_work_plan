<template lang="html">
  <div class="pop-wrap">
    <div class="pop-box">
      <el-transfer
        filterable
        :titles="['所有成员', '小组成员']"
        :filter-method="filterMethod"
        filter-placeholder="请输入姓名拼音"
        v-model="value2"
        :data="data2">
        <el-button @click="" class="transfer-footer" slot="right-footer" size="small">取消</el-button>
        <el-button class="transfer-footer" slot="right-footer" size="small">确认</el-button>
      </el-transfer>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    const generateData2 = _ => {
      const data = []
      const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都']
      cities.forEach((city, index) => {
        data.push({
          label: city,
          key: index
        })
      })
      return data
    }
    return {
      data2: generateData2(),
      value2: [],
      filterMethod (query, item) {
        return item.label.indexOf(query) > -1
      }
    }
  }

}
</script>

<style lang="css">
  .el-transfer-panel .el-transfer-panel__footer{
    text-align: center;
  }
  .pop-wrap{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.4);
    vertical-align: middle;
  }
  .pop-wrap .el-transfer{
    width: 500px;
    margin: 50px auto 0 auto;

  }
  .pop-wrap .pop-box{
    position: absolute;
    left: 50%;
    margin-left: -300px;
    top: 50%;
    margin-top: -200px;
    width: 600px;
    height: 400px;
    border-radius: 5px;
    background-color: #fff;
  }
</style>
