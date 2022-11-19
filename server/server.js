const express = require('express')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { expressjwt } = require('express-jwt')
const db = require('./mysql.js')

const secretKey = "ZXtreme yyds!"

const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(expressjwt({ secret: secretKey, algorithms: ["HS256"] }).unless({ path: [/^\/login/] }))

app.get('/getinfo', (req, res) => {
  const sqlStr = 'SELECT options,total FROM igem where username=?'
  db.query(sqlStr, req.auth.username, (err, result) => {
    if (err) {
      res.send({
        status: 500,
        msg: err.message
      })
    }
    else if (result.length === 0) {
      res.send({
        status: 404,
        msg: 'user does not exist'
      })
    }
    else {
      res.send({
        status: 200,
        msg: 'ok!',
        data: result[0]
      })
    }
  })
})

app.post('/updateinfo', (req, res) => {
  const sqlStr = 'update igem set options=?, total=? where username=?'
  db.query(sqlStr, [req.body.options, req.body.total, req.auth.username], (err, result) => {
    if (err) res.send({
      status: 500,
      msg: err.message
    })
    else if (result.affectedRows === 0) res.send({
      status: 201,
      msg: "username invalid"
    })
    else res.send({
      status: 200,
      msg: 'userinfo update success'
    })
  })
})

app.post('/createuser', (req, res) => {
  const sqlStr = 'insert into igem values(?,?,?)'
  db.query(sqlStr, [req.body.username, 0, req.body.password], (err, result) => {
    console.log(result);
    if (err) {
      res.send({
        status: 500,
        msg: err.message
      })
    }
    else {
      res.send({
        status: 200,
        msg: "create success!"
      })
    }
  })
})

app.get('/login/verify', (req, res) => {
  const token = req.headers.authorization
  if (token === null) res.send({
    status: 401,
    msg: "Invalid token"
  })
  else {
    jwt.verify(token.replace('Bearer ', ''), secretKey, (err, result) => {
      if (err) res.send({
        status: 401,
        msg: "Invalid token"
      })
      else res.send({
        status: 200,
        msg: 'valid token',
        username: result.username
      })
    })
  }
})

function login(username, password, res) {
  const sqlStr = 'select * from igem where username = ?'
  db.query(sqlStr, username, (err, result) => {
    if (err) res.send({
      status: 500,
      msg: err.message
    })
    else if (result.length === 0) {
      res.send({
        status: 201,
        type: 1,
        msg: "username does not exist!"
      })
    }
    else {
      const is_same = bcrypt.compareSync(password, result[0].password)
      if (is_same) {
        const userinfo = { ...result[0], password: '' }
        const tokenStr = jwt.sign(userinfo, secretKey, { expiresIn: '12h' })
        res.send({
          status: 200,
          msg: "login success!",
          token: 'Bearer ' + tokenStr
        })
      }
      else res.send({
        status: 201,
        type: 2,
        msg: "password error!"
      })
    }
  })
}
function register(username, password, res) {
  const sqlStr = 'select * from igem where username = ?'
  db.query(sqlStr, username, (err, result) => {
    if (err) res.send({
      status: 500,
      msg: err.message
    })
    else {
      if (result.length > 0) res.send({
        status: 201,
        type: 3,
        msg: "username has been already registered!"
      })
      else {
        password = bcrypt.hashSync(password, 10)
        db.query('insert into igem values(?,0,?,1)', [username, password], (err, result) => {
          if (err) res.send({
            status: 500,
            msg: err.message
          })
          else {
            const userinfo = { username, options: 0, password: '', total: 1 }
            const tokenStr = jwt.sign(userinfo, secretKey, { expiresIn: '12h' })
            res.send({
              status: 200,
              msg: "register and login success!",
              token: 'Bearer ' + tokenStr
            })
          }
        })
      }
    }
  })
}
app.post('/login', (req, res) => {
  if (req.body.register === 'true') {
    register(req.body.username, req.body.password, res)
  }
  else {
    login(req.body.username, req.body.password, res)
  }
})

app.listen(3333, () => {
  console.log('express server running!');
})