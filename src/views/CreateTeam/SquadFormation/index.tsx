import React from 'react'

import {
	FormationSectionContainer,
	PlaceholderContainer,
	PlayerPlaceholder,
	TeamFormationContainer
} from '../styles'

function SquadFormation() {
	return (
		<TeamFormationContainer>
			<FormationSectionContainer>
				{Array(3)
					.fill(0)
					.map((x, i) => (
						<PlaceholderContainer key={i}>
							<PlayerPlaceholder>{'+'}</PlayerPlaceholder>
						</PlaceholderContainer>
					))}
			</FormationSectionContainer>
			<FormationSectionContainer>
				{Array(1)
					.fill(0)
					.map((x, i) => (
						<PlaceholderContainer key={i}>
							<PlayerPlaceholder>{'+'}</PlayerPlaceholder>
						</PlaceholderContainer>
					))}
			</FormationSectionContainer>
			<FormationSectionContainer>
				{Array(3)
					.fill(0)
					.map((x, i) => (
						<PlaceholderContainer key={i}>
							<PlayerPlaceholder>{'+'}</PlayerPlaceholder>
						</PlaceholderContainer>
					))}
			</FormationSectionContainer>
			<FormationSectionContainer>
				{Array(3)
					.fill(0)
					.map((x, i) => (
						<PlaceholderContainer key={i}>
							<PlayerPlaceholder>{'+'}</PlayerPlaceholder>
						</PlaceholderContainer>
					))}
			</FormationSectionContainer>
			<FormationSectionContainer>
				{Array(1)
					.fill(0)
					.map((x, i) => (
						<PlaceholderContainer key={i}>
							<PlayerPlaceholder>{'+'}</PlayerPlaceholder>
						</PlaceholderContainer>
					))}
			</FormationSectionContainer>
		</TeamFormationContainer>
	)
}

export default SquadFormation
