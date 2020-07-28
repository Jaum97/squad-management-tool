import { Maybe } from '../shared/interfaces/common'
import { Team } from '../shared/interfaces/team'

export interface IStore {
	teams: Team[]
	teamToEdit: Team
}

export type SelectorEqualityFn<K extends keyof IStore> = Maybe<
	(left: Pick<IStore, K>, right: Pick<IStore, K>) => boolean
>
