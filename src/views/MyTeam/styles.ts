import styled from 'styled-components'

export const Page = styled.div`
	padding: 24px;
	display: flex;
	/* flex-direction: row; */
`

export const SectionContainer = styled.div`
	align-items: center;
	background: white;
	border-radius: 12px;
	display: flex;
	flex-direction: column;
	height: 400px;
	justify-content: flex-start;
	min-height: 72px;
	padding: 16px;
	width: 50%;
	margin: 0px 8px;
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
export const SectionBody = styled.div`
	padding: 16px;
`

export const AddTeamButton = styled.div`
	align-items: center;
	background: linear-gradient(#b43f7f, #873583 65%);
	border-radius: 6px;
	box-shadow: 0px 2px 4px #b43f7f;
	display: flex;
	flex-direction: column;
	height: 24px;
	justify-content: center;
	margin-bottom: 16px;
	width: 24px;
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
	font-size: 18px;
`
