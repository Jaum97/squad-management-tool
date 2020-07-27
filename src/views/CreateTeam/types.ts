import { ChangeEvent } from 'react'

export default interface IProps {}

export interface IInputStyledProps {
	invalid?: boolean
}

export interface ISelectOption {
	label: string
	value: string
}

export interface IViewProps {
	formations: ISelectOption[]
	team: ITeam
	inputsWithError: string[]
	addTag: (value: string) => void
	removeTag: (i: number) => () => void
	saveTeam: () => void
	updateTeam: (
		key: string
	) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export type Formation = [number, number, number, number]

export interface ITeam {
	name: string
	description: string
	website: string
	type: 'fantasy' | 'real'
	tags: string[]
	formation: Formation
	formationLayout: string
}
