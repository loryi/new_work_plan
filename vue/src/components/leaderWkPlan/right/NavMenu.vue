<template lang="html">
  <div class="nav-menu">
    <div class="nav-box">
      <el-tabs v-model="activeName" type="card" editable>
        <el-tab-pane :key="item.id" v-for="(item, index) in groupData" :label="item.xzmc" :name="index.toString()">
          <TableCot :PsnListData='psnListData'>
          </TableCot>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import TableCot from './TableCot.vue'
export default {
  components: {
    TableCot
  },
  data () {
    return {
      activeName: '0',
      groupData: [],
      firstGroupId: '',
//      descrData: [],
      psnListData: []
    }
  },
  methods: {
    getFzName: function () {
      const url = '/leaderWkPlan/getFzList'
      this.$axios.get(url).then(
        response => {
          this.groupData = response.data
          this.firstGroupId = response.data[0].id
          this.getFzPerson()
        },
        err => {
          console.log(err)
        }
      )
    },
    getFzPerson: function () {
      const url = '/leaderWkPlan/getFzPerson?xzid=' + this.firstGroupId
      this.$axios.get(url).then(
        response => {
//          this.descrData = response.data.descrData
          this.psnListData = response.data.data
          console.log(response.data.data)
        },
        err => {
          console.log(err)
        }
      )
    }
  },
  created: function () {
    this.getFzName()
  }
}
</script>

<style lang="css">
  .nav-menu .el-tabs__new-tab{
    margin-right: 50px;
    margin-top: 4px;
  }
  .nav-menu .el-tabs--card>.el-tabs__header .el-tabs__item.is-active.is-closable{
    padding: 0 15px;
    height: 30px;
    line-height: 30px;
  }
  .nav-menu .el-tabs__item{
    font-weight: bold;
  }
  .nav-menu .el-tabs__nav-wrap{
    padding: 0 20px;
  }
  .nav-menu .el-tabs__header{
    margin-bottom: 0;
  }
  .nav-menu .el-tabs__content{
    position: absolute;
    overflow: auto;
    width: 100%;
    top: 85px;
    bottom: 0;
    left: 0;
  }
  .nav-menu .el-tabs__content::-webkit-scrollbar {
  	width: 6px;
  }
  /* 滚动槽 */
  .nav-menu .el-tabs__content::-webkit-scrollbar-track {
  	/*-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);    */
  	border-radius: 3px;
  }
  /* 滚动条滑块 */
  .nav-menu .el-tabs__content::-webkit-scrollbar-thumb {
  	border-radius: 10px;
  	background: rgba(0,0,0,0.1);
  	/*-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);*/
  }
  .nav-menu .el-tabs__content::-webkit-scrollbar-thumb:window-inactive {
  	background: rgba(255,0,0,0.4);
  }


</style>
