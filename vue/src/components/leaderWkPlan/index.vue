<template lang="html">
  <div class="index">
    <Left></Left>
    <Right></Right>
    <!--<PopView></PopView>-->
  </div>
</template>

<script>
import Left from './left/Left.vue'
import Right from './right/Right.vue'
import PopView from './PopView.vue'
export default {
  components: {
    Left,
    Right,
    PopView
  }
}
</script>

<style lang="css">
  .index{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
</style>
