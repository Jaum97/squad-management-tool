import { Nullable } from './common';

export interface IPlayer {
	age: number
	birth_country: string
	birth_date: string
	birth_place: string
	firstname: string
	lastname: string
	nationality: string
	number: Nullable<any>
	player_id: number
	player_name: string
	weight: string
}
