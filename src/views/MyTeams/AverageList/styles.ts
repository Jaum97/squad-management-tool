import styled from 'styled-components'

export const ListWrapper = styled.div`
	margin: 0px 16px;
`

export const ListTitle = styled.h2`
	color: #373837;
	font-size: 18px;
`

export const ListItem = styled.div`
	background: white;
	border-radius: 6px;
	cursor: pointer;
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
	background: #e3e1e1;
	border-radius: 6px;
	padding: 4px;
`

export const ItemName = styled.span`
	font-size: 12px;
	font-weight: 300;
`

export const ItemValue = styled.span`
	font-size: 12px;
	font-weight: 700;
`
