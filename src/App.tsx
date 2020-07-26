import React, { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Routes from './routes'
import { persistor, store } from './store'
import { ResetDefaultStyles } from './styles/defaults'
import { configure } from 'axios-hooks'
import { axiosInstance, cacheInstance } from './config/axios'

function App(): JSX.Element {
	configure({ axios: axiosInstance, cache: cacheInstance })

	return (
		<StrictMode>
			<ResetDefaultStyles />
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<Routes />
				</PersistGate>
			</Provider>
		</StrictMode>
	)
}

export default App
