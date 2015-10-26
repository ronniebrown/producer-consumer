'use strict'

const http = require('http')
const querystring = require('querystring')

const randomNumber = require('../util/random').randomNumber
const randomIndex = require('../util/random').randomIndex

setInterval(() => {
	const query = {
		num1: randomNumber(),
		num2: randomNumber(),
		type: randomIndex(['+', '-', '*', '/']),
	}
  console.log('Producer sending query:', query)
	http.get(`http://localhost:8080?${querystring.stringify(query)}`)
}, 100)
