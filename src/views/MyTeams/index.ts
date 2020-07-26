import useAxios from 'axios-hooks'
import { createElement } from 'react'

import IProps from './types'
import view from './view'
import { routesEnum } from '../../routes/enum'
import { useHistory } from 'react-router-dom'

function MyTeamsContainer(props: IProps): JSX.Element {
	const history = useHistory()
	const [{ data }] = useAxios('/leagues')

	console.log({ data })

	const navigateTo = (r: keyof typeof routesEnum) => () => history.push(r)

	const viewProps = { navigateTo }

	return createElement(view, viewProps)
}

export default MyTeamsContainer
