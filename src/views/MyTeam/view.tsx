import React, { Fragment } from 'react'

import Header from '../../components/header'
import AverageList from './AverageList'
import {
	AddTeamButton,
	ListContainer,
	Page,
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

// import { IViewProps } from './types'

function MyTeam(): JSX.Element {
	//props: IViewProps
	// const {} = props
	return (
		<Fragment>
			<Header />
			<Page>
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
								<AverageList />
							</ListContainer>
							<ListContainer>
								<AverageList />
							</ListContainer>{' '}
						</Top5Body>
					</SectionContainer>

					<SectionContainer>
						<SectionHeader>
							<SectionTitle>{'Top 5'}</SectionTitle>
						</SectionHeader>
						<Top5Body>
							<ListContainer>
								<AverageList />
							</ListContainer>
							<ListContainer>
								<AverageList />
							</ListContainer>{' '}
						</Top5Body>
					</SectionContainer>
				</WrapperRight>
			</Page>
		</Fragment>
	)
}

export default MyTeam
