// import { Action } from 'redux'
import { createActions, createReducer } from 'reduxsauce'

const INITIAL_STATE: any = {}

const set = (state = INITIAL_STATE, action: any) => action.team

const reset = (state = INITIAL_STATE, action: any) => INITIAL_STATE

const actions = {
	setSelectedTeam: ['team'],
	resetSelectedTeam: []
}

export const { Types, Creators } = createActions(actions)

const handlers = {
	[Types.SET_SELECTED_TEAM]: set,
	[Types.RESET_SELECTED_TEAM]: reset
}

export default createReducer(INITIAL_STATE, handlers)
