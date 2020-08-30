const mongoose = require('mongoose')
const chalk = require('chalk')

mongoose.connect(
    config.database.url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (!err) {
            console.log(
                chalk.blue('Successfully Established Connection with MongoDB')
            )
        } else {
            console.log(
                chalk.red(
                    'Failed to Establish Connection with MongoDB with Error: ' +
                        err
                )
            )
        }
    }
)
module.exports = mongoose
