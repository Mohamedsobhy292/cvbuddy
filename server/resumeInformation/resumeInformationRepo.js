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

module.exports.findOneAndDelete = async (condition) => {
    return await ResumeInformation.findOneAndDelete(condition)
}

module.exports.findOneAndUpdate = async (condition, data) => {
    return await ResumeInformation.findOneAndUpdate(condition, data, {
        new: true,
    })
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

module.exports.findOne = async (condition) => {
    return await ResumeInformation.findOne(condition)
}
