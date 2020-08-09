var express = require('express')
const puppeteer = require('puppeteer')
const qs = require('qs')
const mongoose = require('mongoose')

var router = express.Router()

async function printPDF(data) {
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()
    const url = `http://localhost:3000/templates/volga?${data}`
    await page.goto(url, {
        waitUntil: 'networkidle0',
    })

    await page.emulateMediaType('screen')

    const height = await page.evaluate(
        () => document.documentElement.offsetHeight
    )
    const pdf = await page.pdf({
        format: 'A4',
        displayHeaderFooter: false,
        height: height + 'px',
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
