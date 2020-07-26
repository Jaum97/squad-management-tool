import { createElement } from 'react'
import useAxios from 'axios-hooks'
import IProps from './types'
import view from './view'

function MyTeamContainer(props: IProps): JSX.Element {
	const [{ data }] = useAxios('/leagues')

	console.log({ data })

	const viewProps = {}

	return createElement(view, viewProps)
}

export default MyTeamContainer
