import Vue from 'vue'
import axios from 'axios'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/normaliz.css'
import './assets/css/style.css'

import store from './store'
import router from './router'

Vue.use(elementUI)

Vue.prototype.$axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<router-view />',
  methods: {
    getUrlKey: name => {
      let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
      let r = window.location.search.substr(1).match(reg)
      if (r != null) {
        return unescape(r[2])
      } else {
        return null
      }
    }
  },
  created () {
    let type = this.getUrlKey('type')
    switch (type) {
      case '2':
        this.$router.push({
          path: '/leaderWkPlan'
        })
        break
      default:
        this.$router.push({
          path: '/psnWkPlan'
        })
        break
    }
  }
})
