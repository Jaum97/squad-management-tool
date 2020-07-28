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
		const position = getPosition(col)

		const matchesPlace = (p: number, i: number) => p === position[i]

		return player?.position.every(matchesPlace)
	}

	const findPlayer = (col: number) => players.find(isSamePosition(col))

	return (
		<FormationSectionContainer>
			{arr.map((_, col) => (
				<DroppableSpot
					column={col}
					formation={formation}
					key={col}
					player={findPlayer(col)}
					row={row}
					selectPlayer={selectPlayer}
				/>
			))}
		</FormationSectionContainer>
	)
}

export default FormationRow
