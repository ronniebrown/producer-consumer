const query = require('../util/query-evaluator')
const assert = require('chai').assert

describe('query', () => {
	it('should check for "+" ', () => {
		const result = query({
			num1: 5,
			num2: 10,
			type: '+'
		})
		assert.equal(result, 15)
	})
	it('should check for "-" ', () => {
		const result = query({
			num1: 15,
			num2: 10,
			type: '-'
		})
		assert.equal(result, 5)
	})
	it('should check for "*" ', () => {
		const result = query({
			num1: 3,
			num2: 3,
			type: '*'
		})
		assert.equal(result, 9)
	})
	it('should check for "/" ', () => {
		const result = query({
			num1: 50,
			num2: 10,
			type: '/'
		})
		assert.equal(result, 5)
	})
})
