import { IPlayer } from '../../../../shared/interfaces/player'
import { ITeamPlayer } from '../../../../shared/interfaces/team'
import { Maybe } from '../../../../shared/interfaces/common'

export interface IProps {
	row: number
	column: number
	formation: number[]
	player: Maybe<ITeamPlayer>
	selectPlayer: (player: IPlayer) => void
}
