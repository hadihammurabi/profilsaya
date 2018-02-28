const { config } = require('./package.json')

const express = require('express')
const app     = express()

const bodyParser = require('body-parser')

const { root, auth } = require('./routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', root)
app.use('/auth', auth)

app.listen(config.app.port, () => {
  console.log(`Profil Saya (backend) berjalan pada PORT ${config.app.port}`)
})
