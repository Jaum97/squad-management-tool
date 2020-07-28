import { Formation, Team } from '../../../shared/interfaces/team'
import { IPlayer } from '../../../shared/interfaces/player'

export interface IProps {
	formation: Formation
	team: Team
	selectPlayer: (player: IPlayer) => void
}
