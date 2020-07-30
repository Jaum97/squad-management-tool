import styled from 'styled-components'

import { useLinearGradient } from '../../shared/utils/styles'
import { colors } from '../../styles/colors'

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
export const AddTeamButton = styled.div`
	align-items: center;
	background: ${useLinearGradient(
		colors.secondary,
		colors.primary + ' 65%',
		'to bottom'
	)};
	border-radius: 6px;
	box-shadow: 0px 2px 4px ${colors.secondary};
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
