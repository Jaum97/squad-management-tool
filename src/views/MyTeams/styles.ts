import styled from 'styled-components'

import { colors } from '../../styles/colors'
import { Row } from '../../styles/grid'

export const Content = styled(Row)`
	justify-content: center;
`

export const TransparentWrapper = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 16px;
`

export const WrapperLeft = styled(TransparentWrapper)`
	margin-left: 8px;
	margin-right: 16px;
`

export const WrapperRight = styled(TransparentWrapper)`
	margin-left: 16px;
	margin-right: 8px;
`

export const TeamsBody = styled.div`
	padding: 16px;
	width: 100%;
`

export const Top5Body = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	width: 100%;
`

export const ListContainer = styled.div`
	width: 50%;
	&:last-child {
		@media (max-width: 768px) {
			display: none;
		}
	}
`

export const GradientSectionContainer = styled.div`
	background: linear-gradient(#c43583, #592880);
	border-radius: 12px;
	display: flex;
	flex-direction: row;
	padding: 0px 16px;
	position: relative;
	width: 100%;
`

export const LeftSide = styled.div`
	border-right: 1px solid #949494;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 50%;
	@media (max-width: 768px) {
		width: 100%;
		border-right: 1px solid transparent;
	}
`

export const CircleOutline = styled.div`
	border-radius: 100%;
	border: 1px solid #949494;
	height: 64px;
	left: 0;
	margin-left: auto;
	margin-right: auto;
	position: absolute;
	right: 0;
	top: 40%;
	width: 64px;
	@media (max-width: 768px) {
		opacity: 0;
	}
`

export const RightSide = styled.div`
	display: flex;
	opacity: 1;
	width: 50%;
	@media (max-width: 768px) {
		display: none;
	}
`

export const Player = styled.div`
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 40px;
	position: relative;
	@media (max-width: 768px) {
		align-items: center;
	}
`

export const AvatarContainer = styled.div`
	align-items: center;
	background: ${colors.secondary};
	border-radius: 50%;
	display: flex;
	height: 148px;
	justify-content: center;
	position: relative;
	width: 148px;
`

export const BadgeContainer = styled.div`
	border-bottom: 1px solid white;
	filter: none;
	position: absolute;
	right: -35%;
	top: 0;
	width: 48px;
`

export const PercentageBadge = styled.span`
	color: white;
	font-size: 18px;
	font-weight: 700;
`

export const MPPContainer = styled.div`
	align-items: center;
	border-radius: 50%;
	border-width: 2px;
	border: 2px dashed #9c9998;
	display: flex;
	height: 156px;
	justify-content: center;
	width: 156px;
	filter: drop-shadow(10px 10px 10px #520cab)
		drop-shadow(-10px -10px 10px #520cab);
`

export const AvatarTitle = styled.span`
	color: white;
	font-size: 24px;
	font-weight: 700;
	padding-bottom: 24px;
`

export const Placeholder = styled.div<{ height?: number }>`
	align-items: center;
	color: ${colors.darkGrey};
	display: flex;
	flex-direction: column;
	font-size: 20px;
	height: ${({ height: h }) => h || 120}px;
	justify-content: center;
	width: 100%;
`
