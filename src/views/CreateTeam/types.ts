import { ChangeEvent } from 'react'

import { Team, Formation } from '../../shared/interfaces/team'
import { IPlayer } from '../../shared/interfaces/player'

export default interface IProps {}

export interface IInputStyledProps {
	invalid?: boolean
}

export interface ISelectOption {
	label: string
	value: Formation
}

export interface IViewProps {
	availablePlayers: any[]
	formation: Formation
	formations: ISelectOption[]
	inputsWithError: string[]
	loading: boolean
	searchInput: string
	selectedPlayers: IPlayer[]
	team: Team
	selectPlayer: (player: IPlayer) => void
	handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void
	handleFormationChange: (val: any) => void
	addTag: (value: string) => void
	removeTag: (i: number) => () => void
	saveTeam: () => void
	updateTeam: (
		key: string
	) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}
