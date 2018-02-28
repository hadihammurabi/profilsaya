const router = require('express').Router()
const path   = require('path')

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'auth.html'))
})

router.post('/login', (req, res) => {
  res.status(200).json(req.body.username)
})

router.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'register.html'))
})

module.exports = router
