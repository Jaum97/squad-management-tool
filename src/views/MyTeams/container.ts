import { equals, path, pipe, prop } from 'ramda';
import { createElement, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { routesEnum } from '../../routes/enum';
import { ArrayElement } from '../../shared/interfaces/common';
import { Team } from '../../shared/interfaces/team';
import { leastFrequent, mostFrequent } from '../../shared/utils/array';
import { displayError, displaySuccess } from '../../shared/utils/cogoToast';
import { add } from '../../shared/utils/math';
import { useTypedSelector } from '../../shared/utils/useTypedSelector';
import { Creators as TeamActions } from '../../store/ducks/teams';
import { Creators as EditTeamActions } from '../../store/ducks/teamToEdit';
import { HighLightTeam, IViewProps } from './types';

function MyTeamsContainer(
	View: (props: IViewProps) => JSX.Element
): JSX.Element {
	const history = useHistory()
	const dispatch = useDispatch()
	const { teams } = useTypedSelector(['teams'])

	const EMPTY_LIST: HighLightTeam[] = []

	const EMPTY_PLAYER = { name: '', percentage: 0 }

	const [mostPicked, setMostPicked] = useState(EMPTY_PLAYER)
	const [leastPicked, setLeastPicked] = useState(EMPTY_PLAYER)
	const [highestAvgAgeTeams, setHighestAvgAgeTeams] = useState(EMPTY_LIST)
	const [lowestAvgAgeTeams, setLowestAvgAgeTeams] = useState(EMPTY_LIST)

	const { setTeam: setStoreTeamToEdit } = EditTeamActions
	const { removeTeam: removeStoreTeam } = TeamActions

	const getPlayerId = pipe(prop('player_id') as any, String)

	const findHighLightPlayer = (
		getWantedPlayer: (arr: string[]) => string
	) => {
		if (!teams?.length) return
		
		const allPlayers = teams.flatMap(prop('players'))

		const allPlayerIds = allPlayers.map(getPlayerId)

		const id = getWantedPlayer(allPlayerIds)

		const appearances = allPlayerIds.filter(equals(id)).length

		const percentage = Math.floor(100 / (allPlayerIds.length / appearances))

		const isHighlighted = pipe(getPlayerId, equals(id))

		const player = allPlayers.find(isHighlighted)

		if (!player) return

		return { name: player.player_name, percentage }
	}

	const initHighLightPlayers = () => {
		const MPP = findHighLightPlayer(mostFrequent)

		const LPP = findHighLightPlayer(leastFrequent)

		setMostPicked(MPP || EMPTY_PLAYER)
		setLeastPicked(LPP || EMPTY_PLAYER)
	}

	const getTeamAverageAge = (team: Team) => {
		const ages = team.players.map(prop('age'))

		const total = ages.reduce(add, 0)

		return Number((total / ages.length).toFixed(2))
	}

	const fmtPlayerAvg = (t: Team) => ({
		id: t.id,
		name: t.name,
		avgAge: getTeamAverageAge(t)
	})

	const initHighLightTeams = () => {
		const hasPlayers = pipe(path(['players', 'length']), Boolean)

		const averages = teams.filter(hasPlayers).map(fmtPlayerAvg)

		const highestSorted = [...averages].sort((a, b) => b.avgAge - a.avgAge)
		const lowestSorted = [...averages].sort((a, b) => a.avgAge - b.avgAge)

		const highest = highestSorted.slice(0, 5)
		const lowest = lowestSorted.slice(0, 5)

		const fmt = (t: ArrayElement<typeof averages>) => ({
			...t,
			avgAge: t.avgAge.toFixed(1)
		})

		setHighestAvgAgeTeams(highest.map(fmt))
		setLowestAvgAgeTeams(lowest.map(fmt))
	}

	const addTeam = () => {
		dispatch(setStoreTeamToEdit(new Team()))

		history.push(routesEnum.CREATE_TEAM as 'CREATE_TEAM')
	}

	const findTeam = (id: string) => pipe(prop('id') as any, equals(id))

	const removeTeam = (id: string) => () => {
		const team = teams.find(findTeam(id))

		if (!team) return displayError('Failed to delete team')

		dispatch(removeStoreTeam(team))

		displaySuccess('Team deleted!')
	}

	const editTeam = (id: string) => () => {
		const team = teams.find(findTeam(id))

		if (!team) return

		dispatch(setStoreTeamToEdit(team))

		history.push(routesEnum.CREATE_TEAM as 'CREATE_TEAM')
	}

	useEffect(initHighLightPlayers, [teams])
	useEffect(initHighLightTeams, [teams])

	const viewProps: IViewProps = {
		highestAvgAgeTeams,
		leastPicked,
		lowestAvgAgeTeams,
		mostPicked,
		teams,
		addTeam,
		removeTeam,
		editTeam
	}

	return createElement(View, viewProps)
}

export default MyTeamsContainer
