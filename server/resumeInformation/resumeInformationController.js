const ResumeInformationRepo = require('./resumeInformationRepo')

module.exports.getAllResumeInformation = async (req, res) => {
    try {
        const information = await ResumeInformationRepo.findAll()
        res.json({
            data: information,
        })
    } catch (e) {
        console.error(e)
    }
}

module.exports.getSingleResumeInformation = async (req, res) => {
    const id = req.params.id
    try {
        const data = await ResumeInformationRepo.findById(id)
        res.json({
            data: data,
        })
    } catch (e) {
        console.error(e)
    }
}

module.exports.deleteSingleResumeInformation = async (req, res) => {
    const id = req.params.id

    try {
        const deleted = await ResumeInformationRepo.deleteOne(id)
        res.json({
            data: deleted,
        })
    } catch (e) {
        console.error(e)
    }
}

module.exports.createResumeInformation = async (req, res) => {
    const resumeInformation = {
        ...req.body,
    }

    // const userValidationErrors = await userService.validateUser(user)

    // if (userValidationErrors) {
    //     return res.status(403).send({
    //         error: 403,
    //         message: userValidationErrors.details[0].message,
    //     })
    // }

    // user.password = await userService.cryptPassword(req.body.password)

    try {
        const createNewResumeInformation = await ResumeInformationRepo.createNewResumeInformation(
            resumeInformation
        )
        return res.json({
            data: createNewResumeInformation,
        })
    } catch (e) {
        return res.status(403).send({
            error: 403,
            message: e,
        })
    }
}
