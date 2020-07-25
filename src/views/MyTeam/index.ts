import { createElement } from 'react'

import IProps from './types'

import view from './view'

function MyTeamContainer(props: IProps): JSX.Element {
	const viewProps = {}

	return createElement(view, viewProps)
}

export default MyTeamContainer
