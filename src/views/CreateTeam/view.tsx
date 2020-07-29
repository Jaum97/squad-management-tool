import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'

import RadioButton from '../../components/RadioButton'

// TODO: Share across pages
import {
	AddTeamButton,
	Content,
	SectionContainer,
	SectionHeader,
	SectionTitle,
	TeamButtonText,
	Placeholder
} from '../MyTeams/styles'

import PlayerCard from './PlayerCard'
import SquadFormation from './SquadFormation'
import {
	ColumnContainer,
	Input,
	InputContainer,
	InputTitle,
	RadioButtonsContainer,
	RowContainer,
	SaveButton,
	Spacer,
	TagsContainer,
	Textarea,
	Title,
	TypeContainer,
	Wrapper,
	FormationSelectContainer,
	SelectTitle,
	FormationSelect,
	SaveButtonContainer,
	PlayerCardsContainer,
	SearchPlayerInputContainer
} from './styles'
import InputTag from './TagInput'
import { IViewProps, ISelectOption } from './types'
import { Formation } from '../../shared/interfaces/team'
import { Column } from '../../styles/grid'

function CreateTeam(props: IViewProps): JSX.Element {
	const {
		availablePlayers,
		formation,
		formations,
		inputsWithError,
		loading,
		searchInput,
		team,
		addTag,
		handleFormationChange,
		handleSearchChange,
		removeTag,
		saveTeam,
		selectPlayer,
		updateTeam
	} = props

	const history = useHistory()

	const isInvalid = (x: string) => inputsWithError.includes(x)

	const getFormationOption = (value: Formation): ISelectOption => ({
		value,
		label: value.join(' - ')
	})

	const hasPlayers = Boolean(availablePlayers.length)

	const placeholderMessage =
		searchInput.length >= 4
			? 'No player found'
			: 'Write at least 4 characers to search for players'

	return (
		<Fragment>
			<AddTeamButton onClick={history.goBack}>
				<TeamButtonText>{'<'}</TeamButtonText>
			</AddTeamButton>
			<Content>
				<Column sm="12" md="12" lg="12">
					<Wrapper>
						<SectionContainer>
							<SectionHeader>
								<SectionTitle>
									{'Create your team'}
								</SectionTitle>
							</SectionHeader>

							<Title>{'TEAM INFORMATION'}</Title>
							<RowContainer>
								<ColumnContainer>
									<InputContainer>
										<InputTitle invalid={isInvalid('name')}>
											{'Team name'}
										</InputTitle>
										<Input
											invalid={isInvalid('name')}
											onChange={updateTeam('name')}
											placeholder="Insert team name"
											value={team.name}
										/>
									</InputContainer>

									<InputContainer>
										<InputTitle>{'Description'}</InputTitle>
										<Textarea
											cols={10}
											maxLength={100}
											onChange={updateTeam('description')}
											rows={12}
											value={team.description}
										/>
									</InputContainer>
								</ColumnContainer>

								<ColumnContainer>
									<InputContainer>
										<InputTitle
											invalid={isInvalid('website')}>
											{'Team website'}
										</InputTitle>
										<Input
											invalid={isInvalid('website')}
											onChange={updateTeam('website')}
											placeholder="http://myteam.com"
											value={team.website}
										/>
									</InputContainer>

									<TypeContainer>
										<InputTitle>{'Team type'}</InputTitle>
										<RadioButtonsContainer>
											<RadioButton
												checked={team.type === 'real'}
												onChange={updateTeam('type')}
												text="Real"
											/>
											<Spacer />
											<RadioButton
												checked={
													team.type === 'fantasy'
												}
												onChange={updateTeam('type')}
												text="Fantasy"
											/>
										</RadioButtonsContainer>
									</TypeContainer>

									<TagsContainer>
										<InputTitle>{'Tags'}</InputTitle>
										<InputTag
											addTag={addTag}
											removeTag={removeTag}
											tags={team.tags}
										/>
									</TagsContainer>
								</ColumnContainer>
							</RowContainer>

							<Title>{'CONFIGURE SQUAD'}</Title>

							<RowContainer>
								<ColumnContainer>
									<FormationSelectContainer>
										<SelectTitle>{'Formation'}</SelectTitle>
										<FormationSelect
											onChange={handleFormationChange}
											options={formations}
											value={getFormationOption(
												formation
											)}
										/>
									</FormationSelectContainer>
									<FormationSelectContainer>
										<SquadFormation
											team={team}
											formation={formation}
											selectPlayer={selectPlayer}
										/>
									</FormationSelectContainer>
									<SaveButtonContainer>
										<SaveButton onClick={saveTeam}>
											{'Save'}
										</SaveButton>
									</SaveButtonContainer>
								</ColumnContainer>

								<ColumnContainer>
									<SelectTitle>
										{'Search Players'}
									</SelectTitle>
									<SearchPlayerInputContainer>
										<Input
											onChange={handleSearchChange}
											placeholder="Search"
											value={searchInput}
										/>
									</SearchPlayerInputContainer>
									<PlayerCardsContainer border={hasPlayers}>
										{hasPlayers ? (
											availablePlayers.map((p, i) => (
												<PlayerCard key={i} {...p} />
											))
										) : (
											<Placeholder>
												{loading
													? 'loading...'
													: placeholderMessage}
											</Placeholder>
										)}
									</PlayerCardsContainer>
								</ColumnContainer>
							</RowContainer>
						</SectionContainer>
					</Wrapper>
				</Column>
			</Content>
		</Fragment>
	)
}

export default CreateTeam
