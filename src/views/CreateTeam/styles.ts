import styled from 'styled-components'

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

export const RadioButtonsContainer = styled.div`
	margin: 8px 0px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
`

export const Spacer = styled.div`
	width: 32px;
`

export const InputTitle = styled.h2`
	color: #b43f7f;
	font-size: 16px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`

export const Input = styled.input`
	padding: 6px 12px;
	width: 100%;
	border: solid 1px #d1d1d1;
	color: #d1d1d1;
	border-radius: 3px;
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

export const TagsContainer = styled.div`
	position: absolute;
	display: flex;
	flex-wrap: wrap;
	top: 10px;
	left: 10px;
`

export const Tag = styled.span`
	border-radius: 12px;
	margin: 2px 4px;
	background: #b43f7f;
	padding: 4px 8px;
	font-size: 12px;
	color: white;
`
