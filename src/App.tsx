import { configure } from 'axios-hooks'
import React, { StrictMode } from 'react'
import { ConfigProvider } from 'react-avatar'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
	faPencilAlt,
	faShareAlt,
	faSort,
	faSortDown,
	faSortUp,
	faTrash
} from '@fortawesome/free-solid-svg-icons'

import { axiosInstance, cacheInstance } from './config/axios'
import Routes from './routes'
import { persistor, store } from './store'
import { ResetDefaultStyles } from './styles/defaults'

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
