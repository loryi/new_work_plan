import axios from 'axios'
import { Message } from 'element-ui'

export default {
  namespaced: true,
  state: {
    num: {
      week: '',
      year: ''
    },
    weekDatas: {
      ids: [],
      dates: [],
      plans: [],
      status: [],
      notes: []
    },
    editable: true
  },
  mutations: {
    updataNum (state, payload) {
      state.num = payload
      axios.post('/psnWkPlan/getData', {
        num: state.num
      }).then(res => {
        state.weekDatas = res.data.weekDatas
      }).catch(err => {
        console.log(err)
      })
    },
    save (state) {
      axios.post('/psnWkPlan/save', {
        weekDatas: state.weekDatas
      }).then(res => {
        Message.success({
          message: res.data.message,
          showClose: true
        })
      }).catch(err => {
        Message.error({
          message: err,
          showClose: true
        })
      })
    }
  }
}
