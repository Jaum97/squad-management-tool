import { createElement } from 'react'
import IProps from './types'
import View from './view'

function CreateTeamContainer(props: IProps): JSX.Element {
	const viewProps = {}

	return createElement(View, viewProps)
}

export default CreateTeamContainer
