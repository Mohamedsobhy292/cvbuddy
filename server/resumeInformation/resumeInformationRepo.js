const ResumeInformation = require('./resumeInformationModel')
const User = require('../user/userModel')

module.exports.findAll = async (userId) => {
    return await ResumeInformation.find({
        userId,
    })
}

module.exports.findById = async (id) => {
    return await ResumeInformation.findById(id)
}

module.exports.deleteOne = async (id) => {
    return await ResumeInformation.deleteOne({
        _id: id,
    })
}

module.exports.updateOne = async (condition, data) => {
    return await ResumeInformation.updateOne(condition, data)
}

module.exports.createNewResumeInformation = async (informationObj) => {
    const resumeInformation = new ResumeInformation({
        ...informationObj,
    })

    try {
        const newResumeInformation = await resumeInformation.save()
        await User.updateOne(
            { _id: newResumeInformation.userId },
            {
                $push: { resumes: newResumeInformation._id },
            }
        )
        return newResumeInformation
    } catch (e) {
        throw new Error(e._message)
    }
}
