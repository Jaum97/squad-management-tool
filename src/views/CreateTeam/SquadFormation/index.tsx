import React from 'react'

import { IProps } from './types'
import FormationRow from './FormationRow'
import { TeamFormationContainer } from './styles'

function SquadFormation(props: IProps) {
	const { selectPlayer, formation, team } = props

	const { players } = team

	const attackLen = formation[2]

	const middleRow1Len = formation[1] > 3 ? formation[1] - 3 : 0

	const middleRow2Len = formation[1] > 3 ? 3 : formation[1]

	const middleRow3Len = formation[0] > 3 ? formation[0] - 3 : 0

	const defenseRow2Len = formation[0] > 3 ? 3 : formation[0]

	const goalKeeper = 1

	const rowParams = { selectPlayer, formation, players }

	return (
		<TeamFormationContainer>
			<FormationRow length={attackLen} row={0} {...rowParams} />

			<FormationRow length={middleRow1Len} row={1} {...rowParams} />

			<FormationRow length={middleRow2Len} row={2} {...rowParams} />

			<FormationRow length={middleRow3Len} row={3} {...rowParams} />

			<FormationRow length={defenseRow2Len} row={4} {...rowParams} />

			<FormationRow length={goalKeeper} row={5} {...rowParams} />
		</TeamFormationContainer>
	)
}

export default SquadFormation
