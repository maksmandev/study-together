const express = require('express')
const app = express()
const b = '123'
app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.listen(5000, () => {
	console.log('App listening on port 5000!')
})
