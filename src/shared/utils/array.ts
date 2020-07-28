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
	const aux1 = arr.reduce(
		(map, el) => map.set(el, (map.get(el) || 0) + 1),
		new Map()
	)

	const result = [...(aux1 as any)].reduce((r, v) => (v[1] < r[1] ? v : r))[0]

	return result
}
