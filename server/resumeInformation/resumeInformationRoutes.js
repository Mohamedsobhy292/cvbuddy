const resumeInformationController = require('./resumeInformationController')
const express = require('express')
const router = express.Router()
const authenticationMiddleware = require('../config/authenticationMiddleware')

router.get(
    '/',
    authenticationMiddleware,
    resumeInformationController.getAllResumeInformation
)
// router.get(
//     '/:id',
//     authenticationMiddleware,
//     resumeInformationController.getSingleResumeInformation
// )
router.post('/', resumeInformationController.createResumeInformation)

module.exports = router
