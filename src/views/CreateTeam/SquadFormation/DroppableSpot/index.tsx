import React, { useState, useEffect, Fragment } from 'react'
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
import ReactTooltip from 'react-tooltip'

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

	const playerInfo = thisPlayer
		? [thisPlayer.nationality, thisPlayer.player_name].join('\n')
		: undefined
	// playerInfo ? (
	// 	<ul>
	// 		<li>thisPlayer.player_name</li>
	// 		<li>thisPlayer.player_name</li>
	// 	</ul>
	// ) : null
	return (
		<div data-tip={name} ref={drop}>
			{hasPlayer ? (
				<AvatarContainer>
					<Avatar title=" " round name={name} size="88" />
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
