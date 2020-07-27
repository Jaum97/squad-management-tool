import { Maybe } from '../shared/interfaces/common'

export interface IStore {
	teams: any[]
}

export type SelectorEqualityFn<K extends keyof IStore> = Maybe<
	(left: Pick<IStore, K>, right: Pick<IStore, K>) => boolean
>
