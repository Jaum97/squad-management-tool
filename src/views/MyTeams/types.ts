import { routesEnum } from '../../routes/enum';
import { Team } from '../../shared/interfaces/team';

export default interface IProps {}

interface HighlightPlayer {
	name: string
	percentage: number
}

export interface HighLightTeam {
	id: string
	avgAge: string
	name: string
}

export interface IViewProps {
	highestAvgAgeTeams: HighLightTeam[]
	leastPicked: HighlightPlayer
	lowestAvgAgeTeams: HighLightTeam[]
	mostPicked: HighlightPlayer
	teams: Team[]
	addTeam: () => void
	removeTeam: (teamName: string) => () => void
	editTeam: (teamName: string) => () => void
}
