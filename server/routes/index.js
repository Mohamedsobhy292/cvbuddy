const express = require('express')
const router = express.Router()

const user = require('../user')
const resumeInformation = require('../resumeInformation')

module.exports = function (app) {
    app.use(express.json())
    app.use('/', router)
    app.use('/users', user.routes)
    app.use('/resumeInformation', resumeInformation.routes)
}

// module.exports = router
