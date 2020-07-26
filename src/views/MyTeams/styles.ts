import styled from 'styled-components'

export const Content = styled.div`
	display: flex;
	@media (max-width: 800px) {
		flex-direction: column;
	}
`

export const TransparentWrapper = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	padding: 16px;
	width: 50%;
	@media (max-width: 800px) {
		width: 100%;
	}
`

export const WrapperLeft = styled(TransparentWrapper)`
	margin-left: 8px;
	margin-right: 16px;
`

export const WrapperRight = styled(TransparentWrapper)`
	margin-left: 16px;
	margin-right: 8px;
`

export const SectionContainer = styled.div`
	align-items: center;
	background: white;
	border-radius: 12px;
	box-shadow: 2px 2px 4px #00000015;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	margin: 16px;
	padding: 16px;
	width: 100%;
`

export const SectionHeader = styled.div`
	align-items: center;
	border-bottom: 2px solid #f9f9f9;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 0px 16px;
	width: 100%;
`

export const SectionTitle = styled.h1`
	color: #470e8f;
	font-size: 24px;
	padding-bottom: 16px;
	font-weight: 700;
`
export const TeamsBody = styled.div`
	width: 100%;
	padding: 16px;
`

export const Top5Body = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
`

export const AddTeamButton = styled.div`
	align-items: center;
	background: linear-gradient(#b43f7f, #873583 65%);
	border-radius: 6px;
	box-shadow: 0px 2px 4px #b43f7f;
	display: flex;
	flex-direction: column;
	height: 36px;
	justify-content: center;
	margin-bottom: 16px;
	width: 36px;
	cursor: pointer;

	&:hover {
		box-shadow: inset -2px -2px 8px rgba(135, 53, 131, 1),
			inset -2px -2px 12px rgba(135, 53, 131, 0.5),
			inset 2px 2px 4px rgba(135, 53, 131, 0.1),
			inset 2px 2px 8px rgba(0, 0, 0, 0.15);
	}
`

export const TeamButtonText = styled.p`
	color: white;
	font-size: 24px;
`

export const ListContainer = styled.div`
	width: 50%;
`

export const GradientSectionContainer = styled(SectionContainer)`
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
	border-right: 1px solid #949494;
`

export const CircleOutline = styled.div`
	width: 64px;
	height: 64px;
	border-radius: 100%;
	border: 1px solid #949494;
	margin-left: auto;
	margin-right: auto;
	position: absolute;
	right: 45%;
	left: 45%;
`

export const RightSide = styled.div`
	width: 50%;
	display: flex;
`

export const Player = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	position: relative;
	margin: 40px;
`

export const AvatarContainer = styled.div`
	background: #b43f7f;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	width: 148px;
	height: 148px;
`

export const BadgeContainer = styled.div`
	border-bottom: 1px solid white;
	position: absolute;
	top: 25%;
	width: 48px;
	right: 0;
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
