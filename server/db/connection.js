const mongoose = require('mongoose')
const config = require('../config/default')

const url = `mongodb://${config.db.username}:${config.db.password}@mongodb/${
	config.db.name
}`

const connect = async () => {
	try {
		mongoose.connect(url, {
			useNewUrlParser: true
		})
	} catch (error) {
        //TODO: add logger, process exit info 
		process.exit(1)
	}
}

module.exports = { connectToDB: connect }
