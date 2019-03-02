require('dotenv').config()
const express = require('express')
const app = express()
const debug = require('debug')(process.env.DEBUG)
const { connect } = require('./db/connection')
const db = connect()

module.exports = { db }

app.get('/', (req, res) => {
	debug('Default API working')
	res.send('Study Together!')
})

app.listen(process.env.PORT, () => {
	console.info('App listening on port 5000!')
})
