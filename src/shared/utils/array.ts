import { Maybe } from '../interfaces/common';

export function mostFrequent(arr: string[]): string {
	const { length } = arr

	if (length === 0) return ''

	var map = {} as { [key: string]: number }
	var mostOcurrencesEl = arr[0]
	var mostOcurrences = 1

	for (var i = 0; i < length; i++) {
		var el = arr[i]

		map[el] == null ? (map[el] = 1) : map[el]++

		if (map[el] > mostOcurrences) {
			mostOcurrencesEl = el
			mostOcurrences = map[el]
		}
	}
	return mostOcurrencesEl
}

export const leastFrequent = (arr: string[]) => {
	if (!arr?.length) return ''

	const map = {} as { [key: string]: number }

	// object in the format: { ID: how many this ID times it appears}
	const mapKeysAndOcc = arr.reduce((map, el: string) => {
		let item: Maybe<number> = map[el]

		item ? (map[el] = ++item) : (map[el] = item = 1)

		return map
	}, map)

	const lowestOcurrence = Math.min(...Object.values(mapKeysAndOcc))

	const isLowestOcc = ([_, v]: [string, number]) => v === lowestOcurrence

	const keyValue = Object.entries(mapKeysAndOcc).find(isLowestOcc)

	return (keyValue || [])[0] || ''
}
