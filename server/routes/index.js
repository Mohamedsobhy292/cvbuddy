var express = require('express')
const puppeteer = require('puppeteer')
const qs = require('qs')

// const { URL } = require('url')

var router = express.Router()

async function printPDF(data) {
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()
    const url = `http://localhost:3000/templates/volga?${data}`
    await page.goto(url, {
        waitUntil: 'networkidle0',
    })

    const pdf = await page.pdf({
        format: 'A4',
        printBackground: true,
    })

    await browser.close()
    return pdf
}

router.get('/', async function (req, res) {
    console.log(req.query.userData)
    const pdf = await printPDF(req.query.userData)
    res.contentType('application/pdf')

    res.send(pdf)
})

module.exports = router
