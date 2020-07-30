export interface IProps {
	tags: string[]
	removeTag: (i: number) => () => void
	addTag: (value: string) => void
}
