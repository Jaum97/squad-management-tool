import React, { useContext, useEffect, useState } from 'react';
import Avatar from 'react-avatar';
import { useDrop } from 'react-dnd';

import { DraggableTypes } from '../../../../config/dnd/types';
import { getInitials } from '../../../../shared/utils/name';
import { CreateTeamContext } from '../../context';
import { AvatarContainer, PlaceholderContainer, PlayerPlaceholder } from './styles';
import { IDropParamType, IProps } from './types';

function DroppableSpot(props: IProps) {
	const { row, col, formation, editingPlayer } = props

	const selectPlayer = useContext(CreateTeamContext)

	const position = [row, col]

	const [droppedPlayer, setDroppedPlayer] = useState(editingPlayer)

	const removePlayer = () => setDroppedPlayer(undefined)

	useEffect(removePlayer, [formation])

	const [{ isOver, canDrop }, drop] = useDrop({
		accept: DraggableTypes.CARD,
		drop: ({ player }: IDropParamType) => {
			const teamPlayer = { ...player, position }

			setDroppedPlayer(teamPlayer)
			selectPlayer?.(teamPlayer)
		},
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
			canDrop: !!monitor.canDrop()
		})
	})

	const thisPlayer = droppedPlayer || editingPlayer

	const { firstname = '', lastname = '', nationality = '', age = '' } =
		thisPlayer || {}

	const hasPlayer = Boolean(thisPlayer)

	const name = hasPlayer ? firstname + lastname : ''

	const playerInfo = thisPlayer
		? [`Name: ${name}`, `Nationality: ${nationality}`, `Age: ${age}`].join(
				'<br/>'
		  )
		: ''

	return (
		<div
			data-for="player-tooltip"
			data-tip={playerInfo}
			data-multiline
			ref={drop}>
			{hasPlayer ? (
				<AvatarContainer>
					<Avatar
						initials={getInitials}
						title=" "
						round
						name={name}
						size="82"
					/>
				</AvatarContainer>
			) : (
				<PlaceholderContainer dim={isOver && canDrop}>
					<PlayerPlaceholder>{'+'}</PlayerPlaceholder>
				</PlaceholderContainer>
			)}
		</div>
	)
}

export default DroppableSpot
