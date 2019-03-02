const mongoose = require('mongoose')
const config = require('../config/default')
const debug = require('debug')(process.env.DEBUG)
const url = `mongodb://${config.db.username}:${config.db.password}@mongodb/${
	config.db.name
}`

const connect = async () => {
	try {
		return mongoose.connect(url, {
			useNewUrlParser: true
		})
	} catch (error) {
		debug(error)
		process.exit(1)
	}
}

module.exports = { connect }
