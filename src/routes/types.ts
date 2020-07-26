import { Maybe } from '../shared/interfaces/common'

export interface IRouteData {
	children: JSX.Element
	displayOnNavBar: Maybe<boolean>
	exact: boolean
	isPrivate: Maybe<boolean>
	key: string
	name: Maybe<string>
	path: string
}
