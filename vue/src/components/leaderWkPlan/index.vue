<template lang="html">
  <div class="index">
    <Left></Left>
    <Right></Right>
  </div>
</template>

<script>
import Left from './left/Left.vue'
import Right from './right/Right.vue'

export default {
  components: {
    Left,
    Right
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
