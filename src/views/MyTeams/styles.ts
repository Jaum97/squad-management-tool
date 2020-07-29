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
	width: 100%;
	padding: 16px;
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
	border-radius: 12px;
	flex-direction: row;
	display: flex;
	width: 100%;
	padding: 0px 16px;
	background: linear-gradient(#c43583, #592880);
	position: relative;
`

export const LeftSide = styled.div`
	width: 50%;
	flex-direction: column;
	display: flex;
	justify-content: center;
	border-right: 1px solid #949494;
	@media (max-width: 768px) {
		width: 100%;
		border-right: 1px solid transparent;
	}
`

export const CircleOutline = styled.div`
	width: 64px;
	height: 64px;
	border-radius: 100%;
	border: 1px solid #949494;
	margin-left: auto;
	margin-right: auto;
	position: absolute;
	top: 40%;
	right: 0;
	left: 0;
	@media (max-width: 768px) {
		opacity: 0;
	}
`

export const RightSide = styled.div`
	width: 50%;
	display: flex;
	opacity: 1;
	@media (max-width: 768px) {
		display: none;
	}
`

export const Player = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	position: relative;
	margin: 40px;
	@media (max-width: 768px) {
		align-items: center;
	}
`

export const AvatarContainer = styled.div`
	background: ${colors.secondary};
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	width: 148px;
	height: 148px;
	position: relative;
`

export const BadgeContainer = styled.div`
	border-bottom: 1px solid white;
	position: absolute;
	top: 0;
	width: 48px;
	right: -35%;
	filter: none;

	/* @media (max-width: 768px) {
		right: 25%;
	} */
`

export const PercentageBadge = styled.span`
	color: white;
	font-size: 18px;
	font-weight: 700;
`

export const MPPContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border: 2px dashed #9c9998;
	border-radius: 50%;
	border-width: 2px;
	height: 156px;
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
	/* word-wrap: break-word; */
`
