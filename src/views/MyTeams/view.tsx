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
	WrapperRight,
	Placeholder,
	TransparentWrapper
} from './styles'
import TeamTable from './TeamTable'
import { IViewProps } from './types'
import { getInitials } from '../../shared/utils/name'
import { Column } from '../../styles/grid'

function MyTeams(props: IViewProps): JSX.Element {
	const {
		highestAvgAgeTeams,
		leastPicked,
		lowestAvgAgeTeams,
		mostPicked,
		teams,
		addTeam,
		editTeam
	} = props

	return (
		<Column>
			<Column sm="12" md="6" lg="6">
				<WrapperLeft>
					<SectionContainer>
						<SectionHeader>
							<SectionTitle>{'My teams'}</SectionTitle>
							<AddTeamButton onClick={addTeam}>
								<TeamButtonText>{'+'}</TeamButtonText>
							</AddTeamButton>
						</SectionHeader>
						<TeamsBody>
							{teams.length ? (
								<TeamTable teams={teams} editTeam={editTeam} />
							) : (
								<Placeholder>
									{"You don't have any teams yet"}
								</Placeholder>
							)}
						</TeamsBody>
					</SectionContainer>
				</WrapperLeft>
			</Column>

			<Column sm="12" md="6" lg="6">
				<WrapperRight>
					<SectionContainer>
						<SectionHeader>
							<SectionTitle>{'Top 5'}</SectionTitle>
						</SectionHeader>
						{teams.length ? (
							<Top5Body>
								<ListContainer>
									<AverageList
										list={highestAvgAgeTeams}
										action={editTeam}
										title={'Highest avg age'}
									/>
								</ListContainer>
								<ListContainer>
									<AverageList
										list={lowestAvgAgeTeams}
										action={editTeam}
										title={'Lowest avg age'}
									/>
								</ListContainer>{' '}
							</Top5Body>
						) : (
							<Placeholder height={152}>
								{"You don't have any teams yet"}
							</Placeholder>
						)}
					</SectionContainer>
					<GradientSectionContainer>
						<CircleOutline />
						<LeftSide>
							<Player>
								<AvatarTitle>
									{'Most picked player'}
								</AvatarTitle>

								<MPPContainer>
									<AvatarContainer>
										<BadgeContainer>
											<PercentageBadge>{`${mostPicked.percentage}%`}</PercentageBadge>
										</BadgeContainer>
										<Avatar
											round
											initials={getInitials}
											name={mostPicked.name}
											size="140"
										/>
									</AvatarContainer>
								</MPPContainer>
							</Player>
						</LeftSide>
						<RightSide>
							<Player>
								<AvatarTitle>
									{'Least picked player'}
								</AvatarTitle>
								<AvatarContainer>
									<BadgeContainer>
										<PercentageBadge>{`${leastPicked.percentage}%`}</PercentageBadge>
									</BadgeContainer>
									<Avatar
										round
										initials={getInitials}
										name={leastPicked.name}
										size="140"
									/>
								</AvatarContainer>{' '}
							</Player>
						</RightSide>
					</GradientSectionContainer>
				</WrapperRight>
			</Column>
		</Column>
	)
}

export default MyTeams
