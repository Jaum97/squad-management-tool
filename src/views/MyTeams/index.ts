import useAxios from 'axios-hooks'
import { createElement, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { axiosInstance as axios } from '../../config/axios'
import { routesEnum } from '../../routes/enum'
import IProps from './types'
import view from './view'
import { useTypedSelector } from '../../shared/utils/useTypedSelector'
import { mode } from '../../shared/utils/array'

function MyTeamsContainer(props: IProps): JSX.Element {
	const history = useHistory()
	const [{ data: leaguesData }] = useAxios('/leagues')

	const { teams } = useTypedSelector(['teams'])

	console.log({ leaguesData })

	const mostPickedPlayer = () => {
		const allPlayers = teams.flatMap((team) =>
			team.players.map((player: any) => player.name)
		)

		const mostPicked = mode(allPlayers)
	}

	const navigateTo = (r: keyof typeof routesEnum) => () => history.push(r)

	const viewProps = { navigateTo }

	return createElement(view, viewProps)
}

export default MyTeamsContainer
