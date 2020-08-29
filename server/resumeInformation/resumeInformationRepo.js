const ResumeInformation = require('./resumeInformationModel')
const User = require('../user/userModel')

module.exports.findAll = async () => {
    return await ResumeInformation.find({})
}

module.exports.findById = async (id) => {
    return await ResumeInformation.findById(id)
}

module.exports.deleteOne = async (id) => {
    return await ResumeInformation.deleteOne({
        _id: id,
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
        console.log(e)
        throw e._message
    }
}
