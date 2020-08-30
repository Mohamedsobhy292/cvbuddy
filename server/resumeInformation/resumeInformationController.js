const ResumeInformationRepo = require('./resumeInformationRepo')
const ResumeInformationService = require('./resumeInformationService')

module.exports.getAllResumeInformation = async (req, res) => {
    const userId = req.user.id
    try {
        const information = await ResumeInformationRepo.findAll(userId)
        res.json({
            data: information,
        })
    } catch (e) {
        console.error(e)
    }
}

module.exports.getSingleResumeInformation = async (req, res) => {
    const id = req.params.id
    const userId = req.user.id
    try {
        const data = await ResumeInformationRepo.findById(id)

        // check if the user has access to this data
        const validationError = await ResumeInformationService.validateAccessToData(
            userId,
            data.userId
        )

        if (validationError) {
            return res.status(401).json({
                error: {
                    message: validationError,
                },
            })
        }
        return res.json({
            data: data,
        })
    } catch (e) {
        return res.status(500).json({
            error: {
                message: e,
            },
        })
    }
}

module.exports.deleteSingleResumeInformation = async (req, res) => {
    const id = req.params.id
    const userId = req.user.id

    try {
        const documentToDelete = await ResumeInformationRepo.findById(id)

        // check if the user has access to this data
        const validationError = await ResumeInformationService.validateAccessToData(
            userId,
            documentToDelete.userId
        )

        if (validationError) {
            return res.status(401).json({
                error: {
                    message: validationError,
                },
            })
        }

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

    try {
        const createNewResumeInformation = await ResumeInformationRepo.createNewResumeInformation(
            resumeInformation
        )
        return res.json({
            data: createNewResumeInformation,
        })
    } catch (e) {
        return res.status(403).send({
            error: {
                error: 403,
                message: e,
            },
        })
    }
}

module.exports.updateResumeInformation = async (req, res) => {
    const resumeId = req.params.id
    const userId = req.user.id
    delete req.body.userId

    const documentToUpdate = await ResumeInformationRepo.findById(resumeId)

    // check if the user has access to this data

    const validationError = await ResumeInformationService.validateAccessToData(
        userId,
        documentToUpdate.userId
    )

    if (validationError) {
        return res.status(401).json({
            error: {
                message: validationError,
            },
        })
    }

    try {
        const updatedDocument = await ResumeInformationRepo.updateOne(
            { _id: resumeId },
            {
                ...req.body,
            }
        )
        res.json({
            data: updatedDocument,
        })
    } catch (e) {
        res.status(500).json({
            error: {
                message: e,
            },
        })
    }
}
