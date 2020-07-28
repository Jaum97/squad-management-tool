import { createElement } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { routesEnum } from '../../routes/enum'
import { Team } from '../../shared/interfaces/team'
import { useTypedSelector } from '../../shared/utils/useTypedSelector'
import { Creators as EditTeamActions } from '../../store/ducks/teamToEdit'
import { MOCKED_DATA } from './data'
import IProps, { IViewProps } from './types'
import View from './view'

function MyTeamsContainer(props: IProps): JSX.Element {
	const history = useHistory()
	const dispatch = useDispatch()
	const { teams: storeTeams } = useTypedSelector(['teams'])

	const { setTeam: setStoreTeamToEdit } = EditTeamActions

	const teams = storeTeams.length ? storeTeams : MOCKED_DATA
	// const [{ data: leaguesData }] = useAxios('/leagues')

	// const { teams } = useTypedSelector(['teams'])

	// const mostPickedPlayer = () => {
	// 	const allPlayers = teams.flatMap((team) =>
	// 		team.players.map((player: any) => player.name)
	// 	)

	// 	const mostPicked = mode(allPlayers)
	// }

	const addTeam = () => {
		dispatch(setStoreTeamToEdit(new Team()))

		history.push(routesEnum.CREATE_TEAM as 'CREATE_TEAM')
	}

	const editTeam = (teamName: string) => () => {
		const team = teams.find((t) => t.name === teamName)

		console.log({ team, teamName, storeTeams })

		if (!team) return

		dispatch(setStoreTeamToEdit(team))

		history.push(routesEnum.CREATE_TEAM as 'CREATE_TEAM')
	}

	const viewProps: IViewProps = { teams, addTeam, editTeam }

	return createElement(View, viewProps)
}

export default MyTeamsContainer
