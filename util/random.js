'use strict'

const maxNumber = require('../config').maxNumber

exports.randomNumber = () => {
	const randomNum = Math.ceil(Math.random() * maxNumber)
	return Math.random() > 0.5
		? randomNum
		: randomNum * -1
}

exports.randomIndex = array => {
	return array[Math.floor(Math.random() * array.length)]
}
