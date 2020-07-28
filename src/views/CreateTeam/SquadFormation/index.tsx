import React from 'react'

import { TeamFormationContainer } from '../styles'

import { IProps } from './types'
import FormationRow from './FormationRow'

function SquadFormation(props: IProps) {
	const { selectPlayer, formation: fmt, team } = props

	const { length: len } = fmt

	const formatted = len === 4 ? [fmt[0], fmt[1] + fmt[2], fmt[3]] : fmt

	const attackLen = formatted[2]

	const middleRow1Len = formatted[1] > 3 ? formatted[1] - 3 : 0

	const middleRow2Len = formatted[1] > 3 ? 3 : formatted[1]

	const defenseRow1Len = formatted[0] > 3 ? formatted[0] - 3 : 0

	const defenseRow2Len = formatted[0] > 3 ? 3 : formatted[0]

	const goalKeeper = 1

	const { players } = team

	const def = { selectPlayer, formation: formatted, players }

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
