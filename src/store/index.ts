import { createStore, Reducer } from 'redux'
import { Persistor, persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { Reducers } from './ducks'

const persistConfig = {
	key: 'Squad Management Tool Venturus',
	storage,
	whitelist: ['teams']
}

const persistedReducer: Reducer = persistReducer(persistConfig, Reducers)

//TODO: Type properly : Store<IStore>
export const store: any = createStore(persistedReducer)
export const persistor: Persistor = persistStore(store)
