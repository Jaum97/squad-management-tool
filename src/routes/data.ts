import { createElement } from 'react'

import CreateTeamContainer from '../views/CreateTeam'
import MyTeam from '../views/MyTeam'
import { routesEnum } from './enum'
import { IRouteData } from './types'

export const routesData: IRouteData[] = [
	{
		children: createElement(MyTeam),
		displayOnNavBar: true,
		exact: true,
		isPrivate: false,
		key: routesEnum.MY_TEAMS,
		name: 'My Teams',
		path: routesEnum.MY_TEAMS
	},
	{
		children: createElement(CreateTeamContainer),
		displayOnNavBar: true,
		exact: true,
		isPrivate: false,
		key: routesEnum.CREATE_TEAM,
		name: 'Create Team',
		path: routesEnum.CREATE_TEAM
	}
]
