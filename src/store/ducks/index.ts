import { combineReducers, Reducer, ReducersMapObject } from 'redux';

import { IStore } from '../types';
import teams from './teams';
import teamToEdit from './teamToEdit';

const reducers: ReducersMapObject<IStore> = {
	teams,
	teamToEdit
}

export const Reducers: Reducer = combineReducers(reducers)
