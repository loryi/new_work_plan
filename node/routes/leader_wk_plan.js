var express = require('express')
var router = express.Router()

// 获取左侧全部分组信息
router.get('/getList', function (req, res, next) {
  let invoker = req.zd.getInvoker('com.zrar.eip.newworkplan.spi.INewGzzbFzService')
  let method = 'findAllYh'
  let args = []
  invoker.excute(method, args, function (err, data) {
    if (err) {
      console.log(err)
    } else {
      let part = []
      for (let i = 0; i < data.length; i++) {
        if (data[i].PID) {
          for (let j = 0; j < part.length; j++) {
            if (part[j].pid === data[i].PID) {
              part[j].person.push(data[i].NAME)
            }
          }
        } else {
          part.push({
            'partName': data[i].NAME,
            'pid': data[i].ID,
            'person': []
          })
        }
      }
      // console.log(part)
      res.send(part)
    }
  })
})

// 获取当前用户分组信息
router.get('/getFzList', function (req, res, next) {
  let invoker = req.zd.getInvoker('com.zrar.eip.newworkplan.spi.INewGzzbFzService')
  let method = 'getFzList'
  let args = [{$class: 'java.lang.String', $: '6080'}]
  invoker.excute(method, args, function (err, data) {
    if (err) {
      console.log(err)
    } else {
      console.log(data)
      res.send(data)
    }
  })
})

// 获取当前用户小组下的成员
router.get('/getFzPerson', function (req, res, next) {
  let xzid = req.query.xzid
  let invoker = req.zd.getInvoker('com.zrar.eip.newworkplan.spi.INewWorkPlanService')
  let method = 'getAllWorkPlanInFz'
  let arg1 = {$class: 'java.lang.String', $: xzid}
  let arg2 = {$class: 'java.lang.String', $: ''}
  let arg3 = {$class: 'java.lang.String', $: ''}
  let args = [arg1, arg2, arg3]
  invoker.excute(method, args, function (err, data) {
    if (err) {
      console.log(err)
    } else {
      // console.log(data)
      res.send({
        data: data
      })
    }
  })
})

// 删除小组
router.get('/deleteGroup', function (req, res, next) {
  let fzid = req.query.xzid
  let invoker = req.zd.getInvoker('com.zrar.eip.newworkplan.spi.INewGzzbFzService')
  let method = 'daleteFz'
  let args = [{$class: 'java.lang.String', $: fzid}]
  invoker.excute(method, args, function (err, data) {
    if (err) {
      console.log(err)
    } else {
      // console.log(data)
      res.send(data)
    }
  })
})

// 添加小组
router.post('/addGroup', function (req, res, next) {
  let fzrid = req.session.yhid
    //
  let xzmc = req.body.xzmc
  let name = req.body.nameNum
  let invoker = req.zd.getInvoker('com.zrar.eip.newworkplan.spi.INewGzzbFzService')
  let method = 'updateXzcy'
  let id = ''
  let fzr = ''
  let xzcy = ''
  let xzcyid = ''
  let bo = {id, xzmc, fzr, fzrid, xzcy, xzcyid, name}
  let args = [{$class: 'com.zrar.eip.newworkplan.bo.WNewGzzbFzBO', $: bo}]
  invoker.excute(method, args, function (err, data) {
    if (err) {
      console.log(err)
    } else {
      console.log(data)
      res.send(data)
    }
  })
})

module.exports = router
