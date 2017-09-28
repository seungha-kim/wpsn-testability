const express = require('express')
const morgan = require('morgan')
const bugsnag = require('bugsnag')

const createApiRouter = require('./router/api')

module.exports = ({postMessage}) => {
  const app = express()

  app.set('trust proxy', true)
  app.use(bugsnag.requestHandler)
  app.use(morgan('tiny'))
  app.use('/api', createApiRouter({postMessage}))
  return app
}
