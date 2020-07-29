import { IPlayer } from '../../../../shared/interfaces/player'
import { ITeamPlayer } from '../../../../shared/interfaces/team'
import { Maybe } from '../../../../shared/interfaces/common'

export interface IProps {
	row: number
	col: number
	formation: number[]
	editingPlayer: Maybe<ITeamPlayer>
	selectPlayer: (player: IPlayer) => void
}
