import { createActions, createReducer } from 'reduxsauce';

import { Team } from '../../shared/interfaces/team';

const INITIAL_STATE = new Team()

const set = (state: Team = INITIAL_STATE, action: { team: Team }): Team =>
	action.team

const update = (state: Team = INITIAL_STATE, action: { team: Team }): Team => ({
	...state,
	...action.team
})

const actions = {
	setTeam: ['team'],
	updateTeam: ['team']
}

export const { Types, Creators } = createActions(actions)

const handlers = {
	[Types.SET_TEAM]: set,
	[Types.UPDATE_TEAM]: update
}

export default createReducer(INITIAL_STATE, handlers)
