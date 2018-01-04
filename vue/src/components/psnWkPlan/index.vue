<template>
  <el-container>
    <el-main>
      <eip-header></eip-header>
      <eip-main></eip-main>
    </el-main>
  </el-container>
</template>

<script>
  import EipHeader from './header'
  import EipMain from './main'

  export default {
    components: {
      EipHeader,
      EipMain
    }
  }
</script>

<style>
  .el-main {
    padding: 0px 5px;
    background-color: #fff;
  }
</style>
