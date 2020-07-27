import useAxios from 'axios-hooks'
import { createElement, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { axiosInstance as axios } from '../../config/axios'
import { routesEnum } from '../../routes/enum'
import IProps from './types'
import view from './view'

function MyTeamsContainer(props: IProps): JSX.Element {
	const history = useHistory()
	const [{ data: leaguesData }] = useAxios('/leagues')

	console.log({ leaguesData })

	const navigateTo = (r: keyof typeof routesEnum) => () => history.push(r)

	const viewProps = { navigateTo }

	return createElement(view, viewProps)
}

export default MyTeamsContainer
