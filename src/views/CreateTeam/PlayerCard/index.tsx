import {
	PlayerCardContainer,
	CardLeftSide,
	FieldWrapper,
	FieldLabel,
	PlayerField
} from './styles'
import React from 'react'

function PlayerCard(props: any) {
	const { player_name, nationality, age } = props
	return (
		<PlayerCardContainer key={player_name + nationality}>
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
	)
}

export default PlayerCard
