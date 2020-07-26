import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import { FullScreen } from '../styles/defaults'
import { routesData } from './data'
import { routesEnum } from './enum'

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
