import useAxios from 'axios-hooks'
import { ChangeEvent, createElement, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { BYPASS_CORS_PROXY } from '../../config/axios'
import { Formation, Team } from '../../shared/interfaces/team'
import {
	displayError,
	displayLoading,
	displaySuccess
} from '../../shared/utils/cogoToast'
import { isValidURL } from '../../shared/utils/URL'
import { useTypedSelector } from '../../shared/utils/useTypedSelector'
import { Creators as TeamActions } from '../../store/ducks/teams'
import { VALID_FORMATIONS } from './data'
import { IViewProps, ISelectOption } from './types'
import View from './view'
import { IPlayer } from '../../shared/interfaces/player'
import { useDebounce } from 'use-debounce/lib'

function CreateTeamContainer(): JSX.Element {
	const dispatch = useDispatch()
	const { addTeam: addTeamToStore } = TeamActions

	const { teamToEdit } = useTypedSelector(['teamToEdit'])

	const [{ data, loading }, execute] = useAxios('/search', { manual: true })

	const INITIAL_TEAM = teamToEdit.name ? teamToEdit : new Team()

	const [team, setTeam] = useState(INITIAL_TEAM)
	const [inputsWithError, setInputsWithError] = useState<string[]>([])
	const [availablePlayers, setAvailablePlayers] = useState<IPlayer[]>([])
	const [selectedPlayers, setSelectedPlayers] = useState<IPlayer[]>([])
	const [searchInput, setSearchInput] = useState('')
	const [debouncedSearch] = useDebounce(searchInput, 500)
	const [formation, setFormation] = useState(INITIAL_TEAM.formation)

	const selectPlayer = (player: IPlayer) => {
		setSelectedPlayers((p) => [...p, player])
	}

	const removeSelectedPlayerFromAvailable = () => {
		if (!selectedPlayers.length) return

		const ids = selectedPlayers.map((p) => p.player_id)

		setAvailablePlayers((a) => a.filter((p) => !ids.includes(p.player_id)))
	}

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

		const teamToSave = { ...team, players: selectedPlayers, formation }

		dispatch(addTeamToStore(teamToSave))
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
			displayError('Failed to save team, please check highlighted inputs')
		}

		setInputsWithError(withError)

		return !hasErrors
	}

	const getOption = (value: Formation) => ({
		value,
		label: value.join(' - ')
	})

	const formations = VALID_FORMATIONS.map(getOption)

	const getPlayers = () => {
		if (searchInput.length < 4) return

		const endpoint = `https://www.api-football.com/demo/v2`

		const params = `players/search/${searchInput}`

		const url = `${BYPASS_CORS_PROXY}/${endpoint}/${params}`

		displayLoading('Searching players...', { hideAfter: 1 })

		execute({ url })
	}

	const reflectFetchedPlayers = () => {
		if (!data?.api) return

		const { players } = data.api

		const { length: len } = players

		const toast = len ? displaySuccess : displayError

		toast(`${len || 'No'} players found!`)

		setAvailablePlayers(players)
	}

	const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target

		setSearchInput(value)
	}

	const handleFormationChange = (opt: ISelectOption) => {
		const { value } = opt

		setSelectedPlayers([])
		setTeam((t) => ({ ...t, players: [] }))

		setFormation(value)
	}

	useEffect(getPlayers, [debouncedSearch])
	useEffect(reflectFetchedPlayers, [data])
	useEffect(removeSelectedPlayerFromAvailable, [selectedPlayers])

	const viewProps: IViewProps = {
		availablePlayers,
		formation,
		formations,
		inputsWithError,
		loading,
		searchInput,
		selectedPlayers,
		team,
		addTag,
		handleFormationChange,
		handleSearchChange,
		removeTag,
		saveTeam,
		selectPlayer,
		updateTeam
	}

	return createElement(View, viewProps)
}

export default CreateTeamContainer
