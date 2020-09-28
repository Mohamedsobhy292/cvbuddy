const resumeInformationController = require('./resumeInformationController')
const express = require('express')
const router = express.Router()
const authenticationMiddleware = require('../config/authenticationMiddleware')

router.get(
    '/',
    authenticationMiddleware,
    resumeInformationController.getAllResumeInformation
)

router.get(
    '/download/:id',
    authenticationMiddleware,
    resumeInformationController.downloadResumeInformation
)

router.get(
    '/:id',
    authenticationMiddleware,
    resumeInformationController.getSingleResumeInformation
)

router.put(
    '/:id',
    authenticationMiddleware,
    resumeInformationController.updateResumeInformation
)

router.delete(
    '/:id',
    authenticationMiddleware,
    resumeInformationController.deleteSingleResumeInformation
)

router.post(
    '/',
    authenticationMiddleware,
    resumeInformationController.createResumeInformation
)

module.exports = router
