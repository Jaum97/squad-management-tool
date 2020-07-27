import { Formation, ITeam } from './types'

export const VALID_FORMATIONS: Formation[] = [
	[3, 2, 2, 3],
	[3, 2, 3, 1],
	[3, 4, 3, 0],
	[3, 5, 2, 0],
	[4, 2, 3, 1],
	[4, 3, 1, 1],
	[4, 3, 2, 0],
	[4, 4, 2, 0],
	[4, 5, 1, 0],
	[5, 4, 1, 0]
]

export const DEFAULT_TEAM: ITeam = {
	name: '',
	description: '',
	website: '',
	type: 'fantasy',
	tags: [],
	formationLayout: '',
	formation: ([] as unknown) as Formation
}
