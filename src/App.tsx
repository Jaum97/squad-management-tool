import { configure } from 'axios-hooks';
import React from 'react';
import { ConfigProvider } from 'react-avatar';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faPencilAlt, faSave, faShareAlt, faSort, faSortDown, faSortUp, faTrash
} from '@fortawesome/free-solid-svg-icons';

import { axiosInstance, cacheInstance } from './config/axios';
import Routes from './routes';
import { persistor, store } from './store';
import { ResetDefaultStyles } from './styles/defaults';

library.add(
	faSort,
	faSortUp,
	faSortDown,
	faPencilAlt,
	faTrash,
	faShareAlt,
	faSave
)

/**
 * Specifies which props to inject into your component.
 */
export function collect(
	connect: { dragSource: () => any },
	monitor: { isDragging: () => any }
) {
	return {
		// Call this function inside render()
		// to let React DnD handle the drag events:
		connectDragSource: connect.dragSource(),
		// You can ask the monitor about the current drag state:
		isDragging: monitor.isDragging()
	}
}

function App(): JSX.Element {
	configure({ axios: axiosInstance, cache: cacheInstance })

	const avatarColors = ['#c9c9c9', '#c9c9c9', '#c9c9c9']

	return (
		<Provider store={store}>
			<ResetDefaultStyles />
			<PersistGate persistor={persistor}>
				<DndProvider backend={HTML5Backend}>
					<ConfigProvider colors={avatarColors}>
						<Routes />
					</ConfigProvider>
				</DndProvider>
			</PersistGate>
		</Provider>
	)
}

export default App
