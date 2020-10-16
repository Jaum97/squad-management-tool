import React from 'react';
import Avatar from 'react-avatar';

import { WhiteSection } from '../../components';
import { getInitials } from '../../shared/utils/name';
import { Column } from '../../styles/grid';
import { CellToolTip } from '../../styles/tooltip';
import AverageList from './AverageList';
import {
    AvatarContainer, AvatarTitle, BadgeContainer, CircleOutline, GradientSectionContainer, LeftSide,
    ListContainer, MPPContainer, PercentageBadge, Placeholder, Player, RightSide, TeamsBody,
    Top5Body, WrapperLeft, WrapperRight
} from './styles';
import TeamTable from './TeamTable';
import { IViewProps } from './types';

function MyTeams(props: IViewProps): JSX.Element {
	const {
		highestAvgAgeTeams,
		leastPicked,
		lowestAvgAgeTeams,
		mostPicked,
		teams,
		addTeam,
		removeTeam,
		editTeam
	} = props

	return (
		<Column>
			<Column sm="12" md="6" lg="6">
				<WrapperLeft>
					<WhiteSection title="My teams" onClick={addTeam}>
						<TeamsBody>
							{teams.length ? (
								<TeamTable
									teams={teams}
									editTeam={editTeam}
									removeTeam={removeTeam}
								/>
							) : (
								<Placeholder>
									{"You don't have any teams yet"}
								</Placeholder>
							)}
						</TeamsBody>
					</WhiteSection>
				</WrapperLeft>
			</Column>

			<Column sm="12" md="6" lg="6">
				<WrapperRight>
					<WhiteSection title="Top 5">
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
					</WhiteSection>
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
			<CellToolTip />
		</Column>
	)
}

export default MyTeams
