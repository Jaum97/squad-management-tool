import { createElement, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { routesEnum } from '../../routes/enum'
import { Team, ITeamPlayer } from '../../shared/interfaces/team'
import { useTypedSelector } from '../../shared/utils/useTypedSelector'
import { Creators as EditTeamActions } from '../../store/ducks/teamToEdit'
import IProps, { IViewProps, HighLightTeam } from './types'
import View from './view'
import { mostFrequent, leastFrequent } from '../../shared/utils/array'
import { add } from '../../shared/utils/math'
import { ArrayElement } from '../../shared/interfaces/common'

function MyTeamsContainer(props: IProps): JSX.Element {
	const history = useHistory()
	const dispatch = useDispatch()
	const { teams } = useTypedSelector(['teams'])

	const initial: HighLightTeam[] = []

	const [mostPicked, setMostPicked] = useState({ name: '', percentage: 0 })
	const [leastPicked, setLeastPicked] = useState({ name: '', percentage: 0 })
	const [highestAvgAgeTeams, setHighestAvgAgeTeams] = useState(initial)
	const [lowestAvgAgeTeams, setLowestAvgAgeTeams] = useState(initial)

	const { setTeam: setStoreTeamToEdit } = EditTeamActions

	const findHighLightPlayer = (
		getWantedPlayer: (arr: string[]) => string
	) => {
		if (!teams?.length) return

		const getPlayerId = (p: ITeamPlayer) => String(p.player_id)

		const allPlayers = teams.flatMap((t) => t.players)

		const allPlayerIds = allPlayers.map(getPlayerId)

		const id = getWantedPlayer(allPlayerIds)

		const appearances = allPlayerIds.filter((p) => p === id).length

		const percentage = Math.floor(100 / (allPlayerIds.length / appearances))

		const isHighlighted = (p: ITeamPlayer) => String(p.player_id) === id

		const player = allPlayers.find(isHighlighted)

		if (!player) return

		return { name: player.player_name, percentage }
	}

	const initHighLightPlayers = () => {
		const MPP = findHighLightPlayer(mostFrequent)

		const LPP = findHighLightPlayer(leastFrequent)

		if (MPP) setMostPicked(MPP)
		if (LPP) setLeastPicked(LPP)
	}

	const getTeamAverageAge = (team: Team) => {
		const ages = team.players.map((p) => p.age)

		const total = ages.reduce(add, 0)

		return total / ages.length
	}

	const initHighLightTeams = () => {
		const averages = teams.map((t) => ({
			name: t.name,
			avgAge: getTeamAverageAge(t)
		}))

		const { length: len } = averages

		const highest = averages.slice(0, 5)
		const lowest = averages.slice(len > 5 ? len - 5 : 0, len)

		const highestSorted = highest.sort((a, b) => b.avgAge - a.avgAge)
		const lowestSorted = lowest.sort((a, b) => a.avgAge - b.avgAge)

		const fmt = (t: ArrayElement<typeof averages>) => ({
			...t,
			avgAge: t.avgAge.toFixed(1)
		})

		setHighestAvgAgeTeams(highestSorted.map(fmt))
		setLowestAvgAgeTeams(lowestSorted.map(fmt))
	}

	const addTeam = () => {
		dispatch(setStoreTeamToEdit(new Team()))

		history.push(routesEnum.CREATE_TEAM as 'CREATE_TEAM')
	}

	const editTeam = (teamName: string) => () => {
		const team = teams.find((t) => t.name === teamName)

		if (!team) return

		dispatch(setStoreTeamToEdit(team))

		history.push(routesEnum.CREATE_TEAM as 'CREATE_TEAM')
	}

	useEffect(initHighLightPlayers, [])
	useEffect(initHighLightTeams, [])

	const viewProps: IViewProps = {
		highestAvgAgeTeams,
		leastPicked,
		lowestAvgAgeTeams,
		mostPicked,
		teams,
		addTeam,
		editTeam
	}

	return createElement(View, viewProps)
}

export default MyTeamsContainer
