let express = require('express')
let router = express.Router()

router.post('/init', function (req, res, next) {
  let invoker = req.zd.getInvoker('com.zrar.eip.newworkplan.spi.INewWorkPlanService')
  let method = 'getRqwhList'
  let bo = { week: '', year: '' }
  let arg1 = {$class: 'com.zrar.eip.newworkplan.bo.WNewGzzbRqwhBO', $: bo}
  let arg2 = {$class: 'java.lang.String', $: ''}
  let args = [arg1, arg2]
  invoker.excute(method, args, function (err, data) {
    if (err) {
      console.log(err)
    } else {
      let nums = {
        week: [],
        year: []
      }
      let current = {
        week: req.session.zs
      }
      for (let i = 0; i < data.length; i++) {
        nums.week[i] = data[i].week
        nums.year[i] = data[i].year
        if (nums.week[i] === current.week) {
          current.year = nums.year[i]
        }
      }
      res.send({
        current,
        nums
      })
    }
  })
})

router.post('/previous', function (req, res, next) {
  let invoker = req.zd.getInvoker('com.zrar.eip.newworkplan.spi.INewWorkPlanService')
  let method = 'getRqwhList'
  let bo = req.body
  let arg1 = {$class: 'com.zrar.eip.newworkplan.bo.WNewGzzbRqwhBO', $: bo}
  let arg2 = {$class: 'java.lang.String', $: 'up'}
  let args = [arg1, arg2]
  invoker.excute(method, args, function (err, data) {
    if (err) {
      console.log(err)
    } else {
      let weekNums = {
        week: [],
        year: []
      }
      for (let i = 0; i < data.length; i++) {
        weekNums.week[i] = data[i].week
        weekNums.year[i] = data[i].year
      }
      res.send({
        weekNums
      })
    }
  })
})

router.post('/next', function (req, res, next) {
  let invoker = req.zd.getInvoker('com.zrar.eip.newworkplan.spi.INewWorkPlanService')
  let method = 'getRqwhList'
  let bo = req.body
  let arg1 = {$class: 'com.zrar.eip.newworkplan.bo.WNewGzzbRqwhBO', $: bo}
  let arg2 = {$class: 'java.lang.String', $: 'down'}
  let args = [arg1, arg2]
  invoker.excute(method, args, function (err, data) {
    if (err) {
      console.log(err)
    } else {
      let weekNums = {
        week: [],
        year: []
      }
      for (let i = 0; i < data.length; i++) {
        weekNums.week[i] = data[i].week
        weekNums.year[i] = data[i].year
      }
      res.send({
        weekNums
      })
    }
  })
})

router.post('/getData', function (req, res, next) {
  let invoker = req.zd.getInvoker('com.zrar.eip.newworkplan.spi.INewWorkPlanService')
  let method = 'getWeekWorkPlan'
  let vo = {
    'yhId': req.session.yhid,
    'zs': req.body.num.week,
    'nf': req.body.num.year
  }
  let args = [{
    $class: 'com.zrar.eip.newworkplan.vo.WNewGzzbVO',
    $: vo
  }]
  invoker.excute(method, args, function (err, data) {
    if (err) {
      console.log(err)
    } else {
      let list = data.list
      let weekDatas = {
        ids: [],
        dates: [],
        plans: [],
        status: [],
        notes: []
      }
      for (let i = 0; i < list.length; i++) {
        weekDatas.ids[i] = list[i].id
        switch (i) {
          case 0:
            weekDatas.dates[i] = '周一<br/>' + list[i].rq
            break
          case 1:
            weekDatas.dates[i] = '周二<br/>' + list[i].rq
            break
          case 2:
            weekDatas.dates[i] = '周三<br/>' + list[i].rq
            break
          case 3:
            weekDatas.dates[i] = '周四<br/>' + list[i].rq
            break
          case 4:
            weekDatas.dates[i] = '周五<br/>' + list[i].rq
            break
          case 5:
            weekDatas.dates[i] = '周六<br/>' + list[i].rq
            break
          case 6:
            weekDatas.dates[i] = '周日<br/>' + list[i].rq
            break
        }
        weekDatas.plans[i] = list[i].rwms
        if (!list[i].wcqk) {
          weekDatas.status[i] = '未完成'
        } else {
          weekDatas.status[i] = list[i].wcqk
        }
        weekDatas.notes[i] = list[i].bz
      }
      res.send({
        weekDatas
      })
    }
  })
})

router.post('/save', function (req, res, next) {
  let weekDatas = req.body.weekDatas
  let invoker = req.zd.getInvoker('com.zrar.eip.newworkplan.spi.INewWorkPlanService')
  let method = 'updateRwap'
  let list = []
  for (let i = 0; i < weekDatas.ids.length; i++) {
    list[i] = {
      id: weekDatas.ids[i],
      rwms: weekDatas.plans[i],
      wcqk: weekDatas.status[i],
      bz: weekDatas.notes[i]
    }
  }
  let args = [{
    $class: 'java.util.ArrayList',
    $: list
  }]
  invoker.excute(method, args, function (err, data) {
    if (err) {
      res.send({
        message: err
      })
    } else {
      res.send({
        message: data
      })
    }
  })
})

module.exports = router
