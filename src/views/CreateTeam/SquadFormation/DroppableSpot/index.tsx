import React, { useState, useEffect } from 'react'
import Avatar from 'react-avatar'
import { useDrop } from 'react-dnd'

import { DraggableTypes } from '../../../../config/dnd/types'
import {
	AvatarContainer,
	PlaceholderContainer,
	PlayerPlaceholder
} from './styles'
import { IProps } from './types'
import { ITeamPlayer } from '../../../../shared/interfaces/team'
import { Maybe } from '../../../../shared/interfaces/common'

function DroppableSpot(props: IProps) {
	const { selectPlayer, row, col, formation, editingPlayer } = props

	const position = [row, col]

	const [droppedPlayer, setDroppedPlayer] = useState<Maybe<ITeamPlayer>>(
		editingPlayer
	)

	const removePlayer = () => {
		setDroppedPlayer(undefined)
	}

	useEffect(removePlayer, [formation])

	const [, drop] = useDrop({
		accept: DraggableTypes.CARD,
		drop: ({ player }: any) => {
			const teamPlayer = { ...player, position }

			setDroppedPlayer(teamPlayer)
			selectPlayer(teamPlayer)
		},
		collect: (mon) => ({
			isOver: !!mon.isOver(),
			canDrop: !!mon.canDrop()
		})
	})

	const thisPlayer = droppedPlayer || editingPlayer

	const hasPlayer = Boolean(thisPlayer)

	const name = hasPlayer
		? (thisPlayer as ITeamPlayer).firstname +
		  (thisPlayer as ITeamPlayer).lastname
		: ''

	return (
		<div ref={drop}>
			{hasPlayer ? (
				<AvatarContainer>
					<Avatar round name={name} size="88" />
				</AvatarContainer>
			) : (
				<PlaceholderContainer>
					<PlayerPlaceholder>{'+'}</PlayerPlaceholder>
				</PlaceholderContainer>
			)}
		</div>
	)
}

export default DroppableSpot
