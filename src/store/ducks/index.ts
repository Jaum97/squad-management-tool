import { combineReducers, Reducer, ReducersMapObject } from 'redux'

import { IStore } from '../types'
// import { IActionsCreators } from '../../interfaces/action'
// import { IStore } from '../../interfaces/store'
import selectedTeam from './selectedTeam'

const reducers: ReducersMapObject<IStore> = {
	selectedTeam
}

export const Reducers: Reducer = combineReducers(reducers)
