import React from 'react';

import {
    AddTeamButton, SectionContainer, SectionHeader, SectionTitle, TeamButtonText
} from './styles';
import { IProps } from './types';

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
