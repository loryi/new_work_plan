<template lang="html">
  <div class="right-box">
    <Check></Check>
    <!-- <NoGroup></NoGroup> -->
    <NavMenu></NavMenu>
    <!-- <TableCot></TableCot> -->
  </div>
</template>

<script>
import Check from './Check.vue'
import NoGroup from './NoGroup.vue'
import NavMenu from './NavMenu.vue'
export default {
  components: {
    Check,
    NoGroup,
    NavMenu
  }
}
</script>

<style lang="css">
  .right-box{
    position: relative;
    margin-left: 180px;
    height: 100%;
  }
</style>
