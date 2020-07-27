export function mode(array: string[]): string {
	const { length } = array

	if (length == 0) return ''

	var modeMap = {} as any
	var mostOcurrencesEl = array[0]
	var mostOcurrences = 1

	for (var i = 0; i < length; i++) {
		var el = array[i]

		modeMap[el] == null ? (modeMap[el] = 1) : modeMap[el]++

		if (modeMap[el] > mostOcurrences) {
			mostOcurrencesEl = el
			mostOcurrences = modeMap[el]
		}
	}
	return mostOcurrencesEl
}
