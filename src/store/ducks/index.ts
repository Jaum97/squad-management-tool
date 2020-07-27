import { combineReducers, Reducer, ReducersMapObject } from 'redux'

import { IStore } from '../types'
// import { IActionsCreators } from '../../interfaces/action'
// import { IStore } from '../../interfaces/store'
import teams from './teams'

const reducers: ReducersMapObject<IStore> = {
	teams
}

export const Reducers: Reducer = combineReducers(reducers)
