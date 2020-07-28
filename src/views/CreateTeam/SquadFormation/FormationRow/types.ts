import { IPlayer } from '../../../../shared/interfaces/player'
import { ITeamPlayer } from '../../../../shared/interfaces/team'

export interface IProps {
	length: number
	row: number
	formation: number[]
	players: ITeamPlayer[]
	selectPlayer: (player: IPlayer) => void
}
