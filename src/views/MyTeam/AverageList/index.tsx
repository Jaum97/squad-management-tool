import React from 'react'
import {
	ListWrapper,
	ListTitle,
	ListItem,
	UnorderedList,
	ItemName,
	ItemValue
} from './styles'
import { MOCKED_LIST } from './data'

// import IProps from './types'

function AverageList(props: any): JSX.Element {
	const { title } = props

	return (
		<ListWrapper>
			<ListTitle>{title}</ListTitle>
			<UnorderedList>
				{MOCKED_LIST.map((item, i) => (
					<ListItem key={i}>
						<ItemName>{item.name}</ItemName>
						<ItemValue>{item.value}</ItemValue>
					</ListItem>
				))}
			</UnorderedList>
		</ListWrapper>
	)
}

export default AverageList
