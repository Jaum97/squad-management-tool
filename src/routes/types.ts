import { Maybe } from '../shared/interfaces/common'

export interface IRouteData {
	children: JSX.Element
	exact: boolean
	key: string
	name: Maybe<string>
	path: string
}
