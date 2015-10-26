'use strict'

module.exports = query => {
	if (!query.type || !query.num1 || !query.num2 || isNaN(Number(query.num1)) || isNaN(Number(query.num2))) {
		throw new Error('Insufficient query parameters passed to consumer')
	}

	if (query.type === '+') {
		return Number(query.num1) + Number(query.num2)
	} else if (query.type === '-') {
		return Number(query.num1) - Number(query.num2)
	} else if (query.type === '*') {
		return Number(query.num1) * Number(query.num2)
	} else if (query.type === '/') {
		return Number(query.num1) / Number(query.num2)
	}
}
