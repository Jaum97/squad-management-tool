import { HighLightTeam } from '../types'

export interface IProps {
	title: string
	list: HighLightTeam[]
	action: (teamName: string) => () => void
}
