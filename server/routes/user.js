const router = require('express').Router()

router.get('/users', (req, res) => {
	res.json({
		name: 'name',
		level: 'pre-intermediate'
	})
})

module.exports = router
