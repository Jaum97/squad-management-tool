import useAxios from 'axios-hooks'
import cogoToast from 'cogo-toast'
import { ChangeEvent, createElement, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { BYPASS_CORS_PROXY } from '../../config/axios'
import { isValidURL } from '../../shared/utils/URL'
import { Creators as TeamActions } from '../../store/ducks/teams'
import { DEFAULT_TEAM, VALID_FORMATIONS } from './data'
import IProps, { Formation, IViewProps } from './types'
import View from './view'

function CreateTeamContainer(props: IProps): JSX.Element {
	const dispatch = useDispatch()
	const { addTeam: addTeamToStore } = TeamActions

	const [{ data, loading }, execute] = useAxios('/search', { manual: true })

	const [team, setTeam] = useState(DEFAULT_TEAM)
	const [inputsWithError, setInputsWithError] = useState<string[]>([])
	const [availablePlayers, setAvailablePlayers] = useState([])
	const [searchInput, setSearchInput] = useState('')

	// const mocked = [	{
	// 	player_name: 'Pelé',
	// 	nationality: 'Brazil',
	// 	age: 33
	// },
	// {
	// 	player_name: 'Ronaldo',
	// 	nationality: 'Noruega',
	// 	age: 55
	// },
	// {
	// 	player_name: 'Maradon',
	// 	nationality: 'Argentina',
	// 	age: 100
	// }]

	console.log({ availablePlayers, data })

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

	// const updateSearchInput = (e: ChangeEvent)

	const getFormationString = (f: Formation) => f.filter(Boolean).join(' - ')

	const getOption = (value: string) => ({ value, label: value })

	const formations = VALID_FORMATIONS.map(getFormationString).map(getOption)

	const getPlayers = () => {
		if (searchInput.length < 4) return

		const endpoint = `https://www.api-football.com/demo/v2`

		const params = `players/search/${searchInput}`

		const url = `${BYPASS_CORS_PROXY}/${endpoint}/${params}`

		execute({ url })
	}

	const reflectFetchedPlayers = () => {
		if (!data?.api) return

		const { players } = data.api

		setAvailablePlayers(players)
	}

	const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target

		setSearchInput(value)
	}

	useEffect(getPlayers, [searchInput])

	useEffect(reflectFetchedPlayers, [data])

	const viewProps: IViewProps = {
		availablePlayers,
		formations,
		inputsWithError,
		searchInput,
		team,
		handleSearchChange,
		// loadOptions,
		loading,
		updateTeam,
		saveTeam,
		addTag,
		removeTag
	}

	return createElement(View, viewProps)
}

export default CreateTeamContainer
