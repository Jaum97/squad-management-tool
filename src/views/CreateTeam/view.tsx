import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import RadioButton from '../../components/RadioButton'
import WhiteSection from '../../components/WhiteSection'
import { Formation } from '../../shared/interfaces/team'
// TODO: Share across pages
import { Content, Placeholder } from '../MyTeams/styles'
import PlayerCard from './PlayerCard'
import SquadFormation from './SquadFormation'
import {
	Center,
	ColumnContainer,
	FloatSaveButton,
	FormationSelect,
	FormationSelectContainer,
	Input,
	InputContainer,
	InputTitle,
	PlayerCardsContainer,
	PlayerTooltip,
	RadioButtonsContainer,
	SaveButton,
	SaveButtonContainer,
	SearchPlayerInputContainer,
	SelectTitle,
	Spacer,
	SquadInfoContainer,
	TagsContainer,
	TeamInfoContainer,
	Textarea,
	Title,
	TypeContainer,
	Wrapper
} from './styles'
import InputTag from './TagInput'
import { ISelectOption, IViewProps } from './types'

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

	const isInvalid = (x: string) => inputsWithError.includes(x)

	const getFormationOption = (value: Formation): ISelectOption => ({
		value,
		label: value.join(' - ')
	})

	const hasPlayers = Boolean(availablePlayers.length)

	const messageSearch = 'No player found'

	const messageEmpty = 'Search for players'

	const { length } = searchInput

	const messageIfNotLoading = length >= 4 ? messageSearch : messageEmpty

	const placeholderMessage = loading ? 'loading...' : messageIfNotLoading

	return (
		<Content>
			<Wrapper>
				<WhiteSection title="Create your team">
					<Title>{'TEAM INFORMATION'}</Title>
					<TeamInfoContainer>
						<ColumnContainer>
							<Center>
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
							</Center>
							<Center>
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
							</Center>
						</ColumnContainer>

						<ColumnContainer>
							<InputContainer>
								<InputTitle invalid={isInvalid('website')}>
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
										checked={team.type === 'fantasy'}
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
					</TeamInfoContainer>

					<Title>{'CONFIGURE SQUAD'}</Title>

					<SquadInfoContainer>
						<ColumnContainer>
							<FormationSelectContainer>
								<SelectTitle>{'Formation'}</SelectTitle>
								<FormationSelect
									data-testid="formation-select"
									onChange={handleFormationChange}
									options={formations}
									value={getFormationOption(formation)}
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
							<SelectTitle>{'Search Players'}</SelectTitle>
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
										{placeholderMessage}
									</Placeholder>
								)}
							</PlayerCardsContainer>
						</ColumnContainer>
					</SquadInfoContainer>
				</WhiteSection>
				<FloatSaveButton onClick={saveTeam}>
					<FontAwesomeIcon icon="save" />
				</FloatSaveButton>
			</Wrapper>
			<PlayerTooltip id="player-tooltip" />
		</Content>
	)
}

export default CreateTeam
