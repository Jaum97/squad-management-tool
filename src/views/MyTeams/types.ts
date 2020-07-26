import { routesEnum } from '../../routes/enum'

export default interface IProps {}

export interface IViewProps {
	navigateTo: (r: keyof typeof routesEnum) => () => void
}
