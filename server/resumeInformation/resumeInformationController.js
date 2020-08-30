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
        const data = await ResumeInformationRepo.find({
            _id: id,
            userId,
        })

        return res.json({
            data: data,
        })
    } catch (e) {
        console.log(e)
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
        const deleted = await ResumeInformationRepo.findOneAndDelete({
            _id: id,
            userId,
        })

        res.json({
            data: deleted,
        })
    } catch (e) {
        console.error(e)
    }
}

module.exports.createResumeInformation = async (req, res) => {
    const userId = req.user.id
    const resumeInformation = {
        ...req.body,
        userId,
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

    try {
        const updatedDocument = await ResumeInformationRepo.findOneAndUpdate(
            { _id: resumeId, userId },
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
