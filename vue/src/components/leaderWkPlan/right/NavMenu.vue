<template lang="html">
  <div class="nav-menu">
    <div class="nav-box">
      <el-button size="small" style="right: 20px" @click="createGroup">
        创建新组
      </el-button>
      <el-button size="small" style="right: 110px" @click="addMember">
        添加组员
      </el-button>
      <el-tabs v-model="activeName" type="card" closable @tab-remove="deleteGroup">
        <el-tab-pane @tab-add="addTab()" :key="item.id" v-for="(item, index) in groupData" :label="item.xzmc" :name="item.name">
          <div class="table-wrap">
            <el-table :index="index" :data="allData[index]" style="width: 100%">
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
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: '1',
      groupData: [],
      allData: [],
      tabIndex: 0,
      newTabName: ''
    }
  },
  methods: {
    getFzName: function () {
      const url = '/leaderWkPlan/getFzList'
      this.$axios.get(url).then(
        response => {
          this.groupData = response.data
          this.tabIndex = this.groupData.length
          // console.log(this.groupData)
          for (let i = 0; i < this.groupData.length; i++) {
            // console.log(this.groupData[i].id)
            this.getFzPerson(this.groupData[i].id)
          }
        },
        err => {
          console.log(err)
        }
      )
    },
    getFzPerson: function (id) {
      const url = '/leaderWkPlan/getFzPerson?xzid=' + id
      this.$axios.get(url).then(
        response => {
          this.allData.push(response.data.data)
        },
        err => {
          console.log(err)
        }
      )
    },
    // 创建小组
    createGroup (targetName) {
      // 输入小组名弹框
      this.$prompt('请输入组名', '创建群组', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(({ value }) => {
        this.addTab(targetName, value)
        this.$axios.post('/leaderWkPlan/addGroup', {
          xzmc: value,
          nameNum: this.newTabName
        }).then(
          response => {
            this.$message({
              type: 'success',
              // response.data = '保存成功'
              message: response.data
            })
          }
        )
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消创建'
        })
      })
    },
    addTab (targetName, value) {
      this.newTabName = ++this.tabIndex + ''
      this.groupData.push({
        xzmc: value,
        name: this.newTabName
      })
      this.activeName = this.newTabName
    },
    // 删除小组
    deleteGroup (targetName) {
      // 确认删除弹框
      this.$confirm('此操作将删除该小组, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.removeTab(targetName)
        const url = '/leaderWkPlan/deleteGroup?fzid=' + this.groupData[parseInt(targetName)].id
        this.$axios.get(url).then(
          response => {
            console.log(response.data)
            this.$message({
              type: 'success',
              message: response.data
              // message: '删除成功!'
            })
          },
          err => {
            console.log(err)
          }
        )
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    removeTab (targetName) {
      let tabs = this.groupData
      let activeName = this.activeName
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }
      this.activeName = activeName
      this.groupData = tabs.filter(tab => tab.name !== targetName)
    },
    // 添加组员
    addMember () {

    }
  },
  created: function () {
    this.getFzName()
  }
}
</script>

<style lang="css">
  .nav-menu .nav-box .el-button{
    position: absolute;
    top: 6px;
    z-index: 99;
  }
  .nav-menu .el-tabs__new-tab{
    margin-right: 20px;
    margin-top: 8px;
  }
  .nav-menu .el-tabs--card>.el-tabs__header .el-tabs__item.is-active.is-closable{
    padding: 0 15px;
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
  	border-radius: 3px;
  }
  /* 滚动条滑块 */
  .nav-menu .el-tabs__content::-webkit-scrollbar-thumb {
  	border-radius: 10px;
  	background: rgba(0,0,0,0.1);
  }
  .nav-menu .el-tabs__content::-webkit-scrollbar-thumb:window-inactive {
  	background: rgba(255,0,0,0.4);
  }

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

  [class*=" el-icon-"], [class^=el-icon-]{
    vertical-align: 1px;
  }


</style>
