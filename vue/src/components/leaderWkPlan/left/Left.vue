<template lang="html">
  <div class="left-box fl">
    <LeftSearch></LeftSearch>
    <ListBox></ListBox>
  </div>
</template>

<script>
import LeftSearch from './LeftSearch.vue'
import ListBox from './ListBox.vue'
export default {
  components: {
    LeftSearch,
    ListBox
  }
}
</script>

<style lang="css">
  .left-box{
    position: relative;
    width: 180px;
    height: 100%;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
  }
</style>
