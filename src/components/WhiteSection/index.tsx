import {
	SectionContainer,
	SectionHeader,
	SectionTitle,
	AddTeamButton,
	TeamButtonText
} from './styles'
import { IProps } from './types'
import React from 'react'

function WhiteSection(props: IProps) {
	const { title, children, onClick } = props

	return (
		<SectionContainer>
			<SectionHeader>
				<SectionTitle>{title}</SectionTitle>
				{onClick ? (
					<AddTeamButton onClick={onClick}>
						<TeamButtonText>{'+'}</TeamButtonText>
					</AddTeamButton>
				) : null}
			</SectionHeader>
			{children}
		</SectionContainer>
	)
}

export default WhiteSection
