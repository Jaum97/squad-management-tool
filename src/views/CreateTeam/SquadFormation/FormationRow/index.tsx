import React from 'react'
import { FormationSectionContainer } from '../../styles'
import DroppableSpot from '../DroppableSpot'
import { IProps } from './types'
import { ITeamPlayer } from '../../../../shared/interfaces/team'

function FormationRow(props: IProps) {
	const { length, selectPlayer, row, formation, players } = props

	const arr = Array(length).fill(0)

	const getPosition = (col: number) => [row, col]

	const isSamePosition = (col: number) => (player: ITeamPlayer) => {
		const { position: playerPosition = [] } = player

		const position = getPosition(col)

		const matchesPlace = (p: number, i: number) => p === position[i]

		return playerPosition.every(matchesPlace)
	}

	// when editing this finds the player position inside the team
	const findPlayer = (col: number) => players.find(isSamePosition(col))

	const spotParams = { row, selectPlayer, formation }

	return (
		<FormationSectionContainer>
			{arr.map((_, col) => (
				<DroppableSpot
					col={col}
					key={col}
					editingPlayer={findPlayer(col)}
					{...spotParams}
				/>
			))}
		</FormationSectionContainer>
	)
}

export default FormationRow
