import { generateSerial } from '../utils/serial'
import { IPlayer } from './player'

export type Formation = number[]

export interface ITeamPlayer extends IPlayer {
	position: number[]
}

export class Team {
	id: string
	name: string
	description: string
	website: string
	type: 'fantasy' | 'real'
	tags: string[]
	formation: Formation
	players: ITeamPlayer[]

	constructor(
		name = '',
		description = '',
		website = '',
		type = 'fantasy' as 'fantasy',
		tags = [] as string[],
		formation = [3, 4, 3],
		players = []
	) {
		this.name = name
		this.description = description
		this.website = website
		this.type = type
		this.tags = tags
		this.formation = formation
		this.players = players
		this.id = generateSerial(8)
	}
}
