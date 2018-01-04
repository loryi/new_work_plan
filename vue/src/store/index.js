import Vue from 'vue'
import Vuex from 'vuex'

import PsnWkPlan from '@/store/modules/psn_wk_plan'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    PsnWkPlan
  }
})
