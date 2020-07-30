import React from 'react'

import {
	ItemName,
	ItemValue,
	ListItem,
	ListTitle,
	ListWrapper,
	UnorderedList
} from './styles'
import { IProps } from './types'

function AverageList(props: IProps): JSX.Element {
	const { title, list, action } = props

	return (
		<ListWrapper>
			<ListTitle>{title}</ListTitle>
			<UnorderedList>
				{list.map((item, i) => (
					<ListItem key={i} onClick={action(item.id)}>
						<ItemName>{item.name}</ItemName>
						<ItemValue>{item.avgAge}</ItemValue>
					</ListItem>
				))}
			</UnorderedList>
		</ListWrapper>
	)
}

export default AverageList
