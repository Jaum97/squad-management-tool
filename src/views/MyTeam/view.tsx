import React, { Fragment } from 'react'
import Header from '../../components/header'
import {
	Page,
	SectionContainer,
	SectionHeader,
	SectionTitle,
	SectionBody,
	AddTeamButton,
	TeamButtonText
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
				<SectionContainer>
					<SectionHeader>
						<SectionTitle>{'My teams'}</SectionTitle>
						<AddTeamButton>
							<TeamButtonText>{'+'}</TeamButtonText>
						</AddTeamButton>
					</SectionHeader>
					<SectionBody>
						<TeamTable />
					</SectionBody>
				</SectionContainer>
				<SectionContainer>
					<SectionHeader>
						<SectionTitle>{'My teams'}</SectionTitle>
						{/* <AddTeamButton></AddTeamButton> */}
					</SectionHeader>
					<SectionBody></SectionBody>
				</SectionContainer>
			</Page>
		</Fragment>
	)
}

export default MyTeam
