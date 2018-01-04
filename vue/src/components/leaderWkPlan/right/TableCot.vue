<template lang="html">
  <div class="table-wrap">
    <el-table
       :data="personListData"
       style="width: 100%">
       <el-table-column type="expand">
         <template slot-scope="props">
           <el-table
             :data="personListData"
             border
             style="width: 100%">
             <el-table-column
               prop="date"
               label="日期"
               width="180">
             </el-table-column>
             <el-table-column
               prop="description"
               label="任务描述"
               >
             </el-table-column>
           </el-table>
         </template>
       </el-table-column>
       <el-table-column
         label="姓名"
         prop="name">
       </el-table-column>
       <el-table-column
         label="部门"
         prop="partName">
       </el-table-column>
       <el-table-column
         label="查询时间"
         prop="checkTime">
       </el-table-column>
     </el-table>
  </div>
</template>

<script>
export default {
  props: [
    'PsnData'
  ],
  data () {
    return {
      personListData:
      [
        {
          id: '12987122',
          name: '周昌树',
          partName: '公共平台部',
          groupName: '设计',
          checkTime: '01.05-01.11',
          date: '2016-05-02',
          description: '上海市普陀区金沙江路 1517 弄1'
        }, {
          id: '12987123',
          name: '殷胜浩',
          partName: '公共平台部',
          groupName: '前端开发',
          checkTime: '01.05-01.11',
          date: '2016-05-02',
          description: '上海市普陀区金沙江路 1517 弄2'
        }, {
          id: '12987125',
          name: '陈程',
          partName: '公共平台部',
          groupName: '前端开发',
          checkTime: '01.05-01.11',
          date: '2016-05-02',
          description: '上海市普陀区金沙江路 1517 弄3'
        }, {
          id: '12987126',
          name: '许朝个',
          partName: '公共平台部',
          groupName: '设计',
          checkTime: '01.05-01.11',
          date: '2016-05-02',
          description: '上海市普陀区金沙江路 1517 弄4'
        }, {
          id: '12987127',
          name: '陈小凤',
          partName: '公共平台部',
          groupName: '设计',
          checkTime: '01.05-01.11',
          date: '2016-05-02',
          description: '上海市普陀区金沙江路 1517 弄5'
        }
      ]
    }
  }
}
</script>

<style lang="css">
  .el-table thead tr{
    color: #333;
    font-size: 14px;
    background-color: #f7f7f7 !important;
  }
  .el-table .cell{
    text-align: center;
  }
  .el-table__body-wrapper{
    overflow: hidden;
  }
  .el-table__expanded-cell[class*=cell]{
    padding: 10px;
  }
  .one{
    text-align: left !important;
  }
</style>
