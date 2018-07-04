const express = require('express')
			cors = require('cors')
			app = express()
			port = 6060 || proccess.argv[2]

const Summoner = require('./routes')

/* CORS */
app.use(cors())

app.use('/', Summoner)

app.listen(port, () => {
	console.log('Running on Port 6060')
})