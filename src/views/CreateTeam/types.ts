import { ChangeEvent } from 'react'

import { IPlayer } from '../../shared/interfaces/player'
import { Formation, Team } from '../../shared/interfaces/team'

export interface IInputStyledProps {
	invalid?: boolean
}

export interface ISelectOption {
	label: string
	value: Formation
}

export interface IViewProps {
	availablePlayers: IPlayer[]
	formation: Formation
	formations: ISelectOption[]
	inputsWithError: string[]
	loading: boolean
	searchInput: string
	selectedPlayers: IPlayer[]
	team: Team
	addTag: (value: string) => void
	handleFormationChange: (val: ISelectOption) => void
	handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void
	removeTag: (i: number) => () => void
	saveTeam: () => void
	selectPlayer: (player: IPlayer) => void
	updateTeam: (
		key: string
	) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}
