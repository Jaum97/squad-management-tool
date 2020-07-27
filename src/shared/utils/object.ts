import { ValidPropType } from '../interfaces/common'

export const pickKeys = <K extends ValidPropType>(keys: Array<K>) => <
	O extends { [key in K]?: any }
>(
	obj: O
): Pick<O, K> => {
	const newObj = {} as O

	for (const key of keys) {
		newObj[key] = obj[key]
	}

	return newObj
}
