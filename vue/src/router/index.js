import Vue from 'vue'
import Router from 'vue-router'
import PsnWkPlan from '@/components/psnWkPlan'
import LeaderWkPlan from '@/components/leaderWkPlan'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/psnWkPlan',
    component: PsnWkPlan
  }, {
    path: '/leaderWkPlan',
    component: LeaderWkPlan
  }]
})
