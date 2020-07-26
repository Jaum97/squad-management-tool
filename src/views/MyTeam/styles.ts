import styled from 'styled-components'

export const Page = styled.div`
	padding: 24px;
	display: flex;
	/* flex-direction: row; */
`

export const TransparentWrapper = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	padding: 16px;
	width: 50%;
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
	display: flex;
	flex-direction: column;
	/* width: 100%; */
	/* height: 400px; */
	width: 100%;
	justify-content: flex-start;
	padding: 16px;
	margin: 16px;
	box-shadow: 2px 2px 4px #00000015;
`

export const SectionHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border-bottom-color: #f9f9f9;
	border-bottom-style: solid;
	border-bottom-width: 1px;
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
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 50%;
	margin: 0px 8px;
`
