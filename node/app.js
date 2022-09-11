const express = require('express')
const dotenv = require('dotenv')
const http = require('http')
const fs = require('fs')
const https = require('https')
dotenv.config()

/*
const options = {
  ca: fs.readFileSync('/etc/letsencrypt/live/lovelyme.live/fullchain.pem'),
  key: fs.readFileSync('/etc/letsencrypt/live/lovelyme.live/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/lovelyme.live/cert.pem'),
}
*/

async function startServer() {
  const app = express()
  app.set('port', process.env.PORT || 6600)

  await require('./loaders')(app)

  app
    .listen(app.get('port'), () => {
      console.log(`
      ################################################
      🛡️  Server listening on port: ${app.get('port')} 🛡️
      ################################################
    `)
    })
    .on('error', (err) => {
      console.error(err)
      process.exit(1)
    })

  /*
  http
    .createServer(function (req, res) {
      res.writeHead(301, {
        Location: 'https://' + req.headers['host'] + req.url,
      })
      res.end()
    })
    .listen(8080)
 https.createServer(options, app).listen(4430)
 */
}

startServer()
