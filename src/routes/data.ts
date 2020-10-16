import { createElement } from 'react';

import CreateTeamContainer from '../views/CreateTeam';
import MyTeams from '../views/MyTeams';
import { routesEnum } from './enum';
import { IRouteData } from './types';

export const routesData: IRouteData[] = [
	{
		children: createElement(MyTeams),
		exact: true,
		key: routesEnum.MY_TEAMS,
		name: 'My Teams',
		path: routesEnum.MY_TEAMS
	},
	{
		children: createElement(CreateTeamContainer),
		exact: true,
		key: routesEnum.CREATE_TEAM,
		name: 'Create Team',
		path: routesEnum.CREATE_TEAM
	}
]
