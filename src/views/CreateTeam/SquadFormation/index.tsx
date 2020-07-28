import React from 'react'

import { TeamFormationContainer } from '../styles'

import { IProps } from './types'
import FormationRow from './FormationRow'

function SquadFormation(props: IProps) {
	const { selectPlayer, formation, team } = props

	const { length: len } = formation

	const attackLen = formation[len - 1]

	const middleRow1Len = formation[len - 2] > 3 ? formation[len - 2] - 3 : 0

	const middleRow2Len = formation[len - 2] > 3 ? 3 : formation[len - 2]

	const defenseRow1Len = formation[len - 3] > 3 ? formation[len - 3] - 3 : 0

	const defenseRow2Len = formation[len - 2] > 3 ? 3 : formation[len - 2]

	const goalKeeper = 1

	const { players } = team

	const def = { selectPlayer, formation, players }

	return (
		<TeamFormationContainer>
			<FormationRow length={attackLen} row={0} {...def} />

			<FormationRow length={middleRow1Len} row={1} {...def} />

			<FormationRow length={middleRow2Len} row={2} {...def} />

			<FormationRow length={defenseRow1Len} row={3} {...def} />

			<FormationRow length={defenseRow2Len} row={4} {...def} />

			<FormationRow length={goalKeeper} row={5} {...def} />
		</TeamFormationContainer>
	)
}

export default SquadFormation
