let express = require('express')
let router = express.Router()

router.post('/', function (req, res, next) {
  req.session.yhid = req.params.yhid
  req.session.zs = req.params.zs
  res.render('index')
})

router.get('/', function (req, res, next) {
  req.session.yhid = req.query.yhid
  req.session.zs = req.query.zs
  res.render('index')
})

module.exports = router
