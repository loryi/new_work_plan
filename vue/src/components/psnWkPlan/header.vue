<template>
  <el-row type="flex" class="row-bg" justify="space-between" style="margin: 5px 0px;">
    <el-col :span="22">
      <el-button type="primary" icon="el-icon-arrow-left" size="mini" @click="previous" />
      <el-radio-group v-model="radio" size="mini">
        <el-radio-button v-for="i in 9" :label="nums.week[i - 1]"/>
      </el-radio-group>
      <el-button type="primary" icon="el-icon-arrow-right" size="mini"
                 :disabled="!btnNext" @click="next" />
    </el-col>
    <el-col :span="2">
      <el-button size="mini" type="primary" style="width: 100%;" @click="save"
                 :disabled="!$store.state.PsnWkPlan.editable">保存</el-button>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data () {
      return {
        radio: '',
        nums: {
          week: [],
          year: []
        },
        current: {
          week: '',
          year: ''
        },
        editable: {
          week: [],
          year: []
        },
        btnNext: false
      }
    },
    methods: {
      previous () {
        this.$axios.post('/psnWkPlan/previous', {
          week: this.nums.week[0],
          year: this.nums.year[0]
        }).then(res => {
          this.nums = res.data.weekNums
          this.btnNext = true
          for (let i = 0; i < this.nums.week.length; i++) {
            if (this.$store.state.PsnWkPlan.num.week === this.nums.week[i] &&
              this.$store.state.PsnWkPlan.num.year === this.nums.year[i]) {
              this.radio = this.nums.week[i]
              break
            } else {
              this.radio = ''
            }
          }
        })
      },
      next () {
        this.$axios.post('/psnWkPlan/next', {
          week: this.nums.week[8],
          year: this.nums.year[8]
        }).then(res => {
          this.nums = res.data.weekNums
          if (this.nums.week[7] === this.current.week &&
            this.nums.year[7] === this.current.year) {
            this.btnNext = false
          }
          for (let i = 0; i < this.nums.week.length; i++) {
            if (this.$store.state.PsnWkPlan.num.week === this.nums.week[i] &&
              this.$store.state.PsnWkPlan.num.year === this.nums.year[i]) {
              this.radio = this.nums.week[i]
              break
            } else {
              this.radio = ''
            }
          }
        })
      },
      save () {
        this.$store.commit('PsnWkPlan/save')
      }
    },
    created () {
      this.$axios.post('/psnWkPlan/init').then(res => {
        this.nums = res.data.nums
        this.current = res.data.current
        this.radio = this.current.week
        for (let i = 0; i < 3; i++) {
          this.editable.week[i] = this.nums.week[i + 6]
          this.editable.year[i] = this.nums.year[i + 6]
        }
      }).catch(err => {
        console.log(err)
      })
    },
    watch: {
      radio (nVal, oVal) {
        if (nVal !== '') {
          for (let i = 0; i < 9; i++) {
            if (this.nums.week[i] === nVal) {
              this.$store.commit('PsnWkPlan/updataNum', {
                week: nVal,
                year: this.nums.year[i]
              })
              let x = false
              for (let i = 0; i < 3; i++) {
                if (this.$store.state.PsnWkPlan.num.week === this.editable.week[i] &&
                  this.$store.state.PsnWkPlan.num.year === this.editable.year[i]) {
                  x = true
                }
              }
              if (x) {
                this.$store.state.PsnWkPlan.editable = true
              } else {
                this.$store.state.PsnWkPlan.editable = false
              }
              break
            }
          }
        }
      }
    }
  }
</script>
