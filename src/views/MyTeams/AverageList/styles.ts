import styled from 'styled-components'

export const ListWrapper = styled.div`
	margin: 0px 16px;
`

export const ListTitle = styled.h2`
	font-size: 18px;
	color: #373837;
`

export const ListItem = styled.div`
	cursor: pointer;
	background: white;
	border-radius: 6px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	list-style-type: none;
	margin-bottom: 4px;
	padding: 12px 16px;
	&:last-child {
		margin-bottom: 0px;
	}
	&:hover {
		box-shadow: inset -2px -2px 8px rgba(255, 255, 255, 1),
			inset -2px -2px 12px rgba(255, 255, 255, 0.5),
			inset 2px 2px 4px rgba(255, 255, 255, 0.1),
			inset 2px 2px 8px rgba(0, 0, 0, 0.15);
	}
`

export const UnorderedList = styled.div`
	border-radius: 6px;
	background: #e3e1e1;
	padding: 4px;
`

export const ItemName = styled.span`
	font-weight: 300;
	font-size: 12px;
`

export const ItemValue = styled.span`
	font-weight: 700;
	font-size: 12px;
`
