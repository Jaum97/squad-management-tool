import { ChangeEvent, createElement, useState } from 'react'
import { useDispatch } from 'react-redux'

import { useTypedSelector } from '../../shared/utils/useTypedSelector'
import { Creators as TeamActions } from '../../store/ducks/teams'
import { VALID_FORMATIONS } from './data'
import IProps, { Formation } from './types'
import View from './view'

function CreateTeamContainer(props: IProps): JSX.Element {
	const dispatch = useDispatch()
	const { addTeam: addTeamToStore } = TeamActions

	const { teams } = useTypedSelector(['teams'])

	console.log({ teams })
	const [team, setTeam] = useState({
		name: '',
		description: '',
		website: '',
		type: 'fantasy',
		tags: ['attack'] as any[],
		formationLayout: '',
		formation: [] as any[]
	})

	const updateTeam = (key: string) => (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target

		if (key === 'type') {
			const isFantasy = team.type === 'fantasy'

			setTeam((t) => ({ ...t, type: isFantasy ? 'real' : 'fantasy' }))

			return
		}

		if (key === 'tags') {
			console.log({ e })

			// setTeam((t) => ({ ...t, type: isFantasy ? 'real' : 'fantasy' }))

			return
		}

		setTeam((t) => ({ ...t, [key]: value }))
	}

	const removeTag = (i: number) => () => {
		setTeam((t) => ({ ...t, tags: t.tags.filter((_, i2) => i2 !== i) }))
	}

	const addTag = (value: any) => {
		setTeam((t) => ({ ...t, tags: [...t.tags, value] }))
	}

	const saveTeam = () => {
		dispatch(addTeamToStore(team))
	}

	const getFormationString = (f: Formation) => f.filter(Boolean).join(' - ')

	const getOption = (value: string) => ({ value, label: value })

	const formations = VALID_FORMATIONS.map(getFormationString).map(getOption)

	const viewProps = {
		team,
		formations,
		updateTeam,
		saveTeam,
		addTag,
		removeTag
	}

	return createElement(View, viewProps)
}

export default CreateTeamContainer
