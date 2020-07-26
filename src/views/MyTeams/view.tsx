import React from 'react'
import Avatar from 'react-avatar'

import AverageList from './AverageList'
import {
	AddTeamButton,
	AvatarContainer,
	AvatarTitle,
	BadgeContainer,
	CircleOutline,
	Content,
	GradientSectionContainer,
	LeftSide,
	ListContainer,
	MPPContainer,
	PercentageBadge,
	Player,
	RightSide,
	SectionContainer,
	SectionHeader,
	SectionTitle,
	TeamButtonText,
	TeamsBody,
	Top5Body,
	WrapperLeft,
	WrapperRight
} from './styles'
import TeamTable from './TeamTable'
import { routesEnum } from '../../routes/enum'

import { IViewProps } from './types'

function MyTeams(props: IViewProps): JSX.Element {
	const { navigateTo } = props

	const onClick = navigateTo(routesEnum.CREATE_TEAM as 'CREATE_TEAM')

	return (
		<Content>
			<WrapperLeft>
				<SectionContainer>
					<SectionHeader>
						<SectionTitle>{'My teams'}</SectionTitle>
						<AddTeamButton onClick={onClick}>
							<TeamButtonText>{'+'}</TeamButtonText>
						</AddTeamButton>
					</SectionHeader>
					<TeamsBody>
						<TeamTable />
					</TeamsBody>
				</SectionContainer>
			</WrapperLeft>

			<WrapperRight>
				<SectionContainer>
					<SectionHeader>
						<SectionTitle>{'Top 5'}</SectionTitle>
					</SectionHeader>
					<Top5Body>
						<ListContainer>
							<AverageList title={'Highest avg age'} />
						</ListContainer>
						<ListContainer>
							<AverageList title={'Lowest avg age'} />
						</ListContainer>{' '}
					</Top5Body>
				</SectionContainer>

				<GradientSectionContainer>
					<CircleOutline />
					<LeftSide>
						<Player>
							<AvatarTitle>{'Most picked player'}</AvatarTitle>
							<BadgeContainer>
								<PercentageBadge>{'75%'}</PercentageBadge>
							</BadgeContainer>
							<MPPContainer>
								<AvatarContainer>
									<Avatar round name="Foo Bar" size="140" />
								</AvatarContainer>
							</MPPContainer>
						</Player>
					</LeftSide>
					<RightSide>
						<Player>
							<AvatarTitle>{'Least picked player'}</AvatarTitle>
							<BadgeContainer>
								<PercentageBadge>{'25%'}</PercentageBadge>
							</BadgeContainer>
							<AvatarContainer>
								<Avatar round name="Foo Bar" size="140" />
							</AvatarContainer>{' '}
						</Player>
					</RightSide>
				</GradientSectionContainer>
			</WrapperRight>
		</Content>
	)
}

export default MyTeams
