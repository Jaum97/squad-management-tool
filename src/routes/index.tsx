import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import { routesData } from './data'
import { routesEnum } from './enum'
import { FullScreen } from '../styles/defaults'

function Routes(): JSX.Element {
	return (
		<BrowserRouter>
			<Switch>
				{routesData.map(({ children, ...rest }) => (
					<Route {...rest}>
						<FullScreen>{children}</FullScreen>
					</Route>
				))}
				<Redirect from={'*'} to={routesEnum.MY_TEAMS} />
			</Switch>
		</BrowserRouter>
	)
}

export default Routes
