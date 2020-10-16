import React from 'react';
import { DragSource, useDrag } from 'react-dnd';

import { collect } from '../../../App';
import { DraggableTypes } from '../../../config/dnd/types';
import { IPlayer } from '../../../shared/interfaces/player';
import { CardLeftSide, FieldLabel, FieldWrapper, PlayerCardContainer, PlayerField } from './styles';

/**
 * Specifies the drag source contract.
 * Only `beginDrag` function is required.
 */
export const cardSource = {
	beginDrag(props: { id: string }) {
		// Return the data describing the dragged item
		const item = { id: props.id }
		return item
	},

	endDrag(_: any, monitor: { didDrop: () => any }) {
		if (!monitor.didDrop()) return

		// When dropped on a compatible target, do something
		// const item = monitor.getItem()
		// const dropResult = monitor.getDropResult()
		// CardActions.moveCardToList(item.id, dropResult.listId)
	}
}

function PlayerCard(props: IPlayer & { connectDragSource: any }) {
	const { player_name, nationality, age } = props

	// These two props are injected by React DnD,
	// as defined by your `collect` function above:
	const { connectDragSource } = props

	const [, dragRef] = useDrag({
		item: { type: DraggableTypes.CARD, player: props }
	})

	return connectDragSource(
		<div title="player-card" ref={dragRef}>
			<PlayerCardContainer>
				<CardLeftSide>
					<FieldWrapper>
						<FieldLabel>{'Name: '}</FieldLabel>
						<PlayerField>{player_name}</PlayerField>
					</FieldWrapper>

					<FieldWrapper>
						<FieldLabel>{'Nationality: '}</FieldLabel>
						<PlayerField>{nationality}</PlayerField>
					</FieldWrapper>
				</CardLeftSide>

				<FieldWrapper>
					<FieldLabel>{'Age: '}</FieldLabel>

					<PlayerField>{age}</PlayerField>
				</FieldWrapper>
			</PlayerCardContainer>
		</div>
	)
}

export default DragSource(DraggableTypes.CARD, cardSource, collect)(PlayerCard)
