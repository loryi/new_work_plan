<template>
  <table width="100%" border="1" bordercolor="#409EFF" style="border-collapse:collapse;">
    <tr>
      <th width="110">日期</th>
      <th>工作计划</th>
      <th width="220">完成情况</th>
      <th width="20%">备注</th>
    </tr>
    <tr v-for="i in 7" style="font-size: 14px;">
      <td style="text-align: center;" v-html="$store.state.PsnWkPlan.weekDatas.dates[i - 1]"></td>
      <td>
        <el-input
          type="textarea"
          :row="2"
          placeholder="请输入内容"
          v-model="$store.state.PsnWkPlan.weekDatas.plans[i - 1]"
          resize="none"
          :disabled="!$store.state.PsnWkPlan.editable"
          :maxlength="400"/>
      </td>
      <td style="text-align: center;">
        <el-radio-group v-model="$store.state.PsnWkPlan.weekDatas.status[i - 1]" size="mini" :disabled="!$store.state.PsnWkPlan.editable">
          <el-radio-button label="未完成"></el-radio-button>
          <el-radio-button label="部分完成"></el-radio-button>
          <el-radio-button label="完成"></el-radio-button>
        </el-radio-group>
      </td>
      <td>
        <el-input
          type="textarea"
          :row="2"
          placeholder="请输入内容"
          v-model="$store.state.PsnWkPlan.weekDatas.notes[i - 1]"
          resize="none"
          :disabled="!$store.state.PsnWkPlan.editable"
          :maxlength="400"/>
      </td>
    </tr>
  </table>
</template>

<script>

</script>
