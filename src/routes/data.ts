import { createElement } from 'react'

import { IRouteData } from './types'
import MyTeam from '../views/MyTeam'
import CreateTeamContainer from '../views/CreateTeam'
import { routesEnum } from './enum'

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
