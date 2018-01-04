<template>
  <div class="table-wrap">
    <el-table :data="PsnListData" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-table :data="props.row.list" border style="width: 100%">
            <el-table-column prop="rq" label="日期" width="180"></el-table-column>
            <el-table-column prop="rwms" label="任务描述"></el-table-column>
            <el-table-column prop="wcqk" label="完成情况"></el-table-column>
          </el-table>
        </template>
      </el-table-column>
      <el-table-column label="姓名" prop="yhMc"></el-table-column>
      <el-table-column label="部门" prop="jg"></el-table-column>
      <el-table-column label="查询时间" prop="ksrq"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    props: [
      'PsnListData'
    ],
    data () {
      return {
        i: 0
      }
    }
    // ,
    // methods: {
    //   a ($index) {
    //     this.in = $index
    //     console.log(this.in)
    //   }
    // }
  }
</script>

<style lang="css">
  .el-table thead tr {
    color: #333;
    font-size: 14px;
    background-color: #f7f7f7 !important;
  }

  .el-table .cell {
    text-align: center;
  }

  .el-table__body-wrapper {
    overflow: hidden;
  }

  .el-table__expanded-cell[class*=cell] {
    padding: 10px;
  }

  .one {
    text-align: left !important;
  }
</style>
