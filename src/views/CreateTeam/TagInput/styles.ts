import styled from 'styled-components'

import { colors } from '../../../styles/colors'

export const InputTagContainer = styled.div`
	background: white;
	border: 1px solid #d6d6d6;
	border-radius: 3px;
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	padding: 5px 5px;
`
export const InputTagList = styled.ul`
	display: inline-flex;
	flex-wrap: wrap;
	margin: 0;
	padding: 0;
	width: 100%;
`

export const InputTagListItem = styled.li`
	align-items: center;
	background: ${colors.secondary};
	border-radius: 20px;
	color: white;
	display: flex;
	max-height: 20px;
	font-size: 14px;
	font-weight: 300;
	list-style: none;
	margin-bottom: 5px;
	margin-right: 5px;
	padding: 6px 12px;
`

export const InputTagButton = styled.button`
	align-items: center;
	background: transparent;
	border-radius: 50%;
	border: none;
	color: white;
	cursor: pointer;
	display: flex;
	font-size: 24px;
	height: 15px;
	justify-content: center;
	line-height: 0;
	margin-left: 12px;
	padding: 0;
	transform: rotate(45deg);
	width: 15px;
	&:hover {
		opacity: 0.5;
	}
`

export const InputTagInputContainer = styled.li`
	background: none;
	list-style: none;
	flex-grow: 1;
	padding: 0;
`

export const InputTagInput = styled.input`
	border: none;
	width: 100%;
	padding-top: 6px;
	padding-bottom: 60px;
`
