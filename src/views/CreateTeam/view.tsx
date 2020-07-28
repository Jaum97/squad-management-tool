import React from 'react'
import { useHistory } from 'react-router-dom'
import Select from 'react-select'

import RadioButton from '../../components/RadioButton'
import {
	AddTeamButton,
	Content,
	SectionContainer,
	SectionHeader,
	SectionTitle,
	TeamButtonText
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
	Wrapper
} from './styles'
import InputTag from './TagInput'
import { IViewProps, ISelectOption } from './types'
import { Formation } from '../../shared/interfaces/team'

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

	return (
		<Content>
			<AddTeamButton onClick={history.goBack}>
				<TeamButtonText>{'<'}</TeamButtonText>
			</AddTeamButton>
			<Wrapper>
				<SectionContainer>
					<SectionHeader>
						<SectionTitle>{'Create your team'}</SectionTitle>
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
					</RowContainer>

					<Title>{'CONFIGURE SQUAD'}</Title>

					<RowContainer>
						<ColumnContainer>
							<p>Formation</p>
							<Select
								onChange={handleFormationChange}
								options={formations}
								value={getFormationOption(formation)}
							/>
							<SquadFormation
								team={team}
								formation={formation}
								selectPlayer={selectPlayer}
							/>
							<SaveButton onClick={saveTeam}>{'Save'}</SaveButton>
						</ColumnContainer>

						<ColumnContainer>
							<p>Search Players</p>
							<Input
								onChange={handleSearchChange}
								placeholder="Search"
								value={searchInput}
							/>
							{loading ? (
								<p>Loading ...</p>
							) : availablePlayers.length ? (
								availablePlayers.map(
									(props, i) =>
										(
											<PlayerCard key={i} {...props} />
										) as any
								)
							) : (
								<p>
									{searchInput.length
										? 'No player found'
										: 'Write something in the search for players'}
								</p>
							)}
						</ColumnContainer>
					</RowContainer>
				</SectionContainer>
			</Wrapper>
		</Content>
	)
}

export default CreateTeam
