import React, { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Routes from './routes'
import { persistor, store } from './store'
import { ResetDefaultStyles } from './styles/defaults'
import { configure } from 'axios-hooks'
import { axiosInstance, cacheInstance } from './config/axios'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
	faSort,
	faSortUp,
	faSortDown,
	faPencilAlt,
	faTrash,
	faShareAlt
} from '@fortawesome/free-solid-svg-icons'

import { ConfigProvider } from 'react-avatar'

library.add(faSort, faSortUp, faSortDown, faPencilAlt, faTrash, faShareAlt)

function App(): JSX.Element {
	configure({ axios: axiosInstance, cache: cacheInstance })

	const avatarColors = ['#c9c9c9', '#c9c9c9', '#c9c9c9']

	return (
		<StrictMode>
			<ResetDefaultStyles />
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<ConfigProvider colors={avatarColors}>
						<Routes />
					</ConfigProvider>
				</PersistGate>
			</Provider>
		</StrictMode>
	)
}

export default App
