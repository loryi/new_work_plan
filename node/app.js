let express = require('express')
let path = require('path')
// let favicon = require('serve-favicon')
let logger = require('morgan')
let cookieParser = require('cookie-parser')
let session = require('express-session')
let bodyParser = require('body-parser')
let Zoodubbo = require('zoodubbo')

let psnWkPlan = require('./routes/psn_wk_plan')
let leaderWkPlan = require('./routes/leader_wk_plan')
let index = require('./routes/index')

let app = express()

let zd = new Zoodubbo({conn: '192.168.2.126:2181'})
zd.connect()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(session({
  secret: '123456',
  cookie: {
    maxAge: 60 * 1000 * 30
  }
}))

app.use(function (req, res, next) {
  // let x = req.headers['referer']
  // if ((typeof x) !== 'undefined') {
  //   req.zd = zd
  //   next()
  // } else {
  //   let err = new Error('Permission denied')
  //   err.status = 666
  //   next(err)
  // }
  req.zd = zd
  next()
})

app.use('/', index)
app.use('/psnWkPlan', psnWkPlan)
app.use('/leaderWkPlan', leaderWkPlan)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
