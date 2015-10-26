const random = require('../util/random').randomNumber
const maxNumber = require('../config').maxNumber
const assert = require('chai').assert

describe('random', () => {
	it('should return random numbers within the specified range', () => {
		for (let i = 0; i < maxNumber; i++) {
			const randomNum = random()
			assert(randomNum >= -maxNumber)
			assert(randomNum <= maxNumber)
		}
	})
})
