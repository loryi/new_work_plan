<template lang="html">
  <div class="list-box scroll">
    <div class="list">
      <ListItem v-for="item in list" :partItem="item">
        <p slot="className">{{item.partName}}</p>
      </ListItem>
    </div>
  </div>
</template>

<script>
import ListItem from './ListItem.vue'
export default {
  data () {
    return {
      list: []
    }
  },
  components: {
    ListItem
  },
  created: function () {
    this.getJson()
  },

  methods: {
    getJson: function () {
      const url = '/leaderWkPlan/getList'
      this.$axios.get(url).then(
        response => {
          this.list = response.data
        },
        err => {
          console.log(err)
        }
      )
    }
  }
}
</script>

<style lang="css">
  .list-box{
    position: absolute;
    width: 100%;
    top: 42px;
    bottom: 0;
    overflow: auto;
    background-color: #fff;
  }
</style>
