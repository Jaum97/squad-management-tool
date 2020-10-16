import Select from 'react-select';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';

import { colors } from '../../styles/colors';
import { IInputStyledProps } from './types';

export const Wrapper = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 16px;
	margin: 0px 16px;
`

export const RowContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	padding: 16px 0px;
`

export const SquadInfoContainer = styled(RowContainer)`
	@media (max-width: 992px) {
		flex-direction: row-reverse;
		width: auto;
		flex-direction: column-reverse;
		justify-content: center;
		align-items: center;
	}
`

export const TeamInfoContainer = styled(RowContainer)`
	@media (max-width: 992px) {
		flex-direction: row;
		width: auto;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`

export const Center = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	/* width: 100%; */
	@media (max-width: 560px) {
		width: auto;
	}
`

export const ColumnContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0px 8px;

	padding: 0px 64px;

	width: 50%;
	@media (max-width: 768px) {
		max-width: 80%;
	}
	@media (max-width: 992px) {
		width: 100%;
	}
	@media (min-width: 1200px) {
		&:first-child {
			padding-left: 8rem;
		}
		&:last-child {
			padding-right: 8rem;
		}
	}
`

export const Title = styled.h1`
	color: ${colors.grey};
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
	@media (max-width: 992px) {
		max-width: 100%;
	}
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
	@media (max-width: 560px) {
		padding: 6px 0px;
	}
`

export const Textarea = styled.textarea`
	resize: none;
	padding: 6px 12px;
	width: 100%;
	border: solid 1px #d1d1d1;
	color: #d1d1d1;
	border-radius: 3px;
	&:valid {
		color: ${colors.darkGrey};
	}
	@media (max-width: 560px) {
		padding: 6px 0px;
	}
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

export const FormationSectionContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	justify-content: space-around;
`

export const CenterFormationSectionContainer = styled(
	FormationSectionContainer
)`
	margin-top: 12px;
`

export const SaveButton = styled.button`
	width: 100%;
	border-radius: 3px;
	border: 1px solid ;
	background: linear-gradient(#3f8bb4, #357587);
	color: white;
	text-align: center;
	font-size: 18px;
	padding: 8px 16px;
	cursor: pointer;
	&:hover {
		box-shadow: inset -2px -2px 8px #3f8bb490,
			inset -2px -2px 12px #3f8bb440,
			inset 2px 2px 4px #3f8bb410,
			inset 2px 2px 8px rgba(0, 0, 0, 0.15);
	}
	@media (max-width: 992px) {
		opacity: 0;
	}
`

export const SelectTitle = styled.h2`
	color: ${colors.darkGrey};
	font-size: 14px;
	margin-right: 12px;
`

export const FormationSelectContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
`

export const FormationSelect = styled(Select)`
	min-width: 164px;
	z-index: 4;
`

export const SaveButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
`

export const PlayerCardsContainer = styled.div<{ border: boolean }>`
	width: 100%;
	border-bottom: 1px solid
		${({ border: b }) => (b ? '#d1d1d1' : 'transparent')};
	max-height: 740px;
	overflow-y: clip;
	overflow-x: hidden;
	@media (max-width: 992px) {
		max-height: 100px;
		margin-bottom: 16px;
	}
`

export const SearchPlayerInputContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
`
export const FloatSaveButton = styled.button`
	background: linear-gradient(#3f8bb4, #357587);
	border-radius: 3px;
	border-radius: 50px;
	border: 1px solid #3f8bb4;
	bottom: 60px;
	box-shadow: 2px 2px 3px #00000015;
	color: white;
	cursor: pointer;
	font-size: 18px;
	height: 60px;
	padding: 8px 16px;
	position: fixed;
	right: 40px;
	text-align: center;
	text-align: center;
	width: 60px;
	opacity: 0;
	z-index: 2;
	&:hover {
		box-shadow: inset -2px -2px 8px #3f8bb490,
			inset -2px -2px 12px #3f8bb440,
			inset 2px 2px 4px #3f8bb410,
			inset 2px 2px 8px rgba(0, 0, 0, 0.15);
	}
	@media (max-width: 992px) {
		opacity: 1;
	}
`

export const PlayerTooltip = styled(ReactTooltip)`
	background-color: white !important;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	border: 1px solid ${colors.primary} !important;
	color: ${colors.darkGrey} !important;
	opacity: 1 !important;
`
