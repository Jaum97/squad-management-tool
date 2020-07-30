import { Team } from '../../../shared/interfaces/team'

export interface ISortBy {
	header: 'name' | 'description'
	order: 'asc' | 'desc'
}

export interface IProps {
	teams: Team[]
	editTeam: (id: string) => () => void
	removeTeam: (id: string) => () => void
}
