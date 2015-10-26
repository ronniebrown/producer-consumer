'use strict'

const http = require('http')
const url = require('url')
const querystring = require('querystring')

const port = require('../config').port
const evaluator = require('../util/query-evaluator')

let numRequests = 0

const server = http.createServer((req, res) => {
	const query = url.parse(req.url).query
	console.log('Consumer produced result:', evaluator(querystring.parse(query)))
	numRequests++
	res.end()
})

server.listen(port, () => {
	console.log('Consumer listening on', port)
})

process.on('SIGINT', () => {
	server.close(() => {
		console.log(`\nServed ${numRequests} requests`)
	})
})
