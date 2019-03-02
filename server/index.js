const express = require('express')
const app = express()
require('dotenv').config()
const debug = require('debug')(process.env.DEBUG)

app.get('/', (req, res) => {
	debug('Default API working')
	res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
	console.info('App listening on port 5000!')
})
