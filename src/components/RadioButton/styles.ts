import styled from 'styled-components'

import { useLinearGradient } from '../../shared/utils/styles'
import { colors } from '../../styles/colors'
import { IStyledSpanExtraProps } from './types'

export const RadioLabel = styled.label`
	cursor: pointer;
	color: grey;
	display: flex;
	font-size: 16px;
	align-items: center;
	position: relative;
	margin-bottom: 16px;
`

export const RadioOutline = styled.span`
	width: 16px;
	height: 16px;
	border-radius: 50%;
	border: 1px solid #949494;
	display: block;
	margin-right: 8px;
	transition: all 0.4s;
`

export const RadioCheck = styled.span<IStyledSpanExtraProps>`
	width: 12px;
	height: 12px;
	margin-left: 3px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${useLinearGradient(
		colors.secondary,
		colors.primary + ' 55%',
		'to bottom'
	)};
	position: absolute;
	opacity: ${({ checked: c }) => (c ? 1 : 0)};
	transition: all 0.4s;
`

export const RadioInput = styled.input`
	cursor: pointer;
	/* opacity: 0; */
	display: none;
`
