import { ChangeEvent } from 'react'

export interface IStyledSpanExtraProps {
	checked: boolean
}

export interface IProps {
	checked: boolean
	text: string
	onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}
