// import { Action } from 'redux'
import { createActions, createReducer } from 'reduxsauce';

import { Team } from '../../shared/interfaces/team';

const INITIAL_STATE: Team[] = []

const add = (state = INITIAL_STATE, action: { team: Team }) => {
	console.log({ state, team: action.team })

	return [...state, action.team]
}

const update = (state = INITIAL_STATE, action: { team: Team }) => {
	const { team } = action

	const updated = state.map((t) => (t.id === team.id ? team : t))

	return updated
}

const remove = (state = INITIAL_STATE, action: { team: Team }) => {
	const { team } = action

	const updated = state.filter((t) => !(t.id === team.id))

	return updated
}

const actions = {
	addTeam: ['team'],
	updateTeam: ['team'],
	removeTeam: ['team']
}

export const { Types, Creators } = createActions(actions)

const handlers = {
	[Types.ADD_TEAM]: add,
	[Types.UPDATE_TEAM]: update,
	[Types.REMOVE_TEAM]: remove
}

export default createReducer(INITIAL_STATE, handlers)
