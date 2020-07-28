import { routesEnum } from '../../routes/enum'
import { Team } from '../../shared/interfaces/team'

export default interface IProps {}

export interface IViewProps {
	teams: Team[]
	editTeam: (teamName: string) => () => void
	addTeam: () => void
}
