import { ChangeEvent } from 'react'

import { Team, Formation } from '../../shared/interfaces/team'
import { IPlayer } from '../../shared/interfaces/player'

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
	addTag: (value: string) => void
	handleFormationChange: (val: any) => void
	handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void
	removeTag: (i: number) => () => void
	saveTeam: () => void
	selectPlayer: (player: IPlayer) => void
	updateTeam: (
		key: string
	) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}
