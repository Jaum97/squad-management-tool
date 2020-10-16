import { useSelector } from 'react-redux';

import { IStore, SelectorEqualityFn } from '../../store/types';
import { pickKeys } from '../utils/object';

export function useTypedSelector<K extends keyof IStore>(
	props: Array<K>,
	equalityFn: SelectorEqualityFn<K> = undefined
) {
	const getState = pickKeys(props)

	return useSelector<IStore, Pick<IStore, K>>(getState, equalityFn)
}
