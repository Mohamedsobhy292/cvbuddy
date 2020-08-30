const mongoose = require('mongoose')

const experince = mongoose.Schema({
    title: String,
    company: String,
    city: String,
    startDate: String,
    endDate: String,
    currentlyWorkHere: {
        type: Boolean,
        default: false,
    },
    isInternship: {
        type: Boolean,
        default: false,
    },
    description: String,
})

const skill = mongoose.Schema({
    name: String,
    level: String,
})

const link = mongoose.Schema({
    label: String,
    link: String,
})

const education = mongoose.Schema({
    school: String,
    city: String,
    degree: String,
    startDate: String,
    endDate: String,
    description: String,
})

const language = mongoose.Schema({
    name: String,
    level: String,
})

const certificate = mongoose.Schema({
    name: String,
    institution: String,
    year: String,
    description: String,
})

const userInformationSchema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        email: String,
        phone: String,
        jobTitle: String,
        residence: String,
        summary: String,
        showSkillsLevel: {
            type: Boolean,
            default: false,
        },
        experience: [experince],
        skills: [skill],
        links: [link],
        education: [education],
        languages: [language],
        certificates: [certificate],
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: 'User id is required',
        },
    },
    {
        timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
    }
)

userInformationSchema.pre(
    'deleteOne',
    { document: true, query: true },
    async function (next) {
        const document = await this.model.findOne(this.getFilter())

        if (document) {
            await mongoose
                .model('User')
                .update(
                    { _id: document.userId },
                    { $pull: { resumes: document._id } },
                    { multi: true }
                )
        }

        next()
    }
)

module.exports = mongoose.model('UserInformation', userInformationSchema)
