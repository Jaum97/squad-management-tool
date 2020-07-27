export default interface IProps {}

export interface IViewProps {}

export type Formation = [number, number, number, number]

export interface ITeam {
	name: string
	description: string
	website: string
	type: 'fantasy' | 'real'
	tags: string[]
	formationLayout: string
	formation: Formation
}
