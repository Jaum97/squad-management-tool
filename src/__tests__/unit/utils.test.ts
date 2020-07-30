import { leastFrequent, mostFrequent } from '../../shared/utils/array'

describe('App Utils', () => {
	describe('mostFrequent', () => {
		it('gets most frequent', () => {
			const DATA = [1, 2, 3, 3].map(String)

			expect(mostFrequent(DATA)).toBe('3')
		})
	})
	describe('leastFrequent', () => {
		it('gets least frequent', () => {
			const DATA = [1, 1, 2, 3, 3].map(String)

			expect(leastFrequent(DATA)).toBe('2')
		})
	})
})
