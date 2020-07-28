import styled from 'styled-components'

import { colors } from '../../styles/colors'
import { GradientSectionContainer } from '../MyTeams/styles'
import { IInputStyledProps } from './types'

export const Wrapper = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 16px;
	width: 100%;
	@media (max-width: 800px) {
		width: 100%;
	}
`

export const RowContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	padding: 16px 0px;
`

export const ColumnContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0px 8px;
	padding: 0px 64px;
	&:first-child {
		padding-left: 128px;
	}
	&:last-child {
		padding-right: 128px;
	}

	width: 50%;
`

export const Title = styled.h1`
	color: grey;
	font-size: 24px;
`

export const InputContainer = styled.div`
	margin: 8px 0px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`

export const TagsContainer = styled(InputContainer)`
	margin: 0px 0px 0px 0px;
`

export const TypeContainer = styled(InputContainer)`
	margin: 38px 0px 0px 0px;
`

export const RadioButtonsContainer = styled.div`
	margin: 0px 0px 8px 0px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
`

export const Spacer = styled.div`
	width: 32px;
`

export const InputTitle = styled.h2<IInputStyledProps>`
	color: ${({ invalid: i }) => (i ? colors.secondary : colors.darkGrey)};
	font-size: 16px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`

export const Input = styled.input<IInputStyledProps>`
	padding: 6px 12px;
	width: 100%;
	border: solid 1px ${({ invalid: i }) => (i ? colors.secondary : '#d1d1d1')};
	color: #d1d1d1;
	border-radius: 3px;
	&:valid {
		color: ${colors.darkGrey};
	}
`

export const Textarea = styled.textarea`
	resize: none;
	padding: 6px 12px;
	width: 100%;
	border: solid 1px #d1d1d1;
	color: #d1d1d1;
	border-radius: 3px;
`

export const TextAreaContainer = styled.div`
	position: relative;
	width: 100%;
`

export const Tag = styled.span`
	border-radius: 12px;
	margin: 2px 4px;
	background: ${colors.secondary};
	padding: 4px 8px;
	font-size: 12px;
	color: white;
`

export const TeamFormationContainer = styled(GradientSectionContainer)`
	flex-direction: column;
	margin: 16px 0px;
`

export const FormationSectionContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	justify-content: space-around;
`

export const SaveButton = styled.button`
	border-radius: 3px;
	border: 1px solid #c43583;
	background: linear-gradient(#c43583, #592880);
	color: white;
	text-align: center;
	font-size: 18px;
	padding: 8px 16px;
	cursor: pointer;
	&:hover {
		box-shadow: inset -2px -2px 8px rgba(135, 53, 131, 1),
			inset -2px -2px 12px rgba(135, 53, 131, 0.5),
			inset 2px 2px 4px rgba(135, 53, 131, 0.1),
			inset 2px 2px 8px rgba(0, 0, 0, 0.15);
	}
`
