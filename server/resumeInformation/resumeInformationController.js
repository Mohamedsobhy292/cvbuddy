const ResumeInformationRepo = require('./resumeInformationRepo')
const puppeteer = require('puppeteer')

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
        const data = await ResumeInformationRepo.findOne({
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
        ...req.body.data,
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

    try {
        const data = req.body.data
        delete data.userId

        const updatedDocument = await ResumeInformationRepo.findOneAndUpdate(
            { _id: resumeId, userId },
            {
                ...req.body.data,
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

module.exports.downloadResumeInformation = async (req, res) => {
    const resumeId = req.params.id
    const browser = await puppeteer.launch({ headless: true })
    const authHeader = req.headers.authorization
    const token = authHeader.split('bearer')[1]

    browser.on('targetchanged', async (target) => {
        const targetPage = await target.page()
        const client = await targetPage.target().createCDPSession()
        await client.send('Runtime.evaluate', {
            expression: `localStorage.setItem('cvbuddy_access_token', '${token}')`,
        })
    })

    const page = await browser.newPage()
    const url = `${config.client_url}/templates/volga/${resumeId}`

    await page.goto(url, {
        waitUntil: 'networkidle0',
    })

    await page.emulateMediaType('screen')

    const pdf = await page.pdf({
        format: 'A4',
        displayHeaderFooter: false,
        printBackground: true,
    })

    res.contentType('application/pdf')

    await browser.close()
    res.send(pdf)
}
