import { DragObjectWithType } from 'react-dnd'

import { Maybe } from '../../../../shared/interfaces/common'
import { IPlayer } from '../../../../shared/interfaces/player'
import { ITeamPlayer } from '../../../../shared/interfaces/team'

export interface IProps {
	row: number
	col: number
	formation: number[]
	editingPlayer: Maybe<ITeamPlayer>
	selectPlayer: (player: IPlayer) => void
}

export type IDropParamType = DragObjectWithType & { player: ITeamPlayer }
