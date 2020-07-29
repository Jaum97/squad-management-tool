import styled from 'styled-components'

import { colors } from '../../../styles/colors'

export const PlayerCardContainer = styled.div`
	background: linear-gradient(#f9f9f9, #cccccc);
	border-radius: 3px;
	border: 1px dashed #cccccc;
	display: flex;
	flex-direction: row;
	max-width: 100%;
	align-items: center;
	justify-content: space-between;
	margin: 8px 0px;
	padding: 12px;
	&:hover {
		box-shadow: inset -2px -2px 8px rgba(255, 255, 255, 1),
			inset -2px -2px 12px rgba(255, 255, 255, 0.5),
			inset 2px 2px 4px rgba(255, 255, 255, 0.1),
			inset 2px 2px 8px rgba(0, 0, 0, 0.15);
	}
`

export const CardLeftSide = styled.div`
	display: flex;
	flex-direction: column;
`

export const FieldWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`

export const PlayerField = styled.span`
	color: ${colors.secondary};
	font-size: 14px;
	font-weight: 300;
	padding: 4px;
`

export const FieldLabel = styled.span`
	color: ${colors.darkGrey};
	font-size: 14px;
	font-weight: 700;
`
