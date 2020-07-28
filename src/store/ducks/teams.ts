// import { Action } from 'redux'
import { createActions, createReducer } from 'reduxsauce'

import { Team } from '../../shared/interfaces/team'

const INITIAL_STATE: Team[] = []

const add = (state = INITIAL_STATE, action: { team: Team }) => [
	...state,
	action.team
]

const remove = (state = INITIAL_STATE) => INITIAL_STATE

const actions = {
	addTeam: ['team'],
	removeTeam: []
}

export const { Types, Creators } = createActions(actions)

const handlers = {
	[Types.ADD_TEAM]: add,
	[Types.REMOVE_TEAM]: remove
}

export default createReducer(INITIAL_STATE, handlers)
