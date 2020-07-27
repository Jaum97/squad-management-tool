// import { Action } from 'redux'
import { createActions, createReducer } from 'reduxsauce'

const INITIAL_STATE: any = []

const add = (state = INITIAL_STATE, action: any) => [...state, action.team]

const remove = (state = INITIAL_STATE, action: any) => INITIAL_STATE

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
