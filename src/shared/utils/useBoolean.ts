import { useState } from 'react'

export const useBoolean = (
	initialState: boolean
): [boolean, () => void, () => void, () => void] => {
	const [state, setState] = useState(initialState)

	const setTrue = () => setState(true)

	const setFalse = () => setState(false)

	const toggle = () => setState((x) => !x)

	return [state, setTrue, setFalse, toggle]
}
