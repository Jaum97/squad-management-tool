import React, { Fragment } from 'react'

import Header from '../../components/header'
import AverageList from './AverageList'
import {
	AddTeamButton,
	ListContainer,
	Content,
	SectionContainer,
	SectionHeader,
	SectionTitle,
	TeamButtonText,
	TeamsBody,
	Top5Body,
	WrapperLeft,
	WrapperRight,
	GradientSectionContainer,
	AvatarContainer,
	AvatarTitle,
	Player,
	MPPContainer,
	LeftSide,
	RightSide,
	CircleOutline
} from './styles'
import TeamTable from './TeamTable'
import Avatar from 'react-avatar'
import Page from '../../components/Page'
// import { IViewProps } from './types'

function MyTeam(): JSX.Element {
	//props: IViewProps
	// const {} = props

	return (
		<Page>
			<Content>
				<WrapperLeft>
					<SectionContainer>
						<SectionHeader>
							<SectionTitle>{'My teams'}</SectionTitle>
							<AddTeamButton>
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
								<AvatarTitle>Most picked player</AvatarTitle>
								<MPPContainer>
									<AvatarContainer>
										<Avatar
											round
											name="Foo Bar"
											size="150"
										/>
									</AvatarContainer>
								</MPPContainer>
							</Player>
						</LeftSide>
						<RightSide>
							<Player>
								<AvatarTitle>Least picked player</AvatarTitle>
								<AvatarContainer>
									<Avatar round name="Foo Bar" size="150" />
								</AvatarContainer>{' '}
							</Player>
						</RightSide>
					</GradientSectionContainer>
				</WrapperRight>
			</Content>
		</Page>
	)
}

export default MyTeam
