import React, { StrictMode } from 'react'
// import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/integration/react'

import Routes from './routes'
import { ResetDefaultStyles } from './styles/defaults'
// import { persistor, store } from './shared/store'

function App(): JSX.Element {
	return (
		<StrictMode>
			<ResetDefaultStyles />
			<Routes />
		</StrictMode>
	)
}

export default App
