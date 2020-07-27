import { ChangeEvent, createElement, useState } from 'react'
import { useDispatch } from 'react-redux'

import { useTypedSelector } from '../../shared/utils/useTypedSelector'
import { Creators as TeamActions } from '../../store/ducks/teams'
import { VALID_FORMATIONS, DEFAULT_TEAM } from './data'
import IProps, { Formation, IViewProps } from './types'
import View from './view'
import { isValidURL } from '../../shared/utils/URL'
import cogoToast from 'cogo-toast'

function CreateTeamContainer(props: IProps): JSX.Element {
	const dispatch = useDispatch()
	const { addTeam: addTeamToStore } = TeamActions

	const { teams } = useTypedSelector(['teams'])

	const [team, setTeam] = useState(DEFAULT_TEAM)
	const [inputsWithError, setInputsWithError] = useState<string[]>([])

	console.log({ inputsWithError })

	const updateTeam = (key: string) => (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { value } = e.target

		if (key === 'type') {
			const isFantasy = team.type === 'fantasy'

			setTeam((t) => ({ ...t, type: isFantasy ? 'real' : 'fantasy' }))

			return
		}

		setTeam((t) => ({ ...t, [key]: value }))
	}

	const removeTag = (i: number) => () => {
		setTeam((t) => ({ ...t, tags: t.tags.filter((_, i2) => i2 !== i) }))
	}

	const addTag = (value: string) => {
		setTeam((t) => ({ ...t, tags: [...t.tags, value] }))
	}

	const saveTeam = () => {
		const isTeamValid = validateTeam()

		if (!isTeamValid) return

		dispatch(addTeamToStore(team))
	}

	const validateTeam = () => {
		const isNameValid = team.name.length > 3

		const isWebsiteValid = isValidURL(team.website)

		const withError = [
			isNameValid ? '' : 'name',
			isWebsiteValid ? '' : 'website'
		].filter(Boolean)

		const hasErrors = Boolean(withError.length)

		if (hasErrors) {
			cogoToast.error(
				'Failed to save team, please check highlighted inputs',
				{ position: 'top-right' }
			)
		}

		setInputsWithError(withError)

		return !hasErrors
	}

	const getFormationString = (f: Formation) => f.filter(Boolean).join(' - ')

	const getOption = (value: string) => ({ value, label: value })

	const formations = VALID_FORMATIONS.map(getFormationString).map(getOption)

	const viewProps: IViewProps = {
		team,
		formations,
		inputsWithError,
		updateTeam,
		saveTeam,
		addTag,
		removeTag
	}

	return createElement(View, viewProps)
}

export default CreateTeamContainer
