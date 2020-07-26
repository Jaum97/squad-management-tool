import { createElement, useState, ChangeEvent } from 'react'

import IProps from './types'
import View from './view'

function CreateTeamContainer(props: IProps): JSX.Element {
	const [team, setTeam] = useState({
		name: '',
		description: '',
		website: '',
		type: 'fantasy',
		tags: [
			'BR',
			'PTW',
			'Attack',
			'BR',
			'PTW',
			'Attack',
			'BR',
			'PTW',
			'Attack',
			'BR',
			'PTW',
			'Attack'
		],
		formationLayout: '',
		formation: []
	})

	const updateTeam = (key: string) => (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target

		if (key === 'type') {
			const isFantasy = team.type === 'fantasy'

			setTeam((t) => ({ ...t, type: isFantasy ? 'real' : 'fantasy' }))

			return
		}

		setTeam((t) => ({ ...t, [key]: value }))
	}

	const viewProps = { team, updateTeam }

	return createElement(View, viewProps)
}

export default CreateTeamContainer
