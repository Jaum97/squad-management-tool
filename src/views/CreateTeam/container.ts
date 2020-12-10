import useAxios from 'axios-hooks'
import {
	append,
	complement,
	eqProps,
	equals,
	evolve,
	filter,
	flip,
	includes,
	mergeLeft,
	mergeRight,
	path,
	pipe,
	prop
} from 'ramda'
import { ChangeEvent, createElement, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useDebounce } from 'use-debounce/lib'

import { API, BYPASS_CORS_PROXY } from '../../config/axios'
import { routesEnum } from '../../routes/enum'
import { IPlayer } from '../../shared/interfaces/player'
import { Formation, Team } from '../../shared/interfaces/team'
import {
	displayError,
	displayLoading,
	displaySuccess
} from '../../shared/utils/cogoToast'
import { isValidURL } from '../../shared/utils/URL'
import { useTypedSelector } from '../../shared/utils/useTypedSelector'
import { Creators as TeamActions } from '../../store/ducks/teams'
import { Creators as TeamToEditActions } from '../../store/ducks/teamToEdit'
import { VALID_FORMATIONS } from './data'
import { ISelectOption, IViewProps } from './types'
import View from './view'

const overlook = <T>(fn: T) => fn as any

const pipeableFilter = (callback: any) => <T>(a: T[]): T[] => a.filter(callback)

function CreateTeamContainer(): JSX.Element {
	const dispatch = useDispatch()
	const history = useHistory()

	const { setTeam: setStoreTeamToEdit } = TeamToEditActions
	const { addTeam: addTeamToStore, updateTeam: updateStoreTeam } = TeamActions

	const { teamToEdit, teams } = useTypedSelector(['teamToEdit', 'teams'])

	const [{ data, loading }, execute] = useAxios('/search', { manual: true })

	const INITIAL_TEAM = teamToEdit.id ? teamToEdit : new Team()

	const [team, setTeam] = useState(INITIAL_TEAM)
	const [inputsWithError, setInputsWithError] = useState<string[]>([])
	const [availablePlayers, setAvailablePlayers] = useState<IPlayer[]>([])
	const [selectedPlayers, setSelectedPlayers] = useState<IPlayer[]>([])
	const [searchInput, setSearchInput] = useState('')
	const [debouncedSearch] = useDebounce(searchInput, 500)
	const [formation, setFormation] = useState(INITIAL_TEAM.formation)

	const selectPlayer = pipe(append, setSelectedPlayers)

	const pickId = prop('player_id')

	const removeSelectedPlayerFromAvailable = () => {
		if (!selectedPlayers.length) return

		const ids = selectedPlayers.map(pickId)

		const isIdSelected = pipe(overlook(pickId), flip(includes)(ids))

		setAvailablePlayers(filter(complement(isIdSelected)))
	}

	const updateTeam = (key: string) => (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { value } = e.target

		const isFantasy = team.type === 'fantasy'	

		const isTypeKey = key === 'type'

		const newType = isFantasy ? 'real' as const : 'fantasy' as const
		
		const payload = isTypeKey ? { type: newType } : { [key]: value }

		setTeam(mergeLeft(payload as Omit<typeof payload, 'tags'>))
	}

	const filterTagInIndex = pipe(equals, complement, flip)

	const evolveTeam = pipe(overlook(evolve), setTeam) as any

	const removeTag = (i: number) => () => {
		const transforms = {
			tags: pipeableFilter(filterTagInIndex(i))
		}

		evolveTeam(transforms)
	}

	const addTag = (val: string) => void evolveTeam({ tags: append(val) })

	const saveTeam = () => {
		const isTeamValid = validateTeam()

		if (!isTeamValid) return

		const nameExists = teams.some(eqProps('name', team))

		const errMessage = 'There is already a team with this name'

		if (!teamToEdit.name && nameExists) void displayError(errMessage)

		const teamToSave = { ...team, players: selectedPlayers, formation }

		const isEdit = Boolean(teamToEdit.name)

		const fnToDispatch = isEdit ? updateStoreTeam : addTeamToStore

		dispatch(fnToDispatch(teamToSave))

		displaySuccess(`Team ${isEdit ? 'updated' : 'created'}!`)

		setTimeout(() => history.push(routesEnum.MY_TEAMS), 500)

		setStoreTeamToEdit(new Team())
		setTeam(new Team())
	}

	const validateTeam = () => {
		const isNameValid = team.name.length > 3

		const isWebsiteValid = isValidURL(team.website)

		const withError = [
			isNameValid ? '' : 'name',
			isWebsiteValid ? '' : 'website'
		].filter(Boolean)

		const hasErrors = Boolean(withError.length)

		const errMess = 'Failed to save team, please check highlighted inputs'

		if (hasErrors) void displayError(errMess)

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

		const params = `players/search/${searchInput}`

		const url = `${BYPASS_CORS_PROXY}/${API}/${params}`

		const { hide } = displayLoading('Searching players...')

		execute({ url }).then(hide)
	}

	const reflectFetchedPlayers = () => {
		if (!data?.api) return

		const { players } = data.api

		const { length: len } = players

		const toast = len ? displaySuccess : displayError

		toast(`${len || 'No'} players found!`)

		setAvailablePlayers(players)
	}

	const handleSearchChange = pipe(
		overlook(path)(['target', 'value']),
		setSearchInput
	)

	const handleFormationChange = (opt: ISelectOption) => {
		const { value } = opt

		setSelectedPlayers([])
		setTeam(mergeRight({ players: [] }))

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
